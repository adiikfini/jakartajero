import { ArrowRight, User } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const tokohList = [
	{
		id: "fatahillah",
		name: "Pangeran Fatahillah",
		title: "Panglima Penakluk Sunda Kelapa",
		shortDescription:
			"Panglima dari Demak yang menaklukkan Sunda Kelapa, mengganti namanya menjadi Jayakarta, dan meletakkan dasar peradaban Islam di pesisir.",
		imageUrl: "/images/Sunan-Gunung-Jati.jpg",
	},
	{
		id: "habib-husein-luar-batang",
		name: "Habib Husein bin Abubakar Alaydrus",
		title: "Wali Qutub Tanah Betawi",
		shortDescription:
			"Ulama besar asal Hadramaut yang makamnya di Luar Batang menjadi salah satu pusat ziarah Islam terbesar di Jakarta.",
		imageUrl:
			"/images/Habib-Husein-Bin-Abubakar.jpeg",
	},
	{
		id: "guru-mansur",
		name: "KH. Mohammad Mansur",
		title: "Ulama dan Pejuang Jembatan Lima",
		shortDescription:
			"Pakar ilmu falak (astronomi Islam) dan tokoh pejuang kemerdekaan yang mengobarkan semangat anti-kolonial di Jakarta Barat.",
		imageUrl: "/images/Guru-Mansur.jpeg",
	},
	{
		id: "habib-ali-kwitang",
		name: "Habib Ali bin Abdurrahman Alhabsyi",
		title: "Pelopor Majelis Taklim Kwitang",
		shortDescription:
			"Tokoh sentral penyebaran Islam yang mendirikan Majelis Taklim Kwitang, pusat pendidikan agama yang sangat dihormati masyarakat Betawi.",
		imageUrl: "/images/Habib-Ali-Kwitang.jpg",
	},
	{
		id: "kh-noer-ali",
		name: "KH. Noer Ali",
		title: "Singa Karawang-Bekasi",
		shortDescription:
			"Ulama karismatik dan Pahlawan Nasional yang memimpin laskar santri melawan penjajah di wilayah pinggiran Jakarta.",
		imageUrl: "/images/KH-Noer-Ali.jpg",
	},
	{
		id: "kh-abdullah-syafiie",
		name: "KH. Abdullah Syafi'ie",
		title: "Pendiri Perguruan As-Syafi'iyah",
		shortDescription:
			"Tokoh pendidik dan orator ulung Betawi yang berdedikasi membangun fondasi pendidikan Islam modern di Jakarta.",
		imageUrl:
			"/images/KH-Abdullah-Syafiie.jpg",
	},
];

export default function TokohPage() {
	return (
		<main>
			<Navbar />
			<section className="relative isolate overflow-hidden bg-emerald-900 px-5 pb-20 pt-28 text-center sm:px-8 sm:pt-32">
				<div
					className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full border-32 border-amber-50/5"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full border-32 border-amber-50/5"
					aria-hidden="true"
				/>

				<div className="relative mx-auto max-w-4xl">
					<h1 className="text-4xl font-bold text-amber-50">
						Tokoh Islam Jakarta
					</h1>
					<p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-emerald-100/80 sm:text-lg">
						Mengenal lebih dekat biografi, perjuangan, dan keteladanan para ulama
						penggerak peradaban Islam di tanah Betawi.
					</p>
				</div>
			</section>

			<section className="bg-slate-50">
				<div className="mx-auto max-w-7xl p-6 sm:p-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{tokohList.map((item) => (
							<Link
								key={item.id}
								href={`/tokoh/${item.id}`}
								className="group relative mt-10 flex flex-col rounded-xl border border-gray-100 bg-white px-6 pb-6 pt-12 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
							>
								<span className="absolute left-1/2 top-0 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-emerald-100 text-emerald-700 ring-8 ring-slate-50">
									{item.imageUrl ? (
										<img
											src={item.imageUrl}
											alt={item.name}
											className="h-full w-full object-cover"
											loading="lazy"
										/>
									) : (
										<User size={34} strokeWidth={1.8} aria-hidden="true" />
									)}
								</span>

								<div className="flex flex-1 flex-col text-center">
									<h2 className="text-xl font-bold text-emerald-950">
										{item.name}
									</h2>
									<p className="mt-2 text-sm font-semibold text-amber-600">
										{item.title}
									</p>
									<p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
										{item.shortDescription}
									</p>
								</div>

								<div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4 text-sm font-semibold text-emerald-700 transition-colors group-hover:text-emerald-900">
									<span>Baca Biografi</span>
									<ArrowRight size={17} aria-hidden="true" />
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
