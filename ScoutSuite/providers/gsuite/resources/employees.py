import abc

from ScoutSuite.providers.gsuite.resources.base import GsuiteResources
from ScoutSuite.providers.gsuite.facade.base import GsuiteFacade

class Employees(GsuiteResources, metaclass=abc.ABCMeta):
    def __init__(self, facade):
        super(Employees, self).__init__(facade)

    async def fetch_all(self, **kwargs):
        self["directory"] = await self.facade.fetch_all()
        self["employees_count"] = len(self["directory"]) 