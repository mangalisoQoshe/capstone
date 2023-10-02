from src.shared.models.base_model import BaseDataModel

class WaterDataModel(BaseDataModel):
    def __init__(self, timestamp, value, buildingLevel) -> None:
        self.buildingLevel = buildingLevel
        self.unit = "kl"
        super().__init__(timestamp, value)

    
    def to_json(self):
        data = super().to_json()
        data.update({
            "buildingLevel": self.buildingLevel,
            "unit": self.unit
        })
        return data
    
    @classmethod
    def from_json(cls, data):
        return cls(**data)

      
