export interface HistoricalData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

export interface ChartData {
  date: string;
  cases: number;
  deaths: number;
  recovered: number;
}
