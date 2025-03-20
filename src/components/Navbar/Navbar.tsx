import { Menu } from "lucide-react";
import { useState } from "react";
import { NavbarButtons } from "./Buttons";
import { Dialog } from "./Dialog";
import { NavbarLinks } from "./Links";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<nav className="w-full mx-auto bg-background px-6 md:px-10 py-3 border border-cs-slate-300 rounded-full flex justify-between items-center z-50">
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

				<NavbarLinks className="hidden xl:flex xl:items-center xl:space-x-3" />

				<NavbarButtons className="hidden xl:flex xl:space-x-2" />

				<button
					className="xl:hidden"
					type="button"
					onClick={() => setOpen(true)}
				>
					<Menu />
				</button>
			</nav>

			<Dialog openModal={open} closeModal={() => setOpen(false)}>
				<NavbarLinks />
				<NavbarButtons className="flex gap-4 justify-center" />
			</Dialog>
		</>
	);
};

export { Navbar };
