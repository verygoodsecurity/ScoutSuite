import os
import googleapiclient.discovery

class GsuiteFacade:
    def __init__(self, credentials):
        self._credentials = credentials

    async def fetch_all(self):
        service = googleapiclient.discovery.build(
            "admin", "directory_v1", credentials=self._credentials
        )
        users_service = service.users()
        request = users_service.list(
            customer="my_customer", maxResults=100, orderBy="email"
        )

        users = []
        while request is not None:
            response = request.execute()
            users = users + response.get("users")
            request = users_service.list_next(request, response)

        result = {}

        for user in users:
          result[user["id"]] = user

        return result 