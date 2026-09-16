import { ListChecks } from "lucide-react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const kuisList = [
	{
		id: "masjid-istiqlal",
		title: "Misteri Masjid Istiqlal",
		description:
			"Yuk, cari tahu fakta seru tentang masjid terbesar di Asia Tenggara ini! Ada rahasia apa ya di balik kubahnya?",
		difficulty: "Mudah",
		questionCount: 5,
	},
	{
		id: "pahlawan-betawi",
		title: "Tebak Tokoh Jagoan Betawi",
		description:
			"Siapa panglima hebat yang mengganti nama Sunda Kelapa? Mari tebak tokoh-tokoh pahlawan Islam di Jakarta!",
		difficulty: "Sedang",
		questionCount: 7,
	},
	{
		id: "budaya-islami",
		title: "Petualangan Budaya Betawi",
		description:
			"Dari palang pintu sampai ondel-ondel, yuk uji pengetahuanmu tentang kebudayaan Betawi yang keren!",
		difficulty: "Sedang",
		questionCount: 7,
	},
	{
		id: "jejak-ulama",
		title: "Jejak Ulama Hebat",
		description:
			"Kuis spesial untuk kamu yang suka sejarah! Tebak siapa saja ulama yang menyebarkan kebaikan di Jakarta.",
		difficulty: "Sulit",
		questionCount: 10,
	},
];

export default function KuisPage() {
	return (
		<main>
			<Navbar />
			<section className="rounded-b-[3rem] bg-emerald-600 px-5 pb-20 pt-28 sm:px-8 md:pt-32">
				<div className="mx-auto max-w-4xl text-center">
					<h1 className="text-4xl font-extrabold text-amber-300 drop-shadow-md md:text-5xl">
						Waktunya Bermain &amp; Belajar!
					</h1>
					<p className="mt-4 text-lg text-white">
						Pilih kuis di bawah ini dan kumpulkan poinmu. Buktikan kalau kamu adalah
						J-HERO sejati!
					</p>
				</div>
			</section>

			<section className="bg-slate-50 pb-16">
				<div className="mx-auto -mt-8 grid max-w-5xl grid-cols-1 gap-6 p-6 md:grid-cols-2">
					{kuisList.map((item) => (
						<Link
							key={item.id}
							href={`/kuis/${item.id}`}
							className="group flex flex-col rounded-3xl border-4 border-emerald-100 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
						>
							<div className="flex items-start justify-between gap-4">
								<h2 className="text-2xl font-bold text-emerald-800">
									{item.title}
								</h2>
								<span
									className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
										item.difficulty === "Mudah"
											? "bg-green-100 text-green-700"
											: item.difficulty === "Sedang"
												? "bg-amber-100 text-amber-700"
												: "bg-red-100 text-red-700"
									}`}
								>
									{item.difficulty}
								</span>
							</div>

							<p className="mt-3 leading-relaxed text-gray-600">
								{item.description}
							</p>

							<div className="mt-8 flex items-center justify-between gap-4 border-t border-emerald-50 pt-5">
								<span className="inline-flex items-center gap-2 text-sm text-gray-500">
									<ListChecks size={18} className="text-emerald-700" aria-hidden="true" />
									{item.questionCount} Soal
								</span>
								<span className="rounded-full bg-amber-400 px-6 py-2 font-bold text-emerald-900 transition-colors group-hover:bg-amber-500">
									Mulai Main!
								</span>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
