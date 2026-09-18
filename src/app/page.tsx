'use client';

import { useState, useEffect } from 'react';
import Features from "@/components/Features";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		const hasSeenSplash = localStorage.getItem('j-hero-splash-shown');
		if (hasSeenSplash) {
			setShowSplash(false);
		}
	}, []);

	const handleSplashClose = () => {
		setShowSplash(false);
		localStorage.setItem('j-hero-splash-shown', 'true');
	};

	return (
		<>
			{showSplash && <SplashScreen onClose={handleSplashClose} />}
			<Navbar />
			<main className="flex flex-col gap-8">
				<Hero />
				<Features />
			</main>
			<Footer />
		</>
	);
}
