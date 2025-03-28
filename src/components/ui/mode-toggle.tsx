import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ui/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<Button
			onClick={() => {
				const isDark = document.documentElement.classList.contains("dark");
				setTheme(isDark ? "light" : "dark");
			}}
			variant="outline"
			size="icon"
			className="relative hover:scale-110 transition-all text-black dark:text-white"
		>
			<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
