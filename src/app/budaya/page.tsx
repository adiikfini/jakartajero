import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const budayaList = [
	{
		id: "ondel-ondel",
		name: "Ondel-Ondel",
		shortDescription:
			"Ikon boneka raksasa khas Betawi yang melambangkan leluhur penjaga kampung.",
		imageUrl: "/images/ondel-ondel.jpg",
	},
	{
		id: "palang-pintu",
		name: "Tradisi Palang Pintu",
		shortDescription:
			"Tradisi penyambutan tamu dalam pernikahan Betawi yang menggabungkan pantun dan silat.",
		imageUrl: "/images/tradisi-palang-pintu.jpeg",
	},
	{
		id: "lenong",
		name: "Kesenian Lenong",
		shortDescription:
			"Teater tradisional Betawi yang dibawakan dengan dialek khas dan penuh humor.",
		imageUrl: "/images/lenong.jpg",
	},
	{
		id: "tanjidor",
		name: "Musik Tanjidor",
		shortDescription:
			"Orkes kesenian Betawi yang sangat dipengaruhi oleh musik Eropa sejak abad ke-19.",
		imageUrl: "/images/tanjidor.jpg",
	},
	{
		id: "silat-beksi",
		name: "Silat Beksi",
		shortDescription:
			"Seni bela diri khas Betawi yang berkembang di kawasan pesisir dan pinggiran Jakarta.",
		imageUrl: "/images/silat-beksi.jpg",
	},
	{
		id: "tari-sirih-kuning",
		name: "Tari Sirih Kuning",
		shortDescription:
			"Tarian pergaulan yang sering ditampilkan untuk menyambut tamu kehormatan.",
		imageUrl: "/images/tari-sirih-kuning.jpg",
	},
];

export default function BudayaPage() {
	return (
		<main>
            <Navbar />
			<section className="relative isolate overflow-hidden bg-emerald-900 px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
				<div
					className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full border-32 border-amber-50/5"
					aria-hidden="true"
				/>
				<div
					className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full border-32 border-amber-50/5"
					aria-hidden="true"
				/>

				<div className="relative mx-auto max-w-7xl">
					<h1 className="text-4xl font-bold text-amber-50">
						Eksplorasi Budaya Betawi
					</h1>
					<p className="mt-5 max-w-2xl text-base leading-7 text-emerald-100/80 sm:text-lg">
						Kenali kesenian, tradisi, dan nilai-nilai Islami dalam budaya masyarakat
						Betawi.
					</p>
				</div>
			</section>

			<section className="bg-slate-50">
				<div className="mx-auto max-w-7xl p-6 sm:p-8">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{budayaList.map((item) => (
							<Link
								key={item.id}
								href={`/budaya/${item.id}`}
								className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
							>
								<div className="h-48 bg-gray-200">
									{item.imageUrl && (
										<img
											src={item.imageUrl}
											alt={item.name}
											className="h-full w-full object-cover"
											loading="lazy"
										/>
									)}
								</div>
								<div className="p-5">
									<h2 className="text-xl font-bold text-emerald-950">
										{item.name}
									</h2>
									<p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
										{item.shortDescription}
									</p>
									<span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors group-hover:text-emerald-900">
										Pelajari Lebih Lanjut
										<ArrowRight size={16} aria-hidden="true" />
									</span>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
