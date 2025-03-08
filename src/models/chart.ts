export enum ChartType {
  BarList = 'barList',
  LineChart = 'lineChart',
  PieChart = 'pieChart',
  BarChart = 'barChart',
  Table = 'table'
}

export interface ChartData {
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

export interface TableChart {
  ranking: number;
  user: string;
  level: number;
  messages: number;
  reactions: number;
}
