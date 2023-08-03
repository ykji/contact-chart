import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import DataCard from "../../components/DataCard";
import { WorldWideData } from "../../interfaces/worldwideData";
import Loader from "../../components/Loader";

const fetchWorldWideData = () =>
  axios.get<WorldWideData>("https://disease.sh/v3/covid-19/all");

const Worldwide = () => {
  const { data, isLoading, isError, error } = useQuery(
    "world-wide",
    fetchWorldWideData
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    const { message } = error as AxiosError;
    return <div className="mt-20">{message}</div>;
  }

  const {
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    active,
    critical,
  } = data!.data;

  return (
    <div className="flex flex-col gap-5 items-center my-5">
      <h2>COVID-19 Worldwide Data</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DataCard label="Total Cases" value={cases} />
        <DataCard label="Today's Cases" value={todayCases} />
        <DataCard label="Total Deaths" value={deaths} />
        <DataCard label="Today's Deaths" value={todayDeaths} />
        <DataCard label="Total Recovered" value={recovered} />
        <DataCard label="Today's Recovered" value={todayRecovered} />
        <DataCard label="Total Active" value={active} />
        <DataCard label="Total Critical" value={critical} />
      </div>
    </div>
  );
};

export default Worldwide;
