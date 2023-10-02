class BaseController:
    def __init__(self, svc):
        self.api_svc = svc


    def generate_report(self, start_date, end_date):
        """
        Generates a consolidated report for a given date range. 
        """
        pass