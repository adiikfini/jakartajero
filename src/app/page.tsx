import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col gap-8">
				<Hero />
				<Features />
			</main>
		</>
	);
}
