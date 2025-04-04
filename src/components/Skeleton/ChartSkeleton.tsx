import { Skeleton } from "../ui/skeleton";

export function ChartSkeleton() {
	return (
		<div className="flex flex-col w-full space-y-3">
			<Skeleton className="h-20 w-full rounde-xl bg-[#CCCBFC] dark:bg-[#7F7CF8] " />
			<Skeleton className="h-20 w-full rounde-xl bg-[#CCCBFC] dark:bg-[#7F7CF8] " />
			<Skeleton className="h-20 w-full rounde-xl bg-[#CCCBFC] dark:bg-[#7F7CF8]" />
		</div>
	);
}
