class BaseDataModel:
    def __init__(self, timestamp, value) -> None:
        self.timestamp = timestamp
        self.value = value


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
        return {
            "timestamp": self.timestamp,
            "value": self.value,

        }

