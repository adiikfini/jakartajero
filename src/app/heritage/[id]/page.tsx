import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import InfographicViewer from "@/components/InfographicViewer";
import Navbar from "@/components/Navbar";



const heritageData = [
	{
		id: "masjid-istiqlal",
		name: "Masjid Istiqlal",
		imageUrl: "/images/Masjid-Istiqlal-Jakarta.jpg",
		location: "Jakarta Pusat, berseberangan dengan Gereja Katedral",
		establishedYear: "1961 (diresmikan pada 1978)",
		fullDescription:
			"Masjid Istiqlal adalah masjid nasional Indonesia yang berdiri di kawasan bekas Taman Wilhelmina, Jakarta Pusat. Nama Istiqlal berarti kemerdekaan dalam bahasa Arab, mencerminkan rasa syukur bangsa Indonesia atas kemerdekaan yang diproklamasikan pada 1945.\n\nPembangunannya dimulai pada 1961 atas gagasan Presiden Soekarno dan diresmikan pada 22 Februari 1978. Selain menjadi tempat ibadah, Istiqlal berfungsi sebagai ruang pertemuan kebangsaan dan simbol kerukunan antarumat beragama.",
		architectureAndHistory:
			"Rancangan Frederich Silaban menampilkan kubah utama berdiameter 45 meter sebagai perlambang tahun kemerdekaan Indonesia, 1945. Bangunan utamanya ditopang dua belas kolom besar yang merujuk pada tanggal kelahiran Nabi Muhammad, 12 Rabiul Awal, dalam penafsiran simbolis arsitekturnya.\n\nMasjid ini memiliki tujuh gerbang yang masing-masing diberi nama Asmaul Husna dan dimaknai sebagai perlambang tujuh lapis langit dalam kosmologi Islam. Letaknya yang berseberangan dengan Gereja Katedral juga kerap dipandang sebagai wujud pesan toleransi dan hidup berdampingan.",
		facilities: ["Ruang ibadah utama", "Perpustakaan", "Koperasi", "Tempat wudhu luas", "Area parkir"],
		openHours: "04.00 - 21.00",
		videoUrl: "https://www.youtube.com/watch?v=1t9IwSbE-iU",
		virtualTourUrl: "https://indonesiavirtualtour.com/storage/destination/masjid-istiqlal/src/index.htm",
		infographics: ["/images/infogragis-mesjid-istiklal.jpeg", "/images/infogragis-mesjid-istiklal2.jpeg"],
	},
	{
		id: "masjid-luar-batang",
		name: "Masjid Luar Batang",
		imageUrl: "/images/mesjid-luar-batang.jpg",
		location: "Penjaringan, Jakarta Utara",
		establishedYear: "1739 (periode awal masjid dan kompleks makam)",
		fullDescription:
			"Masjid Luar Batang, yang juga dikenal sebagai Masjid Jami Keramat Luar Batang, berada di kawasan pesisir dekat Sunda Kelapa. Tempat ini berkaitan dengan Habib Husein bin Abubakar Alaydrus, ulama asal Hadramaut yang berdakwah di Batavia dan dimakamkan di kompleks tersebut.\n\nNama Luar Batang merujuk pada kisah kawasan pemakaman yang dahulu berada di luar batang atau peti pembatas pemeriksaan pelabuhan. Hingga kini masjid dan makamnya menjadi tempat ibadah, ziarah, serta penanda penting sejarah komunitas Arab dan Muslim di Jakarta.",
		architectureAndHistory:
			"Bangunan masjid mengalami beberapa kali pemugaran dan perluasan, sehingga bentuk yang terlihat sekarang merupakan hasil perkembangan lintas masa. Karakternya tetap memperlihatkan hubungan erat antara ruang ibadah, makam keramat, dan lingkungan pelabuhan tua di sekitarnya.\n\nKedekatannya dengan Sunda Kelapa menjadikan Luar Batang bagian dari jalur sejarah perdagangan dan dakwah di pesisir Batavia. Tradisi ziarah yang terus berlangsung memperlihatkan bagaimana warisan keagamaan dan sejarah maritim Jakarta saling bertemu.",
		facilities: ["Ruang ibadah", "Area ziarah", "Tempat wudhu", "Halaman masjid"],
		openHours: "04.00 - 21.00",
	},
	{
		id: "makam-mbah-priok",
		name: "Makam Mbah Priok",
		imageUrl: "/images/makam-mbah-priok.jpg",
		location: "Koja, Jakarta Utara",
		establishedYear: "Abad ke-18 (berdasarkan tradisi lokal)",
		fullDescription:
			"Makam Mbah Priok adalah kompleks makam Habib Hasan bin Muhammad Al Haddad, tokoh yang dalam tradisi setempat dikenal sebagai Mbah Priok. Kompleks ini berada di kawasan Tanjung Priok dan menjadi salah satu tujuan ziarah penting bagi masyarakat Jakarta dan sekitarnya.\n\nKisah Mbah Priok berhubungan dengan perjalanan dakwah Islam di pesisir utara Jawa. Sejumlah detail biografisnya hidup dalam tradisi lisan dan riwayat keluarga, sehingga penanggalan serta beberapa bagian kisahnya perlu dibaca sebagai warisan ingatan masyarakat.",
		architectureAndHistory:
			"Kompleks makam berkembang sebagai ruang ziarah yang memadukan bangunan makam, masjid, dan fasilitas pelayanan jamaah. Bentuk fisik yang ada sekarang merupakan hasil perawatan dan penataan berulang untuk menampung peziarah yang terus datang.\n\nNilai sejarah kawasan ini terletak pada pertemuan antara memori ulama, jalur pelayaran pesisir, dan pertumbuhan kota pelabuhan. Makam Mbah Priok tetap menjadi bagian dari identitas keagamaan dan sejarah sosial Jakarta Utara.",
		facilities: ["Area makam dan ziarah", "Masjid", "Tempat wudhu", "Area parkir"],
		openHours: "24 jam (akses ziarah mengikuti ketentuan pengelola)",
	},
	{
		id: "masjid-kampung-bandar",
		name: "Masjid Kampung Bandar",
		imageUrl: "/images/masjid-kampung-bandan.jpg",
		location: "Kampung Bandan, Pademangan, Jakarta Utara",
		establishedYear: "1789 (diperkirakan)",
		fullDescription:
			"Masjid Kampung Bandar, yang dikenal pula sebagai Masjid Jami Al-Mukarromah Kampung Bandan, merupakan salah satu masjid tua di kawasan pesisir Jakarta. Keberadaannya berkaitan dengan perkembangan Kampung Bandan sebagai permukiman dan kawasan aktivitas masyarakat Muslim di sekitar pelabuhan Sunda Kelapa.\n\nMasjid ini menjadi ruang ibadah dan pusat kehidupan sosial warga selama beberapa generasi. Tradisi ziarah dan kisah yang berkembang di sekitarnya memperlihatkan kuatnya hubungan antara masjid tua, komunitas pesisir, dan sejarah perdagangan Batavia.",
		architectureAndHistory:
			"Arsitektur masjid menunjukkan lapisan perubahan yang berlangsung seiring pertumbuhan jamaah dan kebutuhan bangunan. Unsur masjid tradisional Jawa dan pengaruh lingkungan pesisir dapat dibaca melalui susunan ruang ibadah, halaman, serta hubungan bangunan dengan kompleks makam di sekitarnya.\n\nSebagai bagian dari kawasan sejarah Jakarta Utara, masjid ini penting untuk memahami bagaimana Islam berkembang melalui jaringan pelabuhan, permukiman, dan hubungan antarkomunitas. Tahun pendiriannya sering disebut 1789, meski sumber populer dapat memberikan penanggalan berbeda.",
		facilities: ["Ruang ibadah", "Area ziarah", "Tempat wudhu", "Halaman masjid"],
		openHours: "04.00 - 21.00",
	},
	{
		id: "masjid-al-makmur",
		name: "Masjid Al-Makmur",
		imageUrl: "/images/masjid-al-makmur.jpg",
		location: "Tanah Abang, Jakarta Pusat",
		establishedYear: "1915 (periode awal bangunan yang tercatat)",
		fullDescription:
			"Masjid Al-Makmur Tanah Abang tumbuh bersama kawasan perdagangan dan permukiman Tanah Abang. Masjid ini menjadi tempat ibadah bagi masyarakat yang tinggal dan beraktivitas di sekitar pasar, sekaligus menjadi ruang berkumpulnya jamaah Muslim di pusat kota Jakarta.\n\nPerjalanan masjid mencerminkan perubahan Tanah Abang dari kawasan lama menjadi salah satu pusat perdagangan paling ramai di ibu kota. Keberlangsungannya menunjukkan peran masjid sebagai institusi sosial yang menjaga kesinambungan kehidupan keagamaan di tengah perubahan kota.",
		architectureAndHistory:
			"Bangunan masjid telah mengalami renovasi dan penyesuaian untuk melayani jumlah jamaah yang terus bertambah. Karena itu, tampilan yang ada sekarang memadukan unsur bangunan lama dengan fasilitas dan struktur yang lebih baru.\n\nNilai heritage Al-Makmur terutama terletak pada kesinambungan fungsi dan lokasinya di kawasan bersejarah Tanah Abang. Masjid ini merekam hubungan antara perdagangan, migrasi penduduk, dan perkembangan komunitas Muslim perkotaan di Jakarta.",
		facilities: ["Ruang ibadah", "Tempat wudhu", "Ruang kegiatan jamaah", "Area parkir terbatas"],
		openHours: "04.00 - 21.00",
	},
	{
		id: "masjid-jami-al-mansur",
		name: "Masjid Jami Al-Mansur",
		imageUrl: "/images/masjid-jami-al-mansur.jpg",
		location: "Jembatan Lima, Tambora, Jakarta Barat",
		establishedYear: "1717",
		fullDescription:
			"Masjid Jami Al-Mansur adalah masjid tua di kawasan Jembatan Lima yang sering disebut sebagai salah satu peninggalan penting sejarah Islam di Batavia. Masjid ini berhubungan dengan keluarga dan ulama Al-Mansur yang berperan dalam kehidupan keagamaan masyarakat di wilayah Jakarta Barat.\n\nSelama berabad-abad, masjid ini menjadi tempat ibadah, pengajaran agama, dan pertemuan warga. Letaknya di kawasan padat yang dekat dengan jalur perdagangan membuatnya menjadi saksi perubahan sosial dan urbanisasi Jakarta dari masa kolonial hingga sekarang.",
		architectureAndHistory:
			"Riwayat masjid umumnya menempatkan pendiriannya pada 1717, dengan berbagai perluasan dan perbaikan pada masa-masa berikutnya. Bentuk bangunannya memperlihatkan pertemuan tradisi masjid Nusantara dengan pengaruh arsitektur kota lama Batavia.\n\nMasjid Jami Al-Mansur juga dikenang karena perannya dalam pendidikan dan dakwah. Keberadaan bangunan ini memperlihatkan bahwa jaringan ulama, keluarga, dan jamaah telah menjadi bagian penting dari pembentukan komunitas Muslim Jakarta sejak awal perkembangan kota.",
		facilities: ["Ruang ibadah", "Ruang pengajian", "Tempat wudhu", "Perpustakaan kecil"],
		openHours: "04.00 - 21.00",
	},
];

