import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

const Navbar = () => {
	const navItems = ["Messages", "Activity", "Users", "Usage", "Words"];

	return (
		<nav className="w-full mx-auto bg-background px-10 py-3 border border-cs-slate-300 rounded-full flex justify-between items-center z-50">
			<a
				// biome-ignore lint/a11y/useValidAnchor: <explanation>
				href="#"
				aria-label="Comuafor logo"
				className="flex items-center space-x-2 h-full"
			>
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
				<svg
					width="16"
					height="20"
					viewBox="0 0 196 256"
					className="text-foreground"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
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
				<p className="text-cs-slate-900 text-base font-semibold">Comuafor</p>
			</a>
			<div className="flex items-center space-x-3">
				<ul className="flex items-center space-x-3 text-cs-slate-800">
					{navItems.map((item) => (
						<li key={item}>
							<a
								href={`#${item.toLowerCase()}`}
								className="relative cursor-pointer font-medium text-sm hover:text-primary-900 transition-colors duration-300 
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
             after:bg-primary-900 after:transition-all after:duration-300 after:ease-in-out 
             hover:after:w-full"
							>
								{item}
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className="flex space-x-2 ">
				<Button asChild variant="link" className="group">
					<a href="https://discord.com/invite/comuafor">
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
						<p>Join</p>
						<div className="primary-button-bg">
							<div />
						</div>
					</a>
				</Button>

				<ModeToggle />
			</div>
		</nav>
	);
};

export { Navbar };
