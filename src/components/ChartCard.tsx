import { useEffect, useState } from 'react';
import { CircleX } from 'lucide-react';
import { barChartData, BarListData, colorsPieChart, lineChartData, pieChartData } from '@/constants/chartData';
import { ChartCardProps, ChartDataBarList, ChartType } from '@/models/chart';
import { BarChart } from './Charts/BarChart';
import { BarList } from './Charts/BarList';
import { DonutChart } from './Charts/DonutChart';
import { LineChart } from './Charts/LineChart';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export const ChartCard = ({ chartCardData }: ChartCardProps) => {
  const fakeFetch = (url?: string) => {
    return url === 'test';
  };

  const response = fakeFetch(chartCardData.urlEndpoint);
  const [chartData, setChartData] = useState<ChartDataBarList[]>([]);

  useEffect(() => {
    if (chartCardData.chartType === ChartType.BarList) setChartData(BarListData);
    if (chartCardData.chartType === ChartType.LineChart) setChartData(lineChartData);
    if (chartCardData.chartType === ChartType.PieChart) setChartData(pieChartData);
    if (chartCardData.chartType === ChartType.BarChart) setChartData(barChartData);
  }, [chartCardData.chartType]);

  return (
    <Card className=" flex flex-col rounded-lg p-12  ">
      <CardHeader className="space-y-4 p-0">
        <CardTitle className=" p-0 text-left text-primary-900 font-bold text-2xl leading-7 ">{chartCardData.title}</CardTitle>
        <CardDescription className="font-dmSans text-left p-0 text-lg font-medium text-cs-slate-700">
          {chartCardData.subTitle}
        </CardDescription>
        <Select>
          <SelectTrigger className="text-cs-slate-900 shadow-sm font-normal text-sm rounded-md w-[175px] h-[36px] border-cs-slate-500  pr-2.5">
            <SelectValue className="p-20 bg-black" placeholder="Select a month" />
          </SelectTrigger>
          <SelectContent className="text-cs-slate-900">
            <SelectGroup className="bg-background">
              <SelectItem value="Last month">Last month</SelectItem>
              <SelectItem value="Last 3 months">Last 3 months</SelectItem>
              <SelectItem value="Last 6 months">Last 3 months</SelectItem>
              <SelectItem value="Last year">Last year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="p-0 flex justify-center items-center h-full ">
        {!response && (
          <div className="flex flex-col justify-center items-center text-red-400 text-xl ">
            <CircleX className=" flex h-8 w-8 mb-2" />
            Error: Fetching data failed
          </div>
        )}

        {response && chartCardData.chartType === ChartType.BarList && (
          <div>
            <div className="space-x-2 text-left pb-6 pt-3">
              <span className="text-[#374151] text-3xl font-semibold">10,234</span>
              <span className="text-sm font-normal text-cs-slate-700 ">Mensajes totales</span>
            </div>
            <BarList data={chartData} />
          </div>
        )}
        {response && chartCardData.chartType === ChartType.PieChart && (
          <div className="flex gap-6 items-center  justify-center w-full">
            <DonutChart
              className="w-64 h-64"
              variant="pie"
              colors={['pieChart1', 'pieChart2', 'pieChart3', 'pieChart4', 'pieChart5', 'pieChart6']}
              data={chartData}
              category="name"
              value="value"
            />
            <div className="flex flex-col gap-2">
              {chartData.map((data, index) => (
                <div key={index} className="flex items-center justify-between gap-2 text-xs text-black">
                  <span className={`flex w-4 h-4 rounded-full ${colorsPieChart[index]}`}></span>
                  <span>{data.name}</span>
                  <span>{data.value}%</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {response && chartCardData.chartType === ChartType.LineChart && (
          <LineChart colors={['peakHours']} data={chartData} index="name" categories={['value']} />
        )}

        {chartCardData.chartType === ChartType.BarChart && (
          <BarChart colors={['messageCount']} data={chartData} index="name" categories={['value']} />
        )}
      </CardContent>
    </Card>
  );
};
