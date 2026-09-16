import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const eventList = [
	{
		id: "pameran-kaligrafi",
		title: "Pameran Kaligrafi Betawi",
		date: "15 Oktober 2026",
		location: "Perkampungan Budaya Betawi Setu Babakan",
		type: "Pameran",
		shortDescription:
			"Pameran karya seni kaligrafi yang memadukan khot Arab dengan ornamen khas Betawi.",
	},
	{
		id: "kajian-fatahillah",
		title: "Kajian Sejarah: Napak Tilas Fatahillah",
		date: "22 Oktober 2026",
		location: "Masjid Fatahillah, Kota Tua",
		type: "Kajian",
		shortDescription:
			"Mengupas tuntas sejarah perjuangan Pangeran Fatahillah dalam merebut dan membangun Jayakarta.",
	},
	{
		id: "tur-masjid-tua",
		title: "Walking Tour: Jejak Masjid Tua Jakarta",
		date: "05 November 2026",
		location: "Titik Kumpul: Stasiun Jakarta Kota",
		type: "Tur Budaya",
		shortDescription:
			"Jalan santai menyusuri masjid-masjid bersejarah di pesisir Jakarta Barat dan Utara bersama pemandu sejarah.",
	},
	{
		id: "festival-palang-pintu",
		title: "Festival Palang Pintu & Silat Beksi",
		date: "12 November 2026",
		location: "RPTRA Kalijodo",
		type: "Festival",
		shortDescription:
			"Pertunjukan akbar tradisi palang pintu dan kompetisi silat Beksi tingkat pelajar se-DKI Jakarta.",
	},
	{
		id: "haul-luar-batang",
		title: "Peringatan Haul Habib Husein Luar Batang",
		date: "20 November 2026",
		location: "Masjid Jami Luar Batang",
		type: "Peringatan",
		shortDescription:
			"Acara doa bersama dan pembacaan manaqib untuk mengenang jasa Habib Husein di pesisir Sunda Kelapa.",
	},
];

export default function EventPage() {
	return (
		<main>
			<Navbar />
			<section className="bg-emerald-900 px-5 pb-16 pt-28 sm:px-8">
				<div className="mx-auto max-w-7xl">
					<h1 className="text-4xl font-bold text-amber-50">
						Event Center J-HERO
					</h1>
					<p className="mt-4 max-w-2xl text-lg leading-7 text-emerald-100">
						Jangan lewatkan pameran, kajian sejarah, dan tur budaya Islam terdekat
						di Jakarta.
					</p>
				</div>
			</section>

			<section className="bg-slate-50 pb-16">
				<div className="mx-auto -mt-8 grid max-w-5xl grid-cols-1 gap-6 p-6 lg:grid-cols-2">
					{eventList.map((item) => (
						<Link
							key={item.id}
							href={`/event/${item.id}`}
							className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 md:flex-row"
						>
							<div className="flex min-w-37.5 flex-col items-center justify-center border-b border-emerald-100 bg-emerald-50 p-6 text-center md:border-b-0 md:border-r">
								<CalendarDays
									className="text-emerald-700"
									size={30}
									aria-hidden="true"
								/>
								<span className="mt-3 font-bold text-emerald-800">
									{item.date}
								</span>
							</div>
							<div className="flex-1 p-6">
								<span className="mb-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
									{item.type}
								</span>
								<h2 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-800">
									{item.title}
								</h2>
								<div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
									<MapPin size={17} className="shrink-0" aria-hidden="true" />
									<span>{item.location}</span>
								</div>
								<p className="mt-3 line-clamp-2 text-gray-600">
									{item.shortDescription}
								</p>
							</div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
}
