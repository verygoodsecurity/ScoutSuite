import os
import sys
import github

class GithubFacade:
    def __init__(self, credentials):
        self._credentials = credentials

    async def fetch_all(self):
        data = {}
        g = github.Github(self._credentials)

        for org in g.get_user().get_orgs():
            try:
                if org.name:
                    data[org.name] = {
                        "repos": {},
                        "two_factor_auth": org.two_factor_requirement_enabled,
                    }
                    for repo in org.get_repos():
                        for branch in repo.get_branches():
                            if branch.name == repo.default_branch:
                                data[org.name]["repos"][repo.name] = {
                                    "name": repo.name,
                                    "public": repo.private == False,
                                    "alerts": repo.get_vulnerability_alert(),
                                    "default_branch": branch.name,
                                    "protected": branch.protected,
                                    "status_checks_required": self.has_required_status_checks(branch),
                                    "reviews_required": self.has_required_pull_request_reviews(branch),
                                }
            except:
                print("Unexpected error:", sys.exc_info()[0])
                pass

        return data

    def has_required_status_checks(self, branch):
        try:
            branch.get_required_status_checks()
            return True
        except:
            return False

    def has_required_pull_request_reviews(self, branch):
        try:
            review_count = branch.get_required_pull_request_reviews().required_approving_review_count
            return review_count > 0
        except:
            return False