from src.shared.services.terra_svc import TerraAPIService
from src.shared.controllers.base_controller import BaseController
from src.water.models.water_model import WaterDataModel
 

class WaterController(BaseController):
    def __init__(self):
        api_svc:TerraAPIService = TerraAPIService()
        super().__init__(api_svc)



    def get_water_usage(self, interval, start_date, end_date):
        raw_data = self.api_svc.get_measurements(interval, start_date, end_date)
        water_data = [WaterDataModel.from_json(reading) for reading in raw_data]
        return water_data
    
    def get_water_saving(self, interval, start_date, end_date):
        # raw_data = self.api_svc.get_water_saved(interval, start_date, end_date)
        # water_data = [WaterSavingModel.from_json(reading) for reading in raw_data]
        # return water_data
        #NOt IMPLEMENTED
        return NotImplementedError

    ### REPORT METHODS ###
    def generate_report(self, id, start_date, end_date):
        """
        Generates a report for a given system ID and date range.
        """
        return self.api_svc.get_wa()
    
    ### SYSTEM METHODS ###


    def filter_by_timestamp(interval,start_date,end_date):
        filtered_list = []
        if interval == "month":
            data_list = total_monthly_water_usage
            s=int(start_date[5:7])
            e=int(end_date[5:7])
            for i in range(s,e+1):
                formatted_i = str(i).zfill(2)
                pattern = f"{start_date[0:5]}{formatted_i}"
                for dict in data_list:
                    timestamp=dict["timestamp"]
                    if timestamp.startswith(pattern):
                        filtered_list.append(dict)
        
        else:
            data_list = total_daily_water_uasge
            s=int(start_date[8:10])
            e=int(end_date[8:10])
            for j in range(s,e+1):
                formatted_j = str(j).zfill(2)
                pattern = f"{start_date[0:8]}{formatted_j}"
                for dict in data_list:
                    timestamp=dict["timestamp"]
                    if timestamp.startswith(pattern):
                        filtered_list.append(dict)
        return filtered_list


  


