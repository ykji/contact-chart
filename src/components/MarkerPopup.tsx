import { Icon } from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { CountryData } from "../interfaces/country";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

interface Props {
  country: CountryData;
}

const MarkerPopup = (props: Props) => {
  const {
    active,
    deaths,
    country,
    recovered,
    countryInfo: { lat, long },
  } = props.country;

  return (
    <Marker
      position={[lat, long]}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup position={[lat, long]}>
        <h4 className="font-bold text-2xl">{country}</h4>
        <p className="font-semibold">Total Deaths: {deaths}</p>
        <p className="font-semibold">Total Recovered: {recovered}</p>
        <p className="font-semibold">Active Cases: {active}</p>
      </Popup>
    </Marker>
  );
};

export default MarkerPopup;
