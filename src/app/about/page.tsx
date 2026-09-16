import { ArrowRight, BookOpen, Gamepad2, Landmark } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const coreValues = [
	{
		icon: BookOpen,
		title: "Edukasi Terarah",
		description:
			"Menyajikan materi sejarah dan biografi ulama dengan bahasa yang mudah dipahami oleh pelajar.",
	},
	{
		icon: Gamepad2,
		title: "Belajar Menyenangkan",
		description:
			"Menggabungkan literasi dengan gamifikasi melalui kuis edukasi agar proses belajar sejarah tidak membosankan.",
	},
	{
		icon: Landmark,
		title: "Pelestarian Budaya",
		description:
			"Menjadi arsip digital yang menjaga tradisi dan nilai-nilai keislaman masyarakat Betawi agar tidak lekang oleh waktu.",
	},
];

export default function AboutPage() {
	return (
		<main>
			<Navbar />

			<section className="bg-emerald-900 px-6 pb-20 pt-32 text-center text-white">
				<h1 className="text-4xl font-bold text-amber-400 md:text-5xl">
					Tentang J-HERO
				</h1>
				<p className="mt-4 text-xl font-medium text-emerald-100">
					Jakarta Heritage Exploration and Rediscovery
				</p>
			</section>

			<section className="bg-white px-6 py-16 text-center">
				<div className="mx-auto max-w-4xl">
					<p className="text-lg leading-relaxed text-gray-700">
						J-HERO adalah platform edukasi interaktif yang didedikasikan untuk
						melestarikan dan mengenalkan kembali kekayaan sejarah, budaya, serta jejak
						peradaban Islam di tanah Betawi kepada generasi muda.
					</p>
				</div>
			</section>

			<section className="bg-gray-50 px-6 py-16">
				<div className="mx-auto max-w-6xl">
					<h2 className="mb-12 text-center text-3xl font-bold text-emerald-900">
						Pilar Utama Kami
					</h2>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{coreValues.map((value) => {
							const Icon = value.icon;

							return (
								<article
									key={value.title}
									className="rounded-2xl border-t-4 border-emerald-600 bg-white p-8 shadow-sm transition-all hover:-translate-y-1"
								>
									<Icon className="size-10 text-emerald-700" aria-hidden="true" />
									<h3 className="mt-6 text-xl font-bold text-emerald-900">
										{value.title}
									</h3>
									<p className="mt-3 leading-7 text-gray-700">
										{value.description}
									</p>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section className="relative my-16 mx-6 max-w-5xl overflow-hidden rounded-3xl bg-emerald-800 p-12 text-center shadow-xl md:mx-auto">
				<div
					className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-white/5"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute -bottom-32 -left-16 size-64 rounded-full bg-white/5"
					aria-hidden="true"
				/>
				<h2 className="relative z-10 mb-4 text-3xl font-bold text-white">
					Mari Mulai Petualanganmu!
				</h2>
				<p className="relative z-10 mb-8 text-emerald-100">
					Jelajahi tempat bersejarah, kenali budaya Betawi, dan uji pengetahuanmu
					sekarang juga.
				</p>
				<Link
					href="/heritage"
					className="relative z-10 inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 font-bold text-emerald-950 transition-all hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
				>
					Mulai Eksplorasi
					<ArrowRight size={18} aria-hidden="true" />
				</Link>
			</section>
		</main>
	);
}
