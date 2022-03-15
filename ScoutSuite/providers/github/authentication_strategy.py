import os
from ScoutSuite.providers.base.authentication_strategy import AuthenticationStrategy

class GithubAuthenticationStrategy(AuthenticationStrategy):
    """
    Implements authentication for GitHub
    """

    def authenticate(self, **kwargs):
        return os.environ.get("GITHUB_TOKEN") 