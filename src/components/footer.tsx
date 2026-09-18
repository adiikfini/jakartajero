import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-emerald-900 text-white">
			{/* Main Footer Content */}
			<div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Kolom 1: Brand */}
					<div>
						<Link
							href="/"
							className="flex items-center gap-2 transition-colors hover:text-amber-400"
							aria-label="J-HERO Beranda"
						>
							<div className="flex size-10 items-center justify-center rounded-lg bg-amber-400 text-emerald-900">
								<BookOpen size={24} strokeWidth={2.25} />
							</div>
							<span className="text-xl font-bold">J-HERO</span>
						</Link>
						<p className="mt-4 max-w-xs text-sm leading-6 text-emerald-100">
							Platform edukasi untuk mempelajari warisan budaya, sejarah, dan nilai-nilai Islam yang berkembang di Jakarta.
						</p>
					</div>

					{/* Kolom 2: Navigasi Cepat */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400">
							Jelajahi
						</h3>
						<nav className="mt-4 space-y-3">
							<Link
								href="/"
								className="block text-sm transition-colors hover:text-amber-400"
							>
								Beranda
							</Link>
							<Link
								href="/heritage"
								className="block text-sm transition-colors hover:text-amber-400"
							>
								Heritage Explorer
							</Link>
							<Link
								href="/budaya"
								className="block text-sm transition-colors hover:text-amber-400"
							>
								Budaya Betawi
							</Link>
							<Link
								href="/game"
								className="block text-sm transition-colors hover:text-amber-400"
							>
								Game & Kuis
							</Link>
						</nav>
					</div>

					{/* Kolom 3: Kontak & Info */}
					<div>
						<h3 className="text-sm font-semibold uppercase tracking-widest text-amber-400">
							Komunitas
						</h3>
						<nav className="mt-4 space-y-3">
							<Link
								href="/about"
								className="block text-sm transition-colors hover:text-amber-400"
							>
								Tentang Kami
							</Link>
							<Link
								href="/faq"
								className="block text-sm transition-colors hover:text-amber-400"
							>
								Bantuan & FAQ
							</Link>
							<a
								href="mailto:info@j-hero.id"
								className="block text-sm transition-colors hover:text-amber-400"
							>
								Hubungi Kami
							</a>
							<Link
								href="/event"
								className="block text-sm transition-colors hover:text-amber-400"
							>
								Event Center
							</Link>
						</nav>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-emerald-800/50">
				<div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
					<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
						<p className="text-center text-sm text-emerald-100">
							© {currentYear} J-HERO. Semua hak dilindungi.
						</p>
						<p className="text-center text-sm italic text-emerald-200">
							Melestarikan warisan, menginspirasi generasi
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

