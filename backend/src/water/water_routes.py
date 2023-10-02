
from flask import Blueprint, request, jsonify
from src.water.water_controller import WaterController
from src.shared.services.generateDataset.generate import get_chart_data

water_bp = Blueprint("water", __name__)
water_controller = WaterController()

@water_bp.route("/usage", methods=["GET"])
def get_water_usage():
    interval = request.args.get("interval")
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")
    water_data = water_controller.get_water_usage(interval, start_date, end_date)
    water_json = [data.to_json() for data in water_data]
    return jsonify(water_json)

@water_bp.route("/savings", methods=["GET"])
def get_water_saved():
    interval = request.args.get("interval")
    start_date = request.args.get("start_date")
    end_date = request.args.get("end_date")
    water_data = water_controller.get_water_saved(interval, start_date, end_date)
    water_json = [data.to_json() for data in water_data]
    return jsonify(water_json)


@water_bp.route("/report", methods=["GET"])
def generate_report():
    """
    Generates a report for a given system ID and date range.
    """
    id = request.args.get("id")
    startDate = request.args.get("startDate")
    endDate = request.args.get("endDate")
    data = water_controller.generate_report(id, startDate, endDate)
    data = data.to_json()
    return jsonify(data), 200

@water_bp.route("/chart_data",methods=["GET"])
def generate_water_data():
    return jsonify(get_chart_data("water",request.args))




