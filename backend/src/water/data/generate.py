import random

samples = []

def generate_random_number():
    return random.uniform(1, 300)

def generate_daily_usage():
    for i in range(1, 4):
        for j in range(1, 13):
            for k in range(1, 31):
                formatted_j = str(j).zfill(2)
                formatted_k = str(k).zfill(2)
                timestamp = f"202{i}-{formatted_j}-{formatted_k}T00:00:00+02:00"
                value = generate_random_number()
                building_level = "1,2,3"

                samples.append({
                    "timestamp": timestamp,
                    "value": value,
                    "buildingLevel": building_level
                })

def generate_monthly_usage():
    for i in range(1, 4):
        for j in range(1, 13):
            formatted_j = str(j).zfill(2)
            timestamp = f"202{i}-{formatted_j}-01T00:00:00+02:00"
            value = generate_random_number()
            building_level = "1,2,3"

            samples.append({
                    "timestamp": timestamp,
                    "value": value,
                    "buildingLevel": building_level
                })            



def filter_by_timestamp(interval,start_date,end_date):
    filtered_list = []
    if interval == "month":
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


  

if __name__ == "__main__":
    #generate_daily_usage()
    #generate_monthly_usage()
    #print(samples)
    print(filter_by_timestamp("mont","2022-10-01T00:00:00+02:00","2021-10-08T00:00:00+02:00"))
