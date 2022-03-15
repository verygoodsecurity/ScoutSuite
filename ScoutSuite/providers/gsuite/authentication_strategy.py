import os
from ScoutSuite.providers.base.authentication_strategy import AuthenticationStrategy
import google.oauth2.credentials

class GsuiteAuthenticationStrategy(AuthenticationStrategy):
    """
    Implements authentication for Gsuite
    """

    def authenticate(self, **kwargs):
        creds = google.oauth2.credentials.Credentials(
            os.environ.get("GSUITE_TOKEN"),
            token_uri="https://accounts.google.com/o/oauth2/token",
            refresh_token=os.environ.get("GSUITE_REFRESH_TOKEN"),
            client_id=os.environ.get("GSUITE_CLIENT_ID"),
            client_secret=os.environ.get("GSUITE_CLIENT_SECRET"),
        )
        return creds 