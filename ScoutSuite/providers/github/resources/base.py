import abc

from ScoutSuite.providers.base.resources.base import Resources, CompositeResources

class GithubResources(Resources, metaclass=abc.ABCMeta):
   """This is the base class for Github resources."""

   pass

class GithubCompositeResources(GithubResources, CompositeResources, metaclass=abc.ABCMeta):

   pass 