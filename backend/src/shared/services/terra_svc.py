from src.shared.services.base_api import BaseAPIService
from src.water.data.samples import *
class TerraAPIService(BaseAPIService):
    def __init__(self):
        config = {
            "username": "...",
            "password": "..",
            "base_url": "..", 
            "api_key": ".."
        }
        super().__init__(config["base_url"], config["username"], config["password"], config["api_key"])


    def authorize_access(self):
        return super().authorize_access()
    
    ##### General System Information Methods #####

    def get_session(self):
        expected = None
        # return super().get("/session")
        return expected
    
    def get_system_info(self, system_key):
        """
        Get information about a specific system.

        Args:
            system_key (str): Identification key of the system.

        Returns:
            dict: System information.
        """
        url = f"/systems/{system_key}"
        response = super().get(url)
        return response.get("data", {})
    


    def get_measurements(self, interval, start_date, end_date):
        """
        Returns measurements for specific abbreviations within a date range for a system.
        """
  
        if interval == "day":
            return sample_water_daily_usage
        else:
            return sample_water_monthly_usage
        
    def get_water_savings(self, interval, start_date, end_date):
        """
        Returns measurements for specific abbreviations within a date range for a system.
        """
  
        return sample_water_daily_usage
    


