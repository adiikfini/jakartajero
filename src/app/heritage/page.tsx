import Link from "next/link";
import Navbar from "@/components/Navbar";

const destinations = [
	{
		id: "masjid-istiqlal",
		name: "Masjid Istiqlal",
		shortDescription:
			"Masjid terbesar di Asia Tenggara yang menjadi simbol kemerdekaan dan kerukunan umat beragama di Jakarta.",
		imageUrl: "/images/Masjid-Istiqlal-Jakarta.jpg",
	},
	{
		id: "masjid-luar-batang",
		name: "Masjid Luar Batang",
		shortDescription:
			"Masjid bersejarah di kawasan Sunda Kelapa yang menyimpan kisah dakwah dan perjalanan ulama di pesisir Jakarta.",
		imageUrl:
			"/images/mesjid-luar-batang.jpg",
	},
	{
		id: "makam-mbah-priok",
		name: "Makam Mbah Priok",
		shortDescription:
			"Salah satu destinasi ziarah penting di Jakarta Utara yang berkaitan erat dengan sejarah penyebaran Islam di Batavia.",
		imageUrl:
			"/images/makam-mbah-priok.jpg",
	},
	{
		id: "masjid-kampung-bandan",
		name: "Masjid Kampung Bandan",
		shortDescription:
			"Jejak masjid tua di kawasan pesisir Jakarta yang merekam perkembangan komunitas Muslim sejak masa lampau.",
		imageUrl:
			"/images/masjid-kampung-bandan.jpg",
	},
	{
		id: "masjid-al-makmur",
		name: "Masjid Al-Makmur",
		shortDescription:
			"Masjid bersejarah di Tanah Abang yang menjadi bagian dari kehidupan keagamaan masyarakat Jakarta selama generasi.",
		imageUrl:
			"/images/masjid-al-makmur.jpg",
	},
	{
		id: "masjid-jami-al-mansur",
		name: "Masjid Jami Al-Mansur",
		shortDescription:
			"Masjid tua di Jembatan Lima yang menjadi saksi tumbuhnya pusat pendidikan dan dakwah Islam di Jakarta Barat.",
		imageUrl:
			"/images/masjid-jami-al-mansur.jpg",
	},
];

export default function HeritagePage() {
	return (
		<>
			<Navbar />

			<header className="bg-emerald-900 px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
				<div className="mx-auto max-w-7xl">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
						Heritage Explorer
					</p>
					<h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
						Jelajahi Heritage Islam Jakarta
					</h1>
					<p className="mt-5 max-w-2xl text-base leading-7 text-emerald-100 sm:text-lg">
						Temukan masjid, makam, dan jejak sejarah yang membentuk perjalanan
						Islam di ibu kota.
					</p>
				</div>
			</header>

			<main className="bg-slate-50 px-5 py-12 sm:py-16 lg:px-8 lg:py-20">
				<div className="mx-auto max-w-7xl">
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
							Destinasi Pilihan
						</h2>
						<p className="mt-2 text-gray-600">
							Perjalanan belajar dimulai dari tempat-tempat yang menyimpan cerita.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{destinations.map((destination) => (
							<article
								key={destination.id}
								className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
							>
								<div className="aspect-video bg-gray-200">
									<img
										src={destination.imageUrl}
										alt={destination.name}
										className="h-full w-full object-cover"
										loading="lazy"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-800">
										{destination.name}
									</h3>
									<p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
										{destination.shortDescription}
									</p>
									<Link
										href={`/heritage/${destination.id}`}
										className="mt-5 inline-flex rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
									>
										Lihat Detail
									</Link>
								</div>
							</article>
						))}
					</div>
				</div>
			</main>
		</>
	);
}
