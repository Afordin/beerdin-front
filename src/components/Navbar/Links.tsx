interface NavbarLinksProps {
	className?: string;
}

function NavbarLinks({ className }: NavbarLinksProps) {
	const navItems = ["Messages", "Activity", "Users", "Usage", "Words"];

	return (
		<div className={className}>
			<ul className="flex flex-col xl:flex-row items-center gap-5 xl:gap-3 text-cs-slate-800">
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
	);
}

export { NavbarLinks };