function getDestination(id: string) {
	return heritageData.find((item) => item.id === id);
}

export default async function HeritageDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const destination = getDestination(id);

	if (!destination) {
		return (
			<>
				<Navbar />
				<main className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-5 text-center">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
							404
						</p>
						<h1 className="mt-3 text-3xl font-bold text-emerald-900">
							Destinasi tidak ditemukan
						</h1>
						<Link
							href="/heritage"
							className="mt-6 inline-flex rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
						>
							Kembali ke Heritage
						</Link>
					</div>
				</main>
			</>
		);
	}

	return (
		<>
			<Navbar />
			<main className="bg-slate-50 pb-16 sm:pb-24">
					<section className="relative z-0">
					<Link
						href="/heritage"
							className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-900 shadow-md backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
					>
						<ArrowLeft size={17} aria-hidden="true" />
						Kembali
					</Link>
						<img
							src={destination.imageUrl}
							alt={destination.name}
							className="relative z-0 w-full h-64 md:h-96 object-cover object-center"
						/>
				</section>

				<section className="relative z-10 mx-auto -mt-16 max-w-5xl px-5 lg:-mt-24">
					<div className="rounded-xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">
						<h1 className="text-4xl font-bold leading-tight text-emerald-900 sm:text-5xl">
							{destination.name}
						</h1>
						<div className="mt-4 flex items-start gap-2 text-gray-500">
							<MapPin className="mt-0.5 shrink-0" size={18} aria-hidden="true" />
							<span>{destination.location}</span>
						</div>
						<div className="mt-8 border-t border-gray-100 pt-6">
							<p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
								Tahun Berdiri
							</p>
							<p className="mt-1 text-lg font-semibold text-gray-800">
								{destination.establishedYear}
							</p>
						</div>
					</div>
				</section>

				<section className="mx-auto mt-12 grid max-w-5xl gap-8 px-5 lg:grid-cols-[7fr_3fr] lg:gap-12">
					<article className="text-gray-700 leading-relaxed">
						<section>
							<h2 className="mb-4 text-2xl font-semibold text-emerald-800">
								Deskripsi
							</h2>
							<div className="space-y-4">
								{destination.fullDescription
									.split("\n\n")
									.map((paragraph) => (
										<p key={paragraph}>{paragraph}</p>
									))}
							</div>
						</section>

						<section className="mt-10">
							<h2 className="mb-4 text-2xl font-semibold text-emerald-800">
								Sejarah &amp; Arsitektur
							</h2>
							<div className="space-y-4">
								{destination.architectureAndHistory
									.split("\n\n")
									.map((paragraph) => (
										<p key={paragraph}>{paragraph}</p>
									))}
							</div>
						</section>

						{destination.infographics && destination.infographics.length > 0 && (
							<section className="mt-10">
								<h2 className="mb-4 text-2xl font-semibold text-emerald-800">
									Infografis
								</h2>
								<InfographicViewer images={destination.infographics} />
							</section>
						)}
					</article>

					<aside className="h-fit rounded-xl bg-amber-50 p-6">
						<h2 className="text-xl font-semibold text-emerald-800">
							Informasi Penting
						</h2>
						<div className="mt-6 space-y-6 text-sm leading-6 text-gray-700">
							<div>
								<p className="font-semibold text-gray-800">Waktu Buka</p>
								<p>{destination.openHours}</p>
							</div>
							<div>
								<p className="font-semibold text-gray-800">Fasilitas</p>
								<ul className="mt-2 list-disc space-y-1 pl-5">
									{destination.facilities.map((facility) => (
										<li key={facility}>{facility}</li>
									))}
								</ul>
							</div>
						</div>
						<a
							href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination.name)}`}
							target="_blank"
							rel="noreferrer"
							className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
						>
							Lihat Peta Lokasi
						</a>
						{destination.videoUrl && (
							<a
								href={destination.videoUrl}
								target="_blank"
								rel="noreferrer"
								className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-red-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
							>
								Tonton Animasi Sejarah
							</a>
						)}
						{destination.virtualTourUrl && (
							<a
								href={destination.virtualTourUrl}
								target="_blank"
								rel="noreferrer"
								className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-amber-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
							>
								Jelajahi Virtual Tour 360°
							</a>
						)}
					</aside>
				</section>
			</main>
		</>
	);
}
