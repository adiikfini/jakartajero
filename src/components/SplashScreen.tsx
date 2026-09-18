'use client';

import { useState, useEffect } from 'react';

export default function SplashScreen({ onClose }: { onClose: () => void }) {
	const [isVisible, setIsVisible] = useState(true);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(onClose, 300);
	};

	if (!isMounted || !isVisible) return null;

	return (
		<div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
			{/* Background Image with Overlay */}
			<div 
				className="absolute inset-0 bg-cover bg-center"
				style={{
					backgroundImage: 'url(/images/jakarta-bg.png)',
					backgroundAttachment: 'fixed',
				}}
			/>
			<div className="absolute inset-0 bg-black/40" />

			{/* Content */}
			<div className="relative h-full flex flex-col items-center justify-center px-6">
				<div className="text-center">
					{/* Welcome Text */}
					<h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
						Assalamu'alaikum,
					</h1>
					<h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-12">
						Selamat datang di J-HERO!
					</h2>

					{/* CTA Button */}
					<button
						onClick={handleClose}
						className="px-12 py-4 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold rounded-full border-2 border-amber-600/50 hover:border-amber-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
					>
						Mulai Jelajahi
					</button>
				</div>
			</div>
		</div>
	);
}
