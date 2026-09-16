import { ArrowLeft, CalendarDays, Clock, MapPin, UserRound } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";

const eventData = [
	{
		id: "pameran-kaligrafi",
		title: "Pameran Kaligrafi Betawi",
		date: "15 Oktober 2026",
		time: "09:00 - 17:00 WIB",
		location: "Perkampungan Budaya Betawi Setu Babakan",
		type: "Pameran",
		price: "Gratis",
		speakerOrGuide: "Kurator Pameran J-HERO",
		fullDescription:
			"Pameran Kaligrafi Betawi menghadirkan karya seni yang memadukan keindahan khat Arab dengan ornamen, warna, dan motif khas Betawi. Pengunjung dapat melihat bagaimana ayat, doa, dan pesan kebaikan diterjemahkan menjadi karya visual yang dekat dengan kehidupan masyarakat Jakarta.\n\nAcara ini cocok untuk pelajar, keluarga, dan siapa saja yang ingin mengenal hubungan antara seni Islam dan budaya lokal. Selain melihat karya, pengunjung dapat mengikuti sesi pengenalan teknik kaligrafi dan mendapatkan inspirasi untuk menjaga seni tradisi tetap hidup.",
		agenda: [
			{ time: "09:00", activity: "Pembukaan dan registrasi pengunjung" },
			{ time: "10:00", activity: "Tur kuratorial karya kaligrafi" },
			{ time: "13:00", activity: "Demo singkat teknik khat Arab" },
			{ time: "15:00", activity: "Lokakarya ornamen Betawi" },
		],
	},
	{
		id: "kajian-fatahillah",
		title: "Kajian Sejarah: Napak Tilas Fatahillah",
		date: "22 Oktober 2026",
		time: "13:00 - 16:00 WIB",
		location: "Masjid Fatahillah, Kota Tua",
		type: "Kajian",
		price: "Gratis",
		speakerOrGuide: "Dr. Ahmad Fauzi, Sejarawan Pesisir Jakarta",
		fullDescription:
			"Kajian ini mengajak peserta mengenal perjalanan Pangeran Fatahillah, panglima dan tokoh penting dalam sejarah Islam di pesisir Jawa. Pembahasan akan menyoroti konteks Sunda Kelapa, hubungan antara dakwah dan perdagangan, serta perubahan nama Sunda Kelapa menjadi Jayakarta.\n\nPeserta akan belajar membaca sejarah dengan kritis melalui peta, sumber cerita, dan diskusi yang ramah untuk pelajar. Acara ini menjadi kesempatan untuk memahami bahwa sejarah Jakarta dibentuk oleh perjuangan, pertemuan budaya, dan cita-cita membangun masyarakat yang beradab.",
		agenda: [
			{ time: "13:00", activity: "Registrasi dan pembukaan kajian" },
			{ time: "13:30", activity: "Pemaparan sejarah Fatahillah dan Sunda Kelapa" },
			{ time: "14:45", activity: "Diskusi peta jalur pesisir Jakarta" },
			{ time: "15:30", activity: "Tanya jawab dan penutup" },
		],
	},
	{
		id: "tur-masjid-tua",
		title: "Walking Tour: Jejak Masjid Tua Jakarta",
		date: "05 November 2026",
		time: "07:30 - 13:00 WIB",
		location: "Titik Kumpul: Stasiun Jakarta Kota",
		type: "Tur Budaya",
		price: "Rp 50.000",
		speakerOrGuide: "Raka Pratama, Pemandu Sejarah Kota Tua",
		fullDescription:
			"Walking tour ini mengajak peserta menyusuri jejak masjid-masjid tua di kawasan pesisir Jakarta Barat dan Utara. Perjalanan dimulai dari kawasan Kota Tua dan membahas hubungan antara pelabuhan, perdagangan, kedatangan ulama, serta tumbuhnya komunitas Muslim di Batavia.\n\nDengan berjalan kaki dan mendengarkan cerita langsung di lokasi, peserta dapat melihat sejarah sebagai pengalaman yang dekat dan nyata. Tur ini cocok bagi keluarga dan pelajar yang ingin belajar sejarah sambil menjelajahi sudut kota secara santai bersama pemandu.",
		agenda: [
			{ time: "07:30", activity: "Kumpul dan pengarahan peserta di Stasiun Jakarta Kota" },
			{ time: "08:00", activity: "Berjalan menuju kawasan masjid tua Kota Tua" },
			{ time: "10:00", activity: "Kunjungan dan cerita sejarah di masjid pesisir" },
			{ time: "12:00", activity: "Refleksi perjalanan dan makan siang bersama" },
		],
	},
	{
		id: "festival-palang-pintu",
		title: "Festival Palang Pintu & Silat Beksi",
		date: "12 November 2026",
		time: "08:00 - 17:00 WIB",
		location: "RPTRA Kalijodo",
		type: "Festival",
		price: "Gratis",
		speakerOrGuide: "Sanggar Betawi Jaya dan Perguruan Silat Beksi DKI",
		fullDescription:
			"Festival ini menghadirkan pertunjukan palang pintu dan kompetisi silat Beksi tingkat pelajar se-DKI Jakarta. Pengunjung dapat menyaksikan pantun berbalas, adu ketangkasan simbolis, serta penampilan pesilat muda yang mewarisi seni bela diri Betawi.\n\nSelain menjadi hiburan, festival ini mengajarkan nilai sopan santun, keberanian, tanggung jawab, dan penghormatan kepada keluarga. Datanglah bersama keluarga untuk mendukung generasi muda sekaligus mengenal budaya Betawi yang tumbuh bersama nilai-nilai Islam.",
		agenda: [
			{ time: "08:00", activity: "Pembukaan festival dan parade budaya" },
			{ time: "09:30", activity: "Pertunjukan tradisi palang pintu" },
			{ time: "11:00", activity: "Kompetisi silat Beksi tingkat pelajar" },
			{ time: "15:30", activity: "Pengumuman pemenang dan pertunjukan penutup" },
		],
	},
	{
		id: "haul-luar-batang",
		title: "Peringatan Haul Habib Husein Luar Batang",
		date: "20 November 2026",
		time: "18:30 - 22:00 WIB",
		location: "Masjid Jami Luar Batang",
		type: "Peringatan",
		price: "Gratis",
		speakerOrGuide: "Majelis Taklim Masjid Jami Luar Batang",
		fullDescription:
			"Peringatan haul Habib Husein Luar Batang merupakan acara doa bersama dan pembacaan manaqib untuk mengenang jasa ulama yang berdakwah di pesisir Sunda Kelapa. Kegiatan ini menjadi bagian dari tradisi masyarakat dalam menghormati ulama dan menyambung silaturahmi antargenerasi.\n\nPeserta akan diajak mengenal kisah dakwah Habib Husein serta peran kawasan Luar Batang dalam sejarah Islam Jakarta. Dengan suasana yang khidmat dan terbuka untuk masyarakat, acara ini menjadi kesempatan untuk belajar sejarah sekaligus memperkuat kepedulian terhadap warisan keagamaan.",
		agenda: [
			{ time: "18:30", activity: "Salat Magrib dan penerimaan jamaah" },
			{ time: "19:30", activity: "Pembacaan tahlil dan doa bersama" },
			{ time: "20:15", activity: "Pembacaan manaqib Habib Husein" },
			{ time: "21:30", activity: "Nasihat penutup dan ramah tamah" },
		],
	},
];

