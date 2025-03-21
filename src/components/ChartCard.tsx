import {
	BarListData,
	barChartData,
	colorsPieChart,
	lineChartData,
	pieChartData,
	placeIcons as placeIconsData,
	tableChartData,
} from "@/constants/chartData";
import {
	type ChartCardProps,
	type ChartData,
	ChartType,
	type TableChart,
} from "@/models/chart";
import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import { BarChart } from "./Charts/BarChart";
import { BarList } from "./Charts/BarList";
import { DonutChart } from "./Charts/DonutChart";
import { LineChart } from "./Charts/LineChart";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

const placeIcons: { [key: number]: string } = placeIconsData;

export const ChartCard = ({ chartCardData }: ChartCardProps) => {
	const fakeFetch = (url?: string) => {
		return url === "test";
	};

	const response = fakeFetch(chartCardData.urlEndpoint);
	const [chartData, setChartData] = useState<ChartData[] | TableChart[]>([]);

	useEffect(() => {
		if (chartCardData.chartType === ChartType.BarList)
			setChartData(BarListData);
		if (chartCardData.chartType === ChartType.LineChart)
			setChartData(lineChartData);
		if (chartCardData.chartType === ChartType.PieChart)
			setChartData(pieChartData);
		if (chartCardData.chartType === ChartType.BarChart)
			setChartData(barChartData);
		if (chartCardData.chartType === ChartType.Table)
			setChartData(tableChartData);
	}, [chartCardData.chartType]);

	return (
		<Card className=" flex flex-col rounded-lg p-4 px-6 xl:p-12  ">
			<CardHeader className="space-y-4 p-0">
				<CardTitle className=" p-0 text-left text-primary-900 font-bold text-2xl leading-7 ">
					{chartCardData.title}
				</CardTitle>
				<CardDescription className="font-dmSans text-left p-0 text-lg font-medium text-cs-slate-700">
					{chartCardData.subTitle}
				</CardDescription>
				<Select>
					<SelectTrigger className="text-cs-slate-900 shadow-sm font-normal text-sm rounded-md w-[175px] h-[36px] border-cs-slate-500  pr-2.5">
						<SelectValue
							className="p-20 bg-black"
							placeholder="Select a month"
						/>
					</SelectTrigger>
					<SelectContent className="text-cs-slate-900">
						<SelectGroup className="bg-background">
							<SelectItem
								className="cursor-pointer focus:bg-slate-200 dark:focus:bg-slate-500"
								value="Last month"
							>
								Last month
							</SelectItem>
							<SelectItem
								className="cursor-pointer focus:bg-slate-200 dark:focus:bg-slate-500"
								value="Last 6 months"
							>
								Last 3 months
							</SelectItem>
							<SelectItem
								className="cursor-pointer focus:bg-slate-200 dark:focus:bg-slate-500"
								value="Last year"
							>
								Last year
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</CardHeader>

			<CardContent className="p-0 flex justify-center items-center h-full pt-6">
				{!response && (
					<div className="flex flex-col justify-center items-center text-red-400 text-xl ">
						<CircleX className=" flex h-8 w-8 mb-2" />
						Error: Fetching data failed
					</div>
				)}

				{response && chartCardData.chartType === ChartType.BarList && (
					<div className="w-full">
						<div className="space-x-2 text-left pb-6 pt-3">
							<span className="text-[#374151] text-3xl font-semibold">
								10,234
							</span>
							<span className="text-sm font-normal text-cs-slate-700 ">
								Total messages
							</span>
						</div>
						<BarList data={chartData as ChartData[]} />
					</div>
				)}
				{response && chartCardData.chartType === ChartType.PieChart && (
					<div className="flex flex-col md:flex-row gap-6 items-center  justify-center w-full">
						<DonutChart
							className="w-64 h-64"
							variant="pie"
							colors={[
								"pieChart1",
								"pieChart2",
								"pieChart3",
								"pieChart4",
								"pieChart5",
								"pieChart6",
							]}
							data={chartData as ChartData[]}
							category="name"
							value="value"
						/>
						<div className="flex flex-col gap-2">
							{(chartData as ChartData[]).map((data, index) => (
								<div
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									key={index}
									className="flex items-center justify-between gap-2 text-xs text-foreground"
								>
									<span
										className={`flex w-4 h-4 rounded-full ${colorsPieChart[index]}`}
									/>
									<span>{data.name}</span>
									<span>{data.value}%</span>
								</div>
							))}
						</div>
					</div>
				)}

				{response && chartCardData.chartType === ChartType.LineChart && (
					<LineChart
						colors={["peakHours"]}
						data={chartData as ChartData[]}
						index="name"
						categories={["value"]}
					/>
				)}

				{chartCardData.chartType === ChartType.BarChart && (
					<BarChart
						colors={["messageCount"]}
						data={chartData as ChartData[]}
						index="name"
						categories={["value"]}
					/>
				)}

				{response && chartCardData.chartType === ChartType.Table && (
					<div className="w-72 md:w-full overflow-x-auto">
						<table className="divide-y divide-white w-full">
							<thead>
								<tr className=" text-center text-base font-medium text-cs-slate-900 ">
									<th scope="col" className="px-2 py-3 tracking-wider">
										Ranking
									</th>
									<th scope="col" className="px-2 py-3 tracking-wider">
										User
									</th>

									<th scope="col" className="px-2 py-3 tracking-wider">
										Level
									</th>
									<th scope="col" className="px-2 py-3 tracking-wider">
										Messages
									</th>
									<th scope="col" className="px-2 py-3 tracking-wider">
										Reactions
									</th>
								</tr>
							</thead>
							<tbody className=" divide-y divide-white">
								{(chartData as TableChart[]).map((data, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<tr className="text-cs-slate-800 text-sm" key={index}>
										<td className="px-3 py-3 whitespace-nowrap">
											{placeIcons[index] && (
												<img
													src={placeIcons[index]}
													alt={`Place ${index + 1}`}
													className="w-6 h-6"
												/>
											)}
										</td>
										<td className="px-2 py-3 whitespace-nowrap text-left">
											{data.user}
										</td>
										<td className="px-2 py-3 whitespace-nowrap">
											{data.level}
										</td>
										<td className="px-2 py-3 whitespace-nowrap">
											{data.messages}
										</td>
										<td className="px-2 py-3 whitespace-nowrap">
											{data.reactions}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</CardContent>
		</Card>
	);
};
