import base64
import requests

class BaseAPIService:
    def __init__(self, base_url,username, password, api_key) -> None:
        self.base_url = base_url
        self.username = username
        self.password = password
        self.api_key = api_key
        self.session = requests.Session()
        self.session.auth = (username, password)
        self.headers = {
            'Authorization': f"Basic {f'{self.username}:{self.password}'.encode('utf-8').decode('utf-8')}",
            'X-API-KEY': api_key,
       
        }
       
      
       

    def authorize_access(self):
        response = requests.get(self.base_url, headers=self.headers)
        print(response.content.decode('utf-8'))
        return response.json()

    def get(self, endpoint, params=None):
        """
        Sends a GET request to the specified endpoint.
        """ 
        url = f'{self.base_url}{endpoint}'
        response = None

        try:
            response = requests.get(url, headers=self.headers, params=params)
            print(response.content.decode('utf-8'))
            print(url)
            if response.status_code == 200:
                return response.json()
            else:
                print(f"Error: {response.status_code}")
                return None

        except requests.exceptions.RequestException as e:
            print(f"Request Error: {e}")
            return None