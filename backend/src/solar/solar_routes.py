import json
from flask import Blueprint, jsonify, request
from src.solar.solar_controller import SolarController
from src.shared.services.generateDataset.generate import get_chart_data


solar_bp = Blueprint("solar", __name__)

solar_controller = SolarController()

@solar_bp.route("/system_info/<system_key>", methods=["GET"])
def get_system_info(system_key):
    system_info = solar_controller.get_system_info(system_key)
    return jsonify(system_info)

@solar_bp.route("/usage", methods=["GET"])
def get_usage():
    interval = request.args.get("interval")
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")
    solar_data = solar_controller.get_usage(interval, start_date, end_date)
    usage_data=  json.dumps([item.to_json() for item in solar_data])
    return jsonify(usage_data)

@solar_bp.route("/production", methods=["GET"])
def get_production():
    interval = request.args.get("interval")
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")
    solar_data = solar_controller.get_production(interval, start_date, end_date)
    production_data=  json.dumps([item.to_json() for item in solar_data])
    return jsonify(production_data)

@solar_bp.route("/savings", methods=["GET"])
def get_savings():
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")
    savings_data = solar_controller.get_savings(start_date, end_date)
    savings_data =  json.dumps([item.to_json() for item in savings_data])
    return jsonify(savings_data)


@solar_bp.route("/report", methods=["GET"])
def generate_report():
    """
    Generates a report for a given system ID and date range.
    """
    id = request.args.get("id")
    startDate = request.args.get("startDate")
    endDate = request.args.get("endDate")
    data = solar_controller.generate_report(id, startDate, endDate)
    data = data.to_json()
    return jsonify(data), 200

@solar_bp.route("/chart_data")
def generate_solar_data():
    params = request.args
    return jsonify(get_chart_data("solar",params))


