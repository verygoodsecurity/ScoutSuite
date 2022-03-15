from ScoutSuite.providers.gsuite.facade.base import GsuiteFacade
from ScoutSuite.providers.base.services import BaseServicesConfig
from ScoutSuite.providers.gsuite.resources.employees import Employees

class GsuiteServicesConfig(BaseServicesConfig):
    """
    Object that holds the necessary Gsuite configuration for all services in scope.
    """

    def __init__(self, credentials=None, **kwargs):
        super(GsuiteServicesConfig, self).__init__(credentials)
        facade = GsuiteFacade(credentials)
        self.employees = Employees(facade)

    def _is_provider(self, provider_name):
        return provider_name == 'gsuite'