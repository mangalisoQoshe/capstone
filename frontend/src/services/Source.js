import axios from "axios";

const getSourceData = (source, timestamp) => {
  const URL = `http://127.0.0.1:5173/api/${source}/chart_data`;
  const request = axios.get(URL, {
    params: {
      start_date: timestamp.startDate,
      end_date: timestamp.endDate,
      interval:timestamp.interval
    },
  });
  return request.then((response) => response.data);
};

export default { getSourceData };
