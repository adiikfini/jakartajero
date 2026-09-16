import { ArrowRight } from "lucide-react";

export default function Hero() {
	return (
		<section
			id="beranda"
			className="relative flex min-h-[80vh] items-center bg-[url('/images/Hero-section.jpg')] bg-cover bg-center bg-no-repeat px-5 py-16 lg:px-8 lg:py-28"
		>
			<div className="absolute inset-0 z-0 bg-black/60" />

			<div className="relative z-10 mx-auto w-full max-w-7xl">
				<div className="max-w-2xl">
					<p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-400">
						Ruang Belajar J-HERO
					</p>
					<h1 className="text-5xl font-bold leading-[1.08] text-white">
						Jelajahi, Temukan, dan Lestarikan Kearifan Islam di Jakarta
					</h1>
					<p className="mt-6 max-w-xl text-base leading-8 text-gray-200 sm:text-lg">
						Kenali jejak sejarah, budaya, dan warisan Islam Jakarta melalui
						pengalaman belajar yang dekat, bermakna, dan menginspirasi.
					</p>
					<a
						href="#jelajah"
						className="mt-8 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
					>
						Mulai Jelajahi
						<ArrowRight size={18} aria-hidden="true" />
					</a>
				</div>
			</div>
		</section>
	);
}
