class SolarSavingsModel:
    def __init__(self, timestamp, co2_saving, tree_equivalent):
        """
        Initialize a SolarSavingsModel object.

        Args:
            timestamp (str): Timestamp of the savings data.
            co2_savings (float): CO2 savings in kg.
            tree_equivalents (int): Number of tree equivalents.
        """
        self.timestamp = timestamp
        self.co2_savings = co2_saving
        self.tree_equivalents = tree_equivalent


    @classmethod
    def from_json(cls, co2_data, tree_data):
        """
        Create a SolarSavingsModel object from separate CO2 and tree data.
        Using the timestamp from the CO2 data.
        """
        timestamp = co2_data.get("timestamp")
        co2_savings = co2_data.get("value", 0.0) 
        tree_equivalents = tree_data.get("value", 0)  
        return cls(timestamp, co2_savings, tree_equivalents)
    
    def to_json(self):
        """
        Returns a JSON representation of the model.
        """
        return {
            "timestamp": self.timestamp,
            "co2_savings": self.co2_savings,
            "tree_equivalents": self.tree_equivalents
        }
