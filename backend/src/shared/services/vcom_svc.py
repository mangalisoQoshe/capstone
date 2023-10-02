from src.shared.services.base_api import BaseAPIService
from src.shared.models.sample_data import *


class VcomAPIService(BaseAPIService):
    def __init__(self):
        config = {
            "username": "wandi_majikijela",
            "password": "solar_meteo2022",
            "base_url": "https://api.meteocontrol.de/v2",
            "api_key": "gpbgpSav1s",
        }
        super().__init__(
            config["base_url"],
            config["username"],
            config["password"],
            config["api_key"],
        )

    def authorize_access(self):
        return super().authorize_access()

    ##### General System Information Methods #####

    def get_session(self):
        expected = sample_session_data
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

    def get_avail_abbreviations(self, system_key="C36EM"):
        """
        Returns a list of available abbreviations.
        Common abbreviations on portfolio level are E_Z_EVU (production),
        G_M (POA irradiance), PR (performance ratio), CO2 (carbon emission)
        and POWER (system capacity).
        """
        return super().get(f"/systems/{system_key}/abreviations?apiKey={self.api_key}")

    ##### Measurement Methods #####

    def get_measurement_by_abbr(
        self, interval, start_date, end_date, system_key, abbreviation_id
    ):
        """
        Returns measurements for specific abbreviations within a date range for a system.

        Args:
            system_key (str): Identification key of the system.
            abbreviation_ids (str): Comma-delimited abbreviation IDs (e.g., "E_N,E_Z_EVU").
            start_date (str): Start date in ISO format (e.g., "2016-10-01T00:00:00+02:00").
            end_date (str): End date in ISO format (e.g., "2016-10-01T00:05:00+02:00").
            resolution (str, optional): Resolution (day, month, year). Defaults to "day".

        Returns:
            dict: Dictionary containing measurements for the specified abbreviations.
        """
        query_params = {"from": start_date, "to": end_date, "resolution": interval}
        url = f"/systems/{system_key}/calculations/abbreviations/{abbreviation_id}/measurements"
        # return super().get(url, params=query_params).get('data', {})

        if interval == "day":
            return sample_measurement_data_daily[abbreviation_id]
        else :
            return sample_measurement_data_monthly[abbreviation_id]
       

    ##### Environmental Savings Methods #####
    def get_environmental_savings_co2(
        self, system_key, start_date, end_date, interval="day"
    ):
        """
        Returns a list of CO2 savings for a specific system within the given date range.

        Args:
            system_key (str): Identification key of the system.
            start_date (str): Start date in ISO format (e.g., "2022-07-01T00:00:00+02:00").
            end_date (str): End date in ISO format (e.g., "2022-07-03T00:00:00+02:00").
            resolution (str, optional): Resolution (day, month, year). Defaults to "day".

        Returns:
            list: List of CO2 savings data with timestamps and values.
        """
        query_params = {"from": start_date, "to": end_date, "resolution": interval}
        url = f"/systems/{system_key}/environmental-savings/co2"
        # response =  super().get(url, params=query_params)
        response = sample_co2_savings
        return response

    def get_environmental_savings_tree_equivalents(
        self, system_key, start_date, end_date, interval="day"
    ):
        """
        Returns a list of tree equivalents for CO2 savings by the given system within the given date range.

        Args:
            system_key (str): Identification key of the system.
            start_date (str): Start date in ISO format (e.g., "2022-07-01T00:00:00+02:00").
            end_date (str): End date in ISO format (e.g., "2022-07-03T00:00:00+02:00").
            interval (str, optional): Resolution (day, month, year). Defaults to "day".

        Returns:
            list: List of tree equivalents data with timestamps and values.
        """
        query_params = {"from": start_date, "to": end_date, "resolution": interval}
        url = f"/systems/{system_key}/environmental-savings/tree"
        # response = super().get(url, params=query_params)
        response = sample_tree_equivalents
        return response


if __name__ == "__main__":
    print("SolarService")
    solar_service = VcomAPIService()
    print(solar_service.get_measurements_by_abbr("Daily", "2021-08-01", "2021-08-31"))
