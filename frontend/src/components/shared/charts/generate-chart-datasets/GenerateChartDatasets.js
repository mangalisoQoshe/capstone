export const WaterData1 = [
  { id: 1, month: "January", currentValue: 1.48, avgValue: null },
  { id: 2, month: "February", currentValue: 2.03, avgValue: null },
  { id: 3, month: "March", currentValue: 2.506, avgValue: null },
  { id: 4, month: "April", currentValue: 1.533, avgValue: null },
  { id: 5, month: "May", currentValue: 2.237, avgValue: null },
  { id: 6, month: "June", currentValue: 1.762, avgValue: null },
  { id: 7, month: "July", currentValue: 1.951, avgValue: null },
  { id: 8, month: "August", currentValue: 2.952, avgValue: null },
  { id: 9, month: "September", currentValue: 0.48, avgValue: 2.345 },
  { id: 10, month: "October", currentValue: null, avgValue: 3.832 },
  { id: 11, month: "November", currentValue: null, avgValue: 1.905 },
  { id: 12, month: "December", currentValue: null, avgValue: 1.143 },
];

export const WaterData2 = [
  { id: 1, value: 3.229, level: "fisrt" },
  { id: 2, value: 3.01, level: "ground" },
  { id: 3, value: 7.5868, level: "second" },
];

export const EnergyData1 = [
  { id: 1, month: "January", currentValue: 1.48, avgValue: 3.55 },
  { id: 2, month: "February", currentValue: 2.03, avgValue: 4.832 },
  { id: 3, month: "March", currentValue: 2.506, avgValue: 4.832 },
  { id: 4, month: "April", currentValue: 1.533, avgValue: 3.905 },
  { id: 5, month: "May", currentValue: 2.237, avgValue: 4.143 },
  { id: 6, month: "June", currentValue: 1.762, avgValue: 3.143 },
  { id: 7, month: "July", currentValue: 1.951, avgValue: 4.143 },
  { id: 8, month: "August", currentValue: 2.952, avgValue: 4.143 },
  { id: 9, month: "September", currentValue: 0.48, avgValue: 3.143 },
  { id: 10, month: "October", currentValue: null, avgValue: null },
  { id: 11, month: "November", currentValue: null, avgValue: null },
  { id: 12, month: "December", currentValue: null, avgValue: null },
];

export const EnergyData2 = [
  { id: 1, value: 7.229, level: "fisrt" },
  { id: 2, value: 4.01, level: "ground" },
  { id: 3, value: 5.5868, level: "second" },
];

export const data = [
  {
    id: "water",
    dataset1: generateDataSets(WaterData1, ["2023", "2022"], "double"),
    dataset2: generateDataSets(
      WaterData2,
      ["first", "ground", "second"],
      "single"
    ),
  },
  {
    id: "enrgy",
    dataset1: generateDataSets(
      EnergyData1,
      ["Power Produced", "Power Consumption"],
      "double"
    ),
    dataset2: generateDataSets(
      EnergyData2,
      ["first", "ground", "second"],
      "single"
    ),
  },
];

function generateDataSets(data, title, chartType) {
  if (chartType === "double")
    return {
      labels: data.map((d) => d.month),

      datasets: [
        {
          label: title[0],
          data: data.map((d) => d.currentValue),
          backgroundColor: "#0B8B92",
          borderColor: "#0B8B92",
          borderWidth: 2,
        },
        {
          label: title[1],
          data: data.map((d) => d.avgValue),
          backgroundColor: "rgb(212,29,24)",
          borderColor: "rgb(212,29,24)",
          borderWidth: 2,
        },
      ],
    };
  else {
    return {
      labels: [...title],

      datasets: [
        {
          data: data.map((d) => d.value),
          backgroundColor: [
            " rgb(212,29,24)",
            " rgba(91, 101, 245)",
            " #61CE70  ",
          ],
          borderColor: "white ",
          borderWidth: 2,
        },
      ],
    };
  }
}

function getData(sourceType) {
  if (sourceType === "water") {
    return {
      chart1: {
        chartData: data[0].dataset1,
        name: "LineChart",
        chartTitle: "Water Consumption",
      },
      chart2: {
        chartData: data[0].dataset2,
        name: "DoughnutChart",
        chartTitle: "Monthly Water Usage By Storey",
      },
      dataInsights: {
        insightType: "water",
        title: " So far, we have used 1.345lk less water than last year",
        insight1: "We have saved R6562 this month by conserving water",
        insight2:
          "By conserving water, we've saved an amount equivalent to preserving 3 trees",
        waterIconTitle: "SAVE WATER",
      },
    };
  } else {
    return {
      chart1: {
        chartData: data[1].dataset1,
        name: "LineChart",
        chartTitle: "Power Usage and Power Generation",
      },
      chart2: {
        chartData: data[0].dataset2,
        name: "DoughnutChart",
        chartTitle: "Monthly Power Usage By Storey",
      },
      dataInsights: {
        insightType: "energy",
        title: " So far we have used 1.345kWh less power than last year",
        insight1: "We have saved R6562 this month by conserving Power",
        insight2:
          "We've reduced 120kg of CO2 by conserving power and using green power.",
        waterIconTitle: "SAVE POWER",
      },
    };
  }
}

export default getData;
