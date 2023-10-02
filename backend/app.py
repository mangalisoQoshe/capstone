from flask import Flask
from src.solar.solar_routes import solar_bp
from src.water.water_routes import water_bp


def create_app():
	# Create & Config Flask App Instance
	app =Flask(__name__)
	
	# Register Blueprints
	app.register_blueprint(solar_bp, url_prefix="/api/solar")
	app.register_blueprint(water_bp, url_prefix="/api/water")

	return app

app = create_app()


if __name__ == "__main__":
     app.run( debug=True)