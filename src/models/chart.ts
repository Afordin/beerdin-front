export enum ChartType {
  BarList = 'barList',
  LineChart = 'lineChart',
  PieChart = 'pieChart',
  BarChart = 'barChart'
}

export interface ChartDataBarList {
  name: string;
  value: number;
}

export interface ChartCardData {
  title: string;
  subTitle: string;
  chartType: ChartType;

  urlEndpoint?: string;
}

export interface ChartCardProps {
  chartCardData: ChartCardData;
}
