import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import Loader from "../../components/Loader";
import "../../index.css";

interface HistoricalData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

interface Data {
  date: string;
  cases: number;
  deaths: number;
  recovered: number;
}

const fetchHistoricalData = () =>
  axios.get<HistoricalData>(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );

const Historical = () => {
  const [dataSet, setDataSet] = useState<Data[]>();

  const onSuccess = (response: any) => {
    const historicalData = response!.data;
    const { cases, deaths, recovered } = historicalData;

    const data = Object.keys(cases).map((date) => ({
      date,
      cases: cases[date],
      deaths: deaths[date],
      recovered: recovered[date],
    }));

    setDataSet(data);
  };

  const { isLoading, isError, error } = useQuery(
    "countries-wise",
    fetchHistoricalData,
    { onSuccess }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    const { message } = error as AxiosError;
    return <div className="mt-20">{message}</div>;
  }

  const customTicks = [
    0, 1000000, 2000000, 3000000, 7000000, 100000000, 400000000, 600000000,
    750000000,
  ];

  return (
    <div className="flex flex-col gap-5 items-center mt-10 bg-geen-400 w-full px-10 flex-1">
      <h2>COVID-19 Historical Data</h2>
      <ResponsiveContainer width="80%" height={400}>
        <LineChart
          data={dataSet}
          margin={{ top: 20, right: 30, left: 50, bottom: 0 }}
        >
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis
            domain={[0, "dataMax"]}
            ticks={customTicks}
            tickCount={customTicks.length}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line
            name="Cases"
            strokeWidth={2}
            type="monotone"
            dataKey="cases"
            stroke="#8884d8"
          />
          <Line
            name="Deaths"
            strokeWidth={2}
            type="monotone"
            dataKey="deaths"
            stroke="#82ca9d"
          />
          <Line
            type="monotone"
            strokeWidth={2}
            name="Recovered"
            stroke="#ffc658"
            dataKey="recovered"
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Historical;
