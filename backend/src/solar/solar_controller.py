from src.solar.models.solar_model import SolarDataModel
from src.solar.models.saving_model  import SolarSavingsModel
from src.shared.controllers.base_controller import BaseController
from src.shared.services.vcom_svc import VcomAPIService
from src.shared.models.abbreviations_enum import VCOMAbbreviation


class SolarController(BaseController):
    def __init__(self):
        api_svc: VcomAPIService = VcomAPIService()
        self.system_id = "C36EM"
        super().__init__(api_svc)

    def get_system_info(self, system_key):
        """
        Get information about a specific system.
        Args:
            system_key (str): Identification key of the system.

        Returns:
            dict: System information.
        """
        return self.api_svc.get_system_info(system_key)

    def get_usage(self, interval, startDate, endDate):
        """
        Args:
            interval (str): The interval for measurements (e.g., 'day', 'hour').
            startDate (str): Start date for the data retrieval.
            endDate (str): End date for the data retrieval.
        Returns:
            list: List of SolarDataModel objects.
        """
        abbr: str = VCOMAbbreviation.SYSTEM_CAPACITY.value
        return self.get_measurement_data(interval, startDate, endDate, abbr)

    def get_production(self, interval, startDate, endDate):
        """
        Args:
            interval (str): The interval for measurements (e.g., 'day', 'hour').
            startDate (str): Start date for the data retrieval.
            endDate (str): End date for the data retrieval.
        Returns:
            list: List of SolarDataModel objects.
        """
        abbr: str = VCOMAbbreviation.PRODUCTION.value
        return self.get_measurement_data(interval, startDate, endDate, abbr)

    def get_savings(self, startDate, endDate):
        """
        Get CO2 and tree equivalent savings data for a specific system within a date range.
        Args:
            startDate (str): Start date for the data retrieval.
            endDate (str): End date for the data retrieval.

        Returns:
            list: List of SolarSavingsModel objects.
        """
        co2_data = self.api_svc.get_environmental_savings_co2(
            self.system_id, startDate, endDate
        )
        tree_data = self.api_svc.get_environmental_savings_tree_equivalents(
            self.system_id, startDate, endDate
        )

        savings = [SolarSavingsModel.from_json(co2, tree) for co2, tree in zip(co2_data, tree_data)]
        return savings

    def generate_report(self, id, start_date, end_date):
        """
        Generates a report for a given system ID and date range.
        """

        userInfo = self.api_svc.get_session()
        billInfo = self.api_svc.get_bill(id, start_date, end_date)
        systemsInfo = self.api_svc.get_systems()
        solarData = self.get_monthly_consumption(self, id, start_date, end_date)

        return {
            "userInfo": userInfo,
            "billInfo": billInfo,
            "systemsInfo": systemsInfo,
            "solarData": solarData,
        }

    #### UTILITIES ####
    def get_measurement_data(self, interval, startDate, endDate, abbreviation_id):
        """
        Get measurement data for a specific abbreviation ID.

        Args:
            interval (str): The interval for measurements (e.g., 'day', 'hour').
            startDate (str): Start date for the data retrieval.
            endDate (str): End date for the data retrieval.
            abbreviation_id (str): Abbreviation ID for the specific measurement.

        Returns:
            list: List of SolarDataModel objects.
        """
        raw_data = self.api_svc.get_measurement_by_abbr(
            interval, startDate, endDate, self.system_id, abbreviation_id
        )
        solar_data = [SolarDataModel.from_json(reading) for reading in raw_data]
        return solar_data
