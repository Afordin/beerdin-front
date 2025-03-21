import { useContributors } from "@/Hooks/useContributors";

const Footer = () => {
	const { contributors, isLoading } = useContributors();
	const designers = [
		{
			id: 43246362,
			login: "afordigital",
			avatar_url: "https://avatars.githubusercontent.com/u/43246362?v=4",
		},
		{
			id: 142660376,
			login: "developerleonardo",
			avatar_url: "https://avatars.githubusercontent.com/u/142660376?v=4",
		},
		{
			id: 150462971,
			login: "LauraNicole449",
			avatar_url: "https://avatars.githubusercontent.com/u/150462971?v=4",
		},
		{
			id: 122550862,
			login: "BlurSoulx",
			avatar_url: "https://avatars.githubusercontent.com/u/122550862?v=4",
		},
		{
			id: 119018346,
			login: "noahcuadrado",
			avatar_url: "https://avatars.githubusercontent.com/u/119018346?v=4",
		},
	];

	return (
		<footer className="w-full pt-5 pb-10 xl:px-16 bg-background border-t border-cs-slate-300 grid grid-rows-auto text-text-primary space-y-16 xl:space-y-4 m-0">
			<div className="w-full flex flex-col justify-center space-y-8 xl:space-y-0">
				<h2 className="text-2xl font-semibold">Who contributed</h2>
				<div className="flex flex-col md:flex-row justify-center items-center xl:space-x-3 space-y-8 xl:space-y-0">
					<div className="flex flex-col items-center space-y-3 xl:w-1/2">
						<h3 className="text-xl font-semibold">Designers</h3>
						<div className="group flex justify-center items-center -space-x-3 hover:space-x-0 w-auto h-full flex-wrap">
							{!isLoading ? (
								designers.map((designer) => (
									<a
										href={`https://github.com/${designer.login}`}
										key={designer.id}
										className="transition-all duration-500 ease-in-out transform hover:scale-150 hover:z-10"
									>
										<img
											src={designer.avatar_url}
											alt={designer.login}
											className="w-11 h-11 rounded-full shadow-inner"
										/>
									</a>
								))
							) : (
								<>
									<div className="w-11 h-11 rounded-full bg-cs-slate-200 animate-pulse" />
									<div className="w-11 h-11 rounded-full bg-cs-slate-200 animate-pulse" />
									<div className="w-11 h-11 rounded-full bg-cs-slate-200 animate-pulse" />
								</>
							)}
						</div>
					</div>
					<div className="flex flex-col items-center space-y-3 xl:w-1/2">
						<h3 className="text-xl font-semibold">Developers</h3>
						<div className="group flex justify-center items-center -space-x-3 hover:space-x-0 w-auto h-full flex-wrap">
							{!isLoading ? (
								contributors.map((contributor) => (
									<a
										href={`https://github.com/${contributor.login}`}
										key={contributor.id}
										className="transition-all duration-500 ease-in-out transform hover:scale-150 hover:z-10"
									>
										<img
											src={contributor.avatar_url}
											alt={contributor.login}
											className="w-11 h-11 rounded-full shadow-inner"
										/>
									</a>
								))
							) : (
								<>
									<div className="w-11 h-11 rounded-full bg-cs-slate-200 animate-pulse" />
									<div className="w-11 h-11 rounded-full bg-cs-slate-200 animate-pulse" />
									<div className="w-11 h-11 rounded-full bg-cs-slate-200 animate-pulse" />
									<div className="w-11 h-11 rounded-full bg-cs-slate-200 animate-pulse" />
									<div className="w-11 h-11 rounded-full bg-cs-slate-200 animate-pulse" />
								</>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col xl:flex-row justify-between items-center h-fit gap-y-7">
				<div className="flex flex-col xl:flex-row justify-center items-center gap-x-6 gap-y-4 order-2 xl:order-none">
					{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
					<svg
						width="44"
						height="48"
						viewBox="0 0 196 256"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="text-cs-slate-900 xl:-translate-y-[6px]"
					>
						<path
							d="M109.337 48.428c0-6.421-2.518-12.579-7-17.12-4.483-4.54-10.563-7.092-16.902-7.094 6.34-.002 12.42-2.554 16.902-7.094s7-10.7 7-17.12c0 6.421 2.518 12.58 7.002 17.121a23.76 23.76 0 0 0 16.905 7.093 23.76 23.76 0 0 0-16.905 7.093c-4.484 4.54-7.002 10.7-7.002 17.12m29.694 44.055a31.5 31.5 0 0 0-11.353-15.22 30.87 30.87 0 0 0-17.943-5.805 30.86 30.86 0 0 0-17.964 5.74 31.5 31.5 0 0 0-11.406 15.18l-25.795 73.16h37.412l17.46-57.182 22.773 77.722 10.669 31.871c3.384 11.026 10.162 20.667 19.343 27.512 9.182 6.846 20.285 10.537 31.687 10.534H196zM22.692 256h1.791a53 53 0 0 0 31.165-10.155c9.085-6.602 15.897-15.923 19.477-26.651l.418-1.249.307-.961H36.44z"
							fill="currentColor"
						/>
						<path
							d="M79.43 209.426c17.013-3.116 29.917-18.19 29.917-36.321H35.864c-9.511.001-18.633 3.829-25.358 10.64S0 199.793 0 209.426z"
							fill="currentColor"
						/>
					</svg>
					<div className="flex flex-col text-center xl:text-left">
						<p className="text-base font-semibold">
							Designed and developed by{" "}
							<a
								href="https://discord.com/invite/comuafor"
								className="relative text-text-primary font-semibold underline-offset-4 no-underline
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] 
               after:bg-text-primary after:transition-all after:duration-300 after:ease-in-out
               hover:after:w-0"
							>
								Comuafor
							</a>
						</p>
						<p className="text-sm text-cs-slate-800">
							The best programming community in the world
						</p>
					</div>
				</div>
				<div className="flex justify-center items-center space-x-6 order-1 xl:order-none">
					<div className="group social-icon">
						<a
							href="https://discord.com/invite/comuafor"
							className="social-icon-link"
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="20"
								viewBox="0 0 24 20"
								className="social-icon-svg "
							>
								<path
									d="M20.3167 2.36988C18.7608 1.65572 17.1188 1.14647 15.4317 0.85488C15.4164 0.851883 15.4004 0.853852 15.3862 0.860501C15.372 0.867151 15.3603 0.878139 15.3527 0.89188C15.1427 1.26688 14.9087 1.75588 14.7447 2.14188C12.9262 1.86566 11.0763 1.86566 9.25775 2.14188C9.07523 1.71418 8.86925 1.29688 8.64075 0.89188C8.63287 0.878447 8.6211 0.867719 8.60699 0.861114C8.59289 0.854508 8.57711 0.852334 8.56175 0.85488C6.8746 1.14586 5.23248 1.65514 3.67675 2.36988C3.66358 2.3754 3.65241 2.38483 3.64475 2.39688C0.532748 7.04588 -0.320252 11.5799 0.0987482 16.0569C0.099766 16.068 0.10304 16.0788 0.108371 16.0886C0.113701 16.0984 0.120975 16.107 0.129748 16.1139C1.94134 17.4561 3.96786 18.4807 6.12275 19.1439C6.13794 19.1483 6.1541 19.148 6.16911 19.143C6.18411 19.138 6.19724 19.1285 6.20675 19.1159C6.67001 18.4864 7.08009 17.8194 7.43275 17.1219C7.43766 17.1123 7.4405 17.1019 7.44107 17.0911C7.44164 17.0804 7.43994 17.0697 7.43606 17.0597C7.43219 17.0497 7.42624 17.0406 7.4186 17.033C7.41096 17.0255 7.40181 17.0196 7.39175 17.0159C6.74517 16.7685 6.11921 16.4702 5.51975 16.1239C5.50876 16.1175 5.49951 16.1086 5.49283 16.0978C5.48615 16.087 5.48223 16.0747 5.48144 16.062C5.48065 16.0494 5.483 16.0367 5.48829 16.0251C5.49358 16.0136 5.50164 16.0036 5.51175 15.9959C5.63799 15.9014 5.76202 15.8041 5.88375 15.7039C5.8944 15.6952 5.90724 15.6897 5.92083 15.688C5.93443 15.6862 5.94825 15.6883 5.96075 15.6939C9.88875 17.4869 14.1407 17.4869 18.0227 15.6939C18.0354 15.688 18.0494 15.6859 18.0632 15.6877C18.077 15.6894 18.09 15.6951 18.1007 15.7039C18.2207 15.8019 18.3467 15.9019 18.4737 15.9959C18.4837 16.0034 18.4917 16.0133 18.4971 16.0246C18.5024 16.036 18.5049 16.0485 18.5043 16.061C18.5037 16.0735 18.5 16.0857 18.4937 16.0964C18.4873 16.1072 18.4784 16.1163 18.4677 16.1229C17.8697 16.4724 17.2431 16.7708 16.5947 17.0149C16.5847 17.0187 16.5755 17.0247 16.5678 17.0323C16.5602 17.04 16.5543 17.0491 16.5504 17.0592C16.5465 17.0693 16.5448 17.0801 16.5454 17.0909C16.546 17.1017 16.5488 17.1123 16.5537 17.1219C16.9137 17.8199 17.3257 18.4839 17.7787 19.1149C17.7881 19.1277 17.8012 19.1374 17.8162 19.1424C17.8313 19.1474 17.8476 19.1476 17.8627 19.1429C20.0212 18.4817 22.051 17.457 23.8647 16.1129C23.8736 16.1066 23.881 16.0986 23.8865 16.0893C23.892 16.08 23.8955 16.0696 23.8967 16.0589C24.3967 10.8819 23.0587 6.38488 20.3477 2.39888C20.3414 2.38544 20.3304 2.37577 20.3167 2.36988ZM8.01975 13.3299C6.83675 13.3299 5.86275 12.2449 5.86275 10.9109C5.86275 9.57788 6.81875 8.49188 8.01975 8.49188C9.22975 8.49188 10.1957 9.58788 10.1767 10.9119C10.1767 12.2449 9.22075 13.3299 8.01975 13.3299ZM15.9947 13.3299C14.8117 13.3299 13.8377 12.2449 13.8377 10.9109C13.8377 9.57788 14.7927 8.49188 15.9947 8.49188C17.2047 8.49188 18.1707 9.58788 18.1517 10.9119C18.1517 12.2449 17.2057 13.3299 15.9947 13.3299Z"
									fill="currentcolor"
								/>
							</svg>
						</a>
						<div className="social-icon-bg">
							<div />
							<div />
						</div>
					</div>
					<div className="group social-icon">
						<a
							href="https://www.twitch.tv/afor_digital"
							className="social-icon-link"
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								className="social-icon-svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M15.0001 12H17.4001V6H15.0001V12ZM9.0001 12H11.4001V6H9.0001V12ZM21.0001 13.5686V2.4H4.2001V16.8H9.0001V20.3438L12.0721 16.8H17.8081L21.0001 13.5686ZM17.2885 20.4H12.5917L9.4645 24H6.6001V20.4H0.600098V4.17598L2.1601 0H23.4001V14.6074L17.2885 20.4Z"
									fill="currentColor"
								/>
							</svg>
						</a>
						<div className="social-icon-bg">
							<div />
							<div />
						</div>
					</div>
					<div className="group social-icon">
						<a
							href="https://github.com/Afordin"
							aria-label="Github link"
							className="social-icon-link"
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="22"
								viewBox="0 0 18 20"
								className="social-icon-svg"
							>
								<path
									d="M16.1713 0.62664C16.0628 0.36483 15.8534 0.16452 15.5959 0.0762699L15.594 0.0756398L15.5922 0.0750099L15.5884 0.0737398L15.5805 0.0711399L15.5636 0.0658298C15.5518 0.0622298 15.539 0.0585597 15.5252 0.0548697C15.4976 0.0474897 15.466 0.0400698 15.4305 0.0331898C15.3593 0.0194099 15.2728 0.00786981 15.1708 0.00278981C14.966 -0.00741019 14.7037 0.00857977 14.3817 0.0805398C13.8447 0.20053 13.1476 0.47464 12.2724 1.03631C12.2152 1.07302 12.1572 1.11096 12.0985 1.15016C12.0397 1.13561 11.9809 1.12155 11.922 1.108C10.3261 0.74083 8.6742 0.74083 7.07825 1.108C7.01933 1.12156 6.96049 1.13561 6.90173 1.15017C6.84298 1.11096 6.78499 1.07302 6.72775 1.03631C5.85163 0.47435 5.15291 0.20029 4.61455 0.0803898C4.29179 0.00851981 4.02891 -0.0073802 3.824 0.0027798C3.72186 0.0078398 3.63536 0.0193098 3.56428 0.0329898C3.5288 0.0398198 3.49732 0.0471699 3.46983 0.0544699C3.45609 0.0581199 3.44336 0.0617598 3.43163 0.0653098L3.41481 0.0705598L3.40698 0.0731099L3.4032 0.0743697L3.40135 0.0749899L3.39952 0.0756098C3.13979 0.16397 2.92877 0.36623 2.82049 0.63061C2.41716 1.6154 2.3101 2.70134 2.50435 3.74306C2.51379 3.79367 2.52394 3.84418 2.5348 3.89458C2.49316 3.95373 2.4527 4.01368 2.41343 4.07439C1.80771 5.01089 1.48553 6.12791 1.50063 7.27493C1.50208 9.7315 2.21965 11.4139 3.4332 12.4965C4.12014 13.1093 4.91743 13.4844 5.71873 13.7208C5.81042 13.7479 5.90217 13.7731 5.99381 13.7967C5.98043 13.8432 5.96796 13.8901 5.95641 13.9373C5.90789 14.1357 5.87572 14.3394 5.86083 14.5461C5.85948 14.5648 5.85863 14.5835 5.85829 14.6022L5.82436 16.421L5.82417 16.4407C5.82417 16.4464 5.82417 16.4521 5.82417 16.4577C5.76262 16.473 5.70005 16.4843 5.63682 16.4916C5.442 16.5141 5.24467 16.4977 5.0561 16.4434C4.86752 16.3891 4.69127 16.2979 4.53752 16.1749C4.38377 16.0519 4.25553 15.8994 4.16031 15.7261L4.1505 15.7087C3.88836 15.2535 3.52627 14.8639 3.09142 14.5695C2.65656 14.275 2.1604 14.0836 1.64047 14.0099C1.09365 13.9324 0.587533 14.3128 0.510023 14.8597C0.432513 15.4065 0.812963 15.9126 1.35978 15.9901C1.57816 16.0211 1.78688 16.1015 1.97012 16.2256C2.15121 16.3482 2.30277 16.5103 2.4134 16.7C2.6346 17.0992 2.93165 17.4514 3.28801 17.7365C3.64753 18.0242 4.06032 18.2379 4.50272 18.3653C4.93348 18.4893 5.38392 18.5291 5.82949 18.4825C5.83039 18.7224 5.83103 18.9065 5.83103 19C5.83103 19.5523 6.25521 20 6.77847 20H12.2558C12.779 20 13.2032 19.5523 13.2032 19V15.2095C13.229 14.7802 13.185 14.3499 13.0738 13.9373C13.0585 13.8805 13.0419 13.824 13.0241 13.7679C13.0838 13.753 13.1435 13.7373 13.2032 13.7208C14.0277 13.4937 14.8513 13.1224 15.5588 12.4983C16.7791 11.4217 17.4982 9.7379 17.4996 7.27493C17.5147 6.12791 17.1925 5.01089 16.5868 4.07439C16.5475 4.01358 16.507 3.95354 16.4652 3.89429C16.476 3.84399 16.4861 3.79358 16.4955 3.74306C16.6893 2.69934 16.5795 1.61142 16.1713 0.62664Z"
									fill="currentColor"
								/>
							</svg>
						</a>
						<div className="social-icon-bg">
							<div />
							<div />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
