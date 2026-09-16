"use client";

import { useState } from "react";
import {
	BookOpen,
	ChevronDown,
	LogIn,
	Menu,
	X,
} from "lucide-react";
import Link from "next/link";

const explorationItems = [
	{ label: "Heritage Explorer", href: "/heritage" },
	{ label: "Budaya Betawi", href: "/budaya" },
	{ label: "Tokoh Islam", href: "/tokoh" },
	{ label: "Kuis Edukasi", href: "/kuis" },
	{ label: "Event Center", href: "/event" },
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const closeMobileMenu = () => {
		setIsMenuOpen(false);
		setIsOpen(false);
	};

	return (
		<header className="sticky top-0 z-50 border-b border-emerald-800/20 bg-white/95 backdrop-blur">
			<nav
				aria-label="Navigasi utama"
				className="mx-auto flex min-h-18 max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
			>
				<Link
					href="/"
					className="flex items-center gap-2 text-emerald-700 transition-colors hover:text-emerald-900"
					aria-label="J-HERO Beranda"
				>
					<span className="flex size-9 items-center justify-center rounded-lg bg-emerald-700 text-white">
						<BookOpen size={20} strokeWidth={2.25} aria-hidden="true" />
					</span>
					<span className="text-xl font-bold tracking-tight">J-HERO</span>
				</Link>

				<div className="hidden items-center gap-8 lg:flex">
					<Link
						href="/"
						className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
					>
						Beranda
					</Link>
					<div className="relative">
						<button
							type="button"
							className="flex items-center gap-1 text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
							aria-expanded={isOpen}
							aria-controls="exploration-dropdown"
							onClick={() => setIsOpen((open) => !open)}
						>
							Eksplorasi
							<ChevronDown
								size={15}
								className={isOpen ? "rotate-180 transition-transform" : "transition-transform"}
								aria-hidden="true"
							/>
						</button>
						{isOpen && (
							<div
								id="exploration-dropdown"
								className="absolute left-1/2 top-full mt-3 w-48 -translate-x-1/2 rounded-lg bg-white p-2 shadow-lg ring-1 ring-slate-100"
							>
								{explorationItems.map((item) => (
									<Link
										key={item.label}
										href={item.href}
										className="block rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
										onClick={() => setIsOpen(false)}
									>
										{item.label}
									</Link>
								))}
							</div>
						)}
					</div>
					<Link
						href="/about"
						className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
					>
						Tentang Kami
					</Link>
					<Link
						href="/faq"
						className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
					>
						Bantuan
					</Link>
				</div>

				<button
					type="button"
					className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 lg:hidden"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-navigation"
					aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
					onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
				>
					{isMenuOpen ? <X size={23} /> : <Menu size={23} />}
				</button>
			</nav>

			{isMenuOpen && (
				<div
					id="mobile-navigation"
					className="border-t border-emerald-100 bg-white px-5 pb-5 pt-2 lg:hidden"
				>
					<div className="flex flex-col">
						<Link
							href="/"
							className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
							onClick={closeMobileMenu}
						>
							Beranda
						</Link>
						<div className="border-b border-slate-100">
							<button
								type="button"
								className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
								aria-expanded={isOpen}
								aria-controls="mobile-exploration"
								onClick={() => setIsOpen((open) => !open)}
							>
								Eksplorasi
								<ChevronDown
									size={17}
									className={isOpen ? "rotate-180 transition-transform" : "transition-transform"}
									aria-hidden="true"
								/>
							</button>
							{isOpen && (
								<div id="mobile-exploration" className="mb-2 ml-3 border-l-2 border-emerald-100 pl-3">
									{explorationItems.map((item) => (
										<Link
											key={item.label}
											href={item.href}
											className="block py-2 text-sm text-slate-600 transition-colors hover:text-emerald-700"
											onClick={closeMobileMenu}
										>
											{item.label}
										</Link>
									))}
								</div>
							)}
						</div>
						<Link
							href="/about"
							className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
							onClick={closeMobileMenu}
						>
							Tentang Kami
						</Link>
						<Link
							href="/faq"
							className="border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
							onClick={closeMobileMenu}
						>
							Bantuan
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
