import abc

from ScoutSuite.providers.github.resources.base import GithubResources
from ScoutSuite.providers.github.facade.base import GithubFacade

class Organizations(GithubResources, metaclass=abc.ABCMeta):
    def __init__(self, facade):
        super(Organizations, self).__init__(facade)

    async def fetch_all(self, **kwargs):
        self["organization"] = await self.facade.fetch_all()
        self["organizations_count"] = len(self["organization"]) 