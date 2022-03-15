from ScoutSuite.providers.github.facade.base import GithubFacade
from ScoutSuite.providers.base.services import BaseServicesConfig
from ScoutSuite.providers.github.resources.organization import Organizations

class GithubServicesConfig(BaseServicesConfig):
    """
    Object that holds the necessary Github configuration for all services in scope.
    """

    def __init__(self, credentials=None, repositories=None, **kwargs):
        super(GithubServicesConfig, self).__init__(credentials, **kwargs)
        facade = GithubFacade(credentials, repositories)
        self.organizations = Organizations(facade)

    def _is_provider(self, provider_name):
        return provider_name == 'github'