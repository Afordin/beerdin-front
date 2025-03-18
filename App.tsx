import "./App.css";

import { BubbleBackground } from "./components/BubbleBackground";
import { ChartCard } from "./components/ChartCard";
import TopChannelsCard from "./components/TopChannelsCard";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import { RootLayout } from "./layouts/RootLayout/RootLayout";
import { ChartType } from "./models/chart";

function App() {
	return (
		<ThemeProvider>
			<RootLayout>
				<BubbleBackground />
				<div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 relative">
					<div className="col-span-1 lg:col-span-2 w-full flex flex-col justify-center items-center gap-7">
						<h1
							className="font-dmSans text-7xl font-bold text-cs-slate-900 tracking-wide
"
						>
							See amazing metrics.
						</h1>
						<p className="font-dmSans text-2xl">
							Gain real-time insights into server activity, including the most
							active users, top channels, user rankings, and much more. Explore
							the data, track engagement, and witness your community’s growth
							like never before!
						</p>

						<div className="flex gap-4">
							<Button className="group primary-button">
								<a
									href="https://discord.com/invite/comuafor"
									className="primary-button-link"
								>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										viewBox="0 0 256 199"
										width="20"
										height="16"
										xmlns="http://www.w3.org/2000/svg"
										preserveAspectRatio="xMidYMid"
										className="primary-button-svg"
										fill="currentColor"
									>
										<path
											d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z"
											fill="currentColor"
										/>
									</svg>
									<p>Join Community</p>
								</a>
								<div className="primary-button-bg">
									<div />
								</div>
							</Button>
							<Button className="group secondary-button">
								<a
									href="https://github.com/Afordin/beerdin-front"
									className="secondary-button-link"
								>
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="22"
										viewBox="0 0 18 20"
										className="social-icon-svg"
										fill="currentColor"
									>
										<path
											d="M16.1713 0.62664C16.0628 0.36483 15.8534 0.16452 15.5959 0.0762699L15.594 0.0756398L15.5922 0.0750099L15.5884 0.0737398L15.5805 0.0711399L15.5636 0.0658298C15.5518 0.0622298 15.539 0.0585597 15.5252 0.0548697C15.4976 0.0474897 15.466 0.0400698 15.4305 0.0331898C15.3593 0.0194099 15.2728 0.00786981 15.1708 0.00278981C14.966 -0.00741019 14.7037 0.00857977 14.3817 0.0805398C13.8447 0.20053 13.1476 0.47464 12.2724 1.03631C12.2152 1.07302 12.1572 1.11096 12.0985 1.15016C12.0397 1.13561 11.9809 1.12155 11.922 1.108C10.3261 0.74083 8.6742 0.74083 7.07825 1.108C7.01933 1.12156 6.96049 1.13561 6.90173 1.15017C6.84298 1.11096 6.78499 1.07302 6.72775 1.03631C5.85163 0.47435 5.15291 0.20029 4.61455 0.0803898C4.29179 0.00851981 4.02891 -0.0073802 3.824 0.0027798C3.72186 0.0078398 3.63536 0.0193098 3.56428 0.0329898C3.5288 0.0398198 3.49732 0.0471699 3.46983 0.0544699C3.45609 0.0581199 3.44336 0.0617598 3.43163 0.0653098L3.41481 0.0705598L3.40698 0.0731099L3.4032 0.0743697L3.40135 0.0749899L3.39952 0.0756098C3.13979 0.16397 2.92877 0.36623 2.82049 0.63061C2.41716 1.6154 2.3101 2.70134 2.50435 3.74306C2.51379 3.79367 2.52394 3.84418 2.5348 3.89458C2.49316 3.95373 2.4527 4.01368 2.41343 4.07439C1.80771 5.01089 1.48553 6.12791 1.50063 7.27493C1.50208 9.7315 2.21965 11.4139 3.4332 12.4965C4.12014 13.1093 4.91743 13.4844 5.71873 13.7208C5.81042 13.7479 5.90217 13.7731 5.99381 13.7967C5.98043 13.8432 5.96796 13.8901 5.95641 13.9373C5.90789 14.1357 5.87572 14.3394 5.86083 14.5461C5.85948 14.5648 5.85863 14.5835 5.85829 14.6022L5.82436 16.421L5.82417 16.4407C5.82417 16.4464 5.82417 16.4521 5.82417 16.4577C5.76262 16.473 5.70005 16.4843 5.63682 16.4916C5.442 16.5141 5.24467 16.4977 5.0561 16.4434C4.86752 16.3891 4.69127 16.2979 4.53752 16.1749C4.38377 16.0519 4.25553 15.8994 4.16031 15.7261L4.1505 15.7087C3.88836 15.2535 3.52627 14.8639 3.09142 14.5695C2.65656 14.275 2.1604 14.0836 1.64047 14.0099C1.09365 13.9324 0.587533 14.3128 0.510023 14.8597C0.432513 15.4065 0.812963 15.9126 1.35978 15.9901C1.57816 16.0211 1.78688 16.1015 1.97012 16.2256C2.15121 16.3482 2.30277 16.5103 2.4134 16.7C2.6346 17.0992 2.93165 17.4514 3.28801 17.7365C3.64753 18.0242 4.06032 18.2379 4.50272 18.3653C4.93348 18.4893 5.38392 18.5291 5.82949 18.4825C5.83039 18.7224 5.83103 18.9065 5.83103 19C5.83103 19.5523 6.25521 20 6.77847 20H12.2558C12.779 20 13.2032 19.5523 13.2032 19V15.2095C13.229 14.7802 13.185 14.3499 13.0738 13.9373C13.0585 13.8805 13.0419 13.824 13.0241 13.7679C13.0838 13.753 13.1435 13.7373 13.2032 13.7208C14.0277 13.4937 14.8513 13.1224 15.5588 12.4983C16.7791 11.4217 17.4982 9.7379 17.4996 7.27493C17.5147 6.12791 17.1925 5.01089 16.5868 4.07439C16.5475 4.01358 16.507 3.95354 16.4652 3.89429C16.476 3.84399 16.4861 3.79358 16.4955 3.74306C16.6893 2.69934 16.5795 1.61142 16.1713 0.62664Z"
											fill="currentColor"
										/>
									</svg>
									<p>Explore Code</p>
								</a>
								<div className="secondary-button-bg">
									<div />
								</div>
							</Button>
						</div>
					</div>

					<div className="col-span-1 lg:col-span-2 w-full mt-16">
					<section id="messages">
						<ChartCard
							chartCardData={{
								title: "Message count",
								subTitle:
									"Displays the number of messages sent on the server during a period of time. ",
								urlEndpoint: "test",
								chartType: ChartType.BarChart,
							}}
						/>
						</section>
					</div>

					<TopChannelsCard />
					<section id="activity">
					<ChartCard
						chartCardData={{
							title: "Peak hours",
							subTitle:
								"It represents the times of the day when the server is most active.",
							chartType: ChartType.LineChart,
							urlEndpoint: "test",
						}}
					/>
					</section>

					<section id="users">
					<ChartCard
						chartCardData={{
							title: "User roles",
							subTitle:
								"Visualizes the distribution of users according to their roles in the community.",
							chartType: ChartType.PieChart,
							urlEndpoint: "test",
						}}
					/>
					</section>

					<ChartCard
						chartCardData={{
							urlEndpoint: "test",
							title: "User leaderboard",
							subTitle:
								"Lists the most outstanding users according to their participation in the server.",
							chartType: ChartType.Table,
						}}
					/>
					<section id="usage">
					<ChartCard
						chartCardData={{
							title: "Top users",
							subTitle:
								"Displays the number of messages sent on the server during a period of time.",
							urlEndpoint: "test",
							chartType: ChartType.BarChart,
						}}
					/>
					</section>

					<ChartCard
						chartCardData={{
							urlEndpoint: "test",
							title: "Top reactions",
							subTitle:
								"It presents the most frequently used reactions in the server messages.",
							chartType: ChartType.BarList,
						}}
					/>
					<div className="col-span-1 lg:col-span-2 w-full">
					<section id="words">
						<ChartCard
							chartCardData={{
								title: "Most used words",
								subTitle:
									"Highlights the most mentioned words in the server messages.",
								urlEndpoint: "test",
								chartType: ChartType.BarChart,
							}}
						/>
						</section>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0 -z-50">
					<BubbleBackground />
				</div>
			</RootLayout>
		</ThemeProvider>
	);
}

export default App;
