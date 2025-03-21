import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import type { ReactNode } from "react";

interface RootLayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<div className="w-full h-full min-h-screen xl:grid xl:grid-rows-[82px,1fr,270px] custom-bg px-4 pt-8 xl:pt-32">
			<header className="max-w-[1210px] w-full mx-auto sticky top-3 z-50">
				<Navbar />
			</header>
			<main className="max-w-[1210px] w-full mx-auto relative my-16">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export { RootLayout };
