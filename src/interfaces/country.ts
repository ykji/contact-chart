export interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  deaths: number;
  active: number;
  recovered: number;
}
