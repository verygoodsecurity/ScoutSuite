import os
import traceback
import github

class GithubFacade:
    def __init__(self, credentials, repositories):
        self._credentials = credentials
        self._repositories = repositories

    async def fetch_all(self):
        data = {}
        g = github.Github(self._credentials)

        if self._repositories:
            self._repositories = [int(s) for s in self._repositories.split(',')]

        for org in g.get_user().get_orgs():
            try:
                if org.name:
                    data[org.name] = {
                        "repos": {},
                        "two_factor_auth": org.two_factor_requirement_enabled,
                    }
                    for repo in org.get_repos():
                        if self._repositories and repo.id not in self._repositories:
                            continue
                        if not list(repo.get_branches()):
                            continue
                        default_branch = repo.default_branch
                        data[org.name]["repos"][repo.name] = {
                            "name": repo.name,
                            "public": repo.private is False,
                            "alerts": repo.get_vulnerability_alert(),
                            "default_branch": default_branch,
                            "protected": repo.get_branch(default_branch).protected,
                            "status_checks_required": self.has_required_status_checks(default_branch),
                            "reviews_required": self.has_required_pull_request_reviews(default_branch),
                        }
            except:
                print("Unexpected error:", traceback.format_exc())

        return data

    @staticmethod
    def has_required_status_checks(branch):
        try:
            branch.get_required_status_checks()
            return True
        except:
            return False

    @staticmethod
    def has_required_pull_request_reviews(branch):
        try:
            return branch.get_required_pull_request_reviews().required_approving_review_count > 0
        except:
            return False