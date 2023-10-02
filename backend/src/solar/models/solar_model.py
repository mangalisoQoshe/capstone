
from src.shared.models.base_model import BaseDataModel


class SolarDataModel(BaseDataModel): 
    def __init__(self, timestamp, value) -> None:
        self.averageValue = 0
        self.unit = "kW"
        super().__init__(timestamp, value)

    @classmethod
    def from_json(cls, json):
        """
        Creates a new instance of the model from a JSON object.
        """
        return cls(**json)
    
    def to_json(self):
        """
        Returns a JSON representation of the model.
        """
        value = super().to_json()
        value.update({
            "averageValue": self.averageValue,
            "unit": self.unit
        })
        return value


    