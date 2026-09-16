import { Gamepad2, QrCode } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function GamePage() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-slate-50 px-5 pb-16 pt-28">
				<section className="mx-auto max-w-4xl text-center">
					<h1 className="text-4xl font-extrabold text-emerald-900">
						Arena Bermain J-HERO
					</h1>
					<p className="mt-2 text-gray-600">
						Pilih caramu bertualang: tantang dirimu lewat kuis online atau jelajahi
						lokasi dengan scan barcode!
					</p>
				</section>

				<section className="mx-auto my-10 grid max-w-4xl grid-cols-1 gap-8 px-5 md:grid-cols-2">
					<Link
						href="/kuis"
						className="group rounded-3xl border-2 border-emerald-500 bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
					>
						<div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
							<Gamepad2 size={34} aria-hidden="true" />
						</div>
						<span className="mt-6 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
							Mode Digital
						</span>
						<h2 className="mt-4 text-2xl font-bold text-emerald-900">
							Kuis Edukasi Sejarah
						</h2>
						<p className="mt-3 leading-7 text-gray-600">
							Uji pengetahuanmu tentang sejarah, budaya, dan tokoh penting Jakarta.
						</p>
						<span className="mt-8 inline-flex rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition-colors group-hover:bg-emerald-800">
							Mulai Bermain
						</span>
					</Link>

					<div className="rounded-3xl border-2 border-emerald-500 bg-white p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl ">
						<span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
							Mode Lapangan
						</span>
						<h2 className="mt-4 text-2xl font-bold text-emerald-900">
							Petualangan Barcode
						</h2>
						<div className="mx-auto mt-6 flex h-48 w-48 flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-gray-300 bg-gray-100 p-3 text-gray-500">
							<div className="size-36 overflow-hidden bg-white">
								<img
									src="/images/Barcode-game.png"
									alt="Barcode Game"
									className="h-36 w-auto max-w-none"
								/>
							</div>
							<span className="mt-2 text-sm font-semibold">Scan Barcode</span>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
