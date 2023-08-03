import { Fragment } from "react";
import "leaflet/dist/leaflet.css";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import Loader from "../../components/Loader";
import { CountryData } from "../../interfaces/country";
import MarkerPopup from "../../components/MarkerPopup";
import { MapContainer, TileLayer } from "react-leaflet";

const fetchCountryData = () => {
  return axios.get<CountryData[]>("https://disease.sh/v3/covid-19/countries");
};

const CountryWise = () => {
  const { data, isLoading, isError, error } = useQuery(
    "countries-wise",
    fetchCountryData
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    const { message } = error as AxiosError;
    return <div className="mt-20">{message}</div>;
  }

  return (
    <div className="w-full flex flex-col items-center gap-5 h-full flex-1">
      <h2>COVID-19 Country-wise Data Map</h2>
      <MapContainer
        zoom={4}
        center={[15, 40]}
        className="w-full rounded-lg"
        scrollWheelZoom={false}
        style={{ height: "30rem", zIndex: -10 }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data &&
          data.data.map((countryData) => (
            <Fragment key={countryData.country}>
              <MarkerPopup country={countryData} />
            </Fragment>
          ))}
      </MapContainer>
    </div>
  );
};

export default CountryWise;