export default async function EventDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const event = eventData.find((item) => item.id === id);

	if (!event) {
		notFound();
	}

	return (
		<>
			<Navbar />
			<main className="min-h-screen bg-gray-50 px-5 pt-24 pb-16 sm:px-8">
				<div className="mx-auto max-w-5xl">
				<Link
					href="/event"
					className="inline-flex items-center gap-2 text-emerald-800 transition-colors hover:text-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
				>
					<ArrowLeft size={18} aria-hidden="true" />
					Kembali ke Daftar Event
				</Link>

				<section className="mt-6 rounded-3xl border-t-8 border-emerald-600 bg-white p-8 shadow-md sm:p-10">
					<span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
						{event.type}
					</span>
					<h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
						{event.title}
					</h1>
					<div className="mt-6 flex flex-col gap-4 text-gray-600 sm:flex-row sm:items-center sm:gap-8">
						<div className="flex items-center gap-2 font-medium">
							<CalendarDays className="text-emerald-700" size={19} aria-hidden="true" />
							<span>{event.date}</span>
						</div>
						<div className="flex items-center gap-2 font-medium">
							<MapPin className="text-emerald-700" size={19} aria-hidden="true" />
							<span>{event.location}</span>
						</div>
					</div>
				</section>

				<section className="mt-8 grid gap-8 lg:grid-cols-[7fr_3fr]">
					<article className="text-gray-700 leading-relaxed">
						<section>
							<h2 className="mb-4 text-2xl font-bold text-emerald-900">
								Tentang Acara Ini
							</h2>
							<div className="space-y-4">
								{event.fullDescription.split("\n\n").map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
							</div>
						</section>

						<section className="mt-10">
							<h2 className="mb-4 text-2xl font-bold text-emerald-900">
								Agenda Acara
							</h2>
							<div className="space-y-3">
								{event.agenda.map((item) => (
									<div
										key={`${item.time}-${item.activity}`}
										className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm"
									>
										<span className="shrink-0 rounded-lg bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-800">
											{item.time}
										</span>
										<span className="pt-2 text-gray-700">{item.activity}</span>
									</div>
								))}
							</div>
						</section>
					</article>

					<aside className="h-fit rounded-2xl border border-gray-100 bg-white p-6 shadow-lg lg:sticky lg:top-28">
						<p className="mb-6 text-3xl font-bold text-amber-500">{event.price}</p>
						<div className="space-y-5 text-sm text-gray-600">
							<div className="flex items-start gap-3">
								<Clock className="mt-0.5 shrink-0 text-emerald-700" size={19} aria-hidden="true" />
								<div>
									<p className="font-semibold text-gray-800">Waktu</p>
									<p className="mt-1">{event.time}</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<UserRound className="mt-0.5 shrink-0 text-emerald-700" size={19} aria-hidden="true" />
								<div>
									<p className="font-semibold text-gray-800">Pemateri / Pemandu</p>
									<p className="mt-1">{event.speakerOrGuide}</p>
								</div>
							</div>
						</div>
						<button
							type="button"
							className="mt-8 w-full rounded-xl bg-emerald-700 py-3 font-bold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
						>
							Daftar Sekarang
						</button>
					</aside>
				</section>
				</div>
			</main>
		</>
	);
}
