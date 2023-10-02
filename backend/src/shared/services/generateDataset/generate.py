import random



#months
MONTHS= ["January","February","March","April","May", "June","July","August","September", "October","November","December"]

def random_number():
    return random.uniform(1, 300)

def filter_by_range(interval,start_date,end_date):
     total_water_usage=[]
     avg_water_usage =[]
     if interval == "month":
            s=int(start_date[5:7])
            e=int(end_date[5:7])
            for i in range(s,e+1):
                formatted_i = str(i).zfill(2)
                timestamp = f"{start_date[0:5]}{formatted_i}{start_date[7:]}"
                total_water_usage.append({'timestamp':timestamp,'label':MONTHS[i-1],'value':random_number()/2})
                avg_water_usage.append({'timestamp':timestamp,'label':MONTHS[i-1],'value':random_number()})
     else:
        s=int(start_date[8:10])
        e=int(end_date[8:10])
        for i in range(s,e+1):
                formatted_i = str(i).zfill(2)
                timestamp = f"{start_date[0:8]}{formatted_i}{start_date[10:]}"
                total_water_usage.append({'timestamp':timestamp,'label':f"{start_date[5:8]}{formatted_i}",'value':random_number()})
                avg_water_usage.append({'timestamp':timestamp,'label':f"{start_date[5:8]}{formatted_i}",'value':random_number()})
     return total_water_usage,avg_water_usage
     
def get_total_usage_storey():
     return [
    {"id": 1, "value": random_number(), "level": "Ground"},
    {"id": 2, "value": random_number(), "level": "First"},
    {"id": 3, "value": random_number(), "level": "Second"},
]

def generate_data_sets(data, title, chart_type):
    if chart_type == "double":
        return {
            "labels": [d["label"] for d in data[0]],
            "datasets": [
                {
                    "label": title[0],
                    "data": [d["value"] for d in data[0]],
                    "backgroundColor": "#0B8B92",
                    "borderColor": "#0B8B92",
                    "borderWidth": 2,
                },
                {
                    "label": title[1],
                    "data": [d["value"] for d in data[1]],
                    "backgroundColor": "rgb(212,29,24)",
                    "borderColor": "rgb(212,29,24)",
                    "borderWidth": 2,
                },
            ],
        }
    else:
        return {
            "labels": title,
            "datasets": [
                {
                    "data": [d["value"] for d in data],
                    "backgroundColor": [
                        "rgb(212,29,24)",
                        "rgba(91, 101, 245)",
                        "#61CE70",
                    ],
                    "borderColor": "white",
                    "borderWidth": 2,
                }
            ],
        }

def get_chart_data(source_type,params):
    data=get_data(params["interval"],params["start_date"],params["end_date"])
    if source_type == "water":
        return {
            "chart1": {
                "chartData": data[0]["dataset1"],
                "name": "LineChart",
                "chartTitle": "Water Consumption",
            },
            "chart2": {
                "chartData": data[0]["dataset2"],
                "name": "DoughnutChart",
                "chartTitle": "Water Usage By Storey",
            },
            "dataInsights": {
                "insightType": "water",
                "title": " So far, we have used 1.345lk less water than last year",
                "insight1": "We have saved R6562 this month by conserving water",
                "insight2": "By conserving water, we've saved an amount equivalent to preserving 3 trees",
                "waterIconTitle": "SAVE WATER",
            },
        }
    else:
        return {
            "chart1": {
                "chartData": data[1]["dataset1"],
                "name": "LineChart",
                "chartTitle": "Power Usage and Power Generation",
            },
            "chart2": {
                "chartData": data[0]["dataset2"],
                "name": "DoughnutChart",
                "chartTitle": "Power Usage By Storey",
            },
            "dataInsights": {
                "insightType": "energy",
                "title": " So far we have used 1.345kWh less power than last year",
                "insight1": "We have saved R6562 this month by conserving Power",
                "insight2": "We've reduced 120kg of CO2 by conserving power and using green power.",
                "waterIconTitle": "SAVE POWER",
            },
        }

def get_data(interval,start_date,end_date):

    water_storey= get_total_usage_storey()
    total_water_usage, avg_water_usage= filter_by_range(interval,start_date,end_date)
    total_water_usage_range= [total_water_usage,avg_water_usage]

    energy_storey= get_total_usage_storey()
    total_energy_usage, avg_energy_usage= filter_by_range(interval,start_date,end_date)
    total_energy_usage_range= [total_energy_usage,avg_energy_usage]

    data = [
    {
        "id": "water",
        "dataset1": generate_data_sets(total_water_usage_range, ["2023", "2022"], "double"),
        "dataset2": generate_data_sets(water_storey, [ d["level"] for d in water_storey], "single"),
    },
    {
        "id": "energy",
        "dataset1": generate_data_sets(total_energy_usage_range, ["Power Produced", "Power Consumption"], "double"),
        "dataset2": generate_data_sets(energy_storey, [ d["level"] for d in energy_storey], "single"),
    }]

    return data


