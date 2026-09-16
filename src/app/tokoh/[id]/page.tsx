import { ArrowLeft, CalendarDays, FileText, UserRound } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const tokohData = [
	{
		id: "fatahillah",
		name: "Pangeran Fatahillah",
		title: "Panglima Penakluk Sunda Kelapa",
		lifespan: "Sekitar akhir abad ke-15 - 1570",
		fullBiography:
			"Pangeran Fatahillah, yang dalam berbagai sumber juga disebut Fadhillah Khan atau Faletehan, adalah panglima dan ulama yang berkiprah dalam jaringan politik Islam di Jawa dan pesisir barat Nusantara. Riwayat asal-usulnya memiliki beberapa versi, termasuk hubungan dengan Pasai dan Kesultanan Demak, sehingga penyebutan detail biografinya perlu memperhatikan perbedaan sumber.\n\nPada masa mudanya, ia dikenal menempuh perjalanan ke pusat-pusat keilmuan dan perdagangan Islam sebelum bergabung dengan kekuatan politik Demak dan Cirebon. Pengalaman keagamaan, kemaritiman, dan militernya membentuk peran pentingnya dalam menghadapi pengaruh Portugis serta mempertahankan jalur perdagangan di pesisir Jawa.\n\nPada 1527, pasukan yang dipimpinnya merebut Sunda Kelapa dari pengaruh Portugis dan mengganti namanya menjadi Jayakarta. Setelah itu ia berperan dalam pemerintahan dan dakwah di kawasan Banten serta Cirebon, hingga akhir hayatnya di Cirebon sekitar 1570.",
		legacyAndImpact:
			"Penaklukan Sunda Kelapa dan penamaan Jayakarta menjadi tonggak penting dalam sejarah politik Islam di wilayah yang kemudian berkembang menjadi Jakarta. Peristiwa tersebut juga menempatkan pelabuhan itu dalam jaringan kekuasaan dan perdagangan Muslim di pesisir utara Jawa.\n\nWarisan Fatahillah hidup dalam ingatan sejarah Jakarta melalui nama kota, museum, masjid, dan berbagai institusi. Pengaruhnya dipahami bukan hanya sebagai kemenangan militer, tetapi juga sebagai bagian dari proses terbentuknya masyarakat pesisir yang menggabungkan dakwah, perdagangan, dan pemerintahan.",
		timeline: [
			{ year: "Awal abad ke-16", event: "Berkiprah dalam jaringan politik dan dakwah Islam di Jawa." },
			{ year: "1527", event: "Menaklukkan Sunda Kelapa dan menamainya Jayakarta." },
			{ year: "Sekitar 1570", event: "Wafat di Cirebon menurut riwayat yang umum digunakan." },
		],
		imageUrl: "/images/Sunan-Gunung-Jati.jpg",
	},
	{
		id: "habib-husein-luar-batang",
		name: "Habib Husein bin Abubakar Alaydrus",
		title: "Wali Qutub Tanah Betawi",
		lifespan: "Sekitar 1720 - 1756",
		fullBiography:
			"Habib Husein bin Abubakar Alaydrus adalah ulama keturunan Arab Hadramaut yang datang dan berdakwah di Batavia pada abad ke-18. Ia dikenal sebagai bagian dari keluarga Ba Alawi yang memiliki tradisi keilmuan dan dakwah panjang di berbagai wilayah Samudra Hindia.\n\nDi Batavia, Habib Husein berdakwah di sekitar kawasan pelabuhan dan permukiman pesisir. Kisah hidupnya dalam tradisi masyarakat menekankan ketekunan ibadah, keluasan ilmu, dan kedekatannya dengan kelompok masyarakat dari berbagai latar. Ia juga dikenang karena hubungan spiritualnya dengan para jamaah dan murid.\n\nSetelah wafat, ia dimakamkan di kawasan Luar Batang, dekat Sunda Kelapa. Makam dan masjid di sekitarnya berkembang menjadi pusat ziarah yang menghubungkan sejarah dakwah Islam, komunitas Hadrami, dan kehidupan pelabuhan Batavia.",
		legacyAndImpact:
			"Warisan utama Habib Husein adalah tradisi keilmuan, dakwah, dan ziarah yang terus hidup di Masjid Luar Batang. Kompleks tersebut menjadi ruang penting bagi masyarakat untuk mengingat peran ulama dalam pertumbuhan Islam di pesisir Jakarta.\n\nPengaruhnya juga tampak dalam hubungan sosial antara komunitas keturunan Arab dan masyarakat Betawi. Kisahnya memperkaya identitas keislaman Jakarta yang dibentuk oleh perjumpaan ulama pendatang, pedagang, dan komunitas lokal.",
		timeline: [
			{ year: "Sekitar 1720", event: "Diperkirakan lahir di Hadramaut." },
			{ year: "Abad ke-18", event: "Datang dan berdakwah di Batavia, terutama kawasan pesisir." },
			{ year: "1756", event: "Wafat dan dimakamkan di kawasan Luar Batang menurut riwayat yang umum dikenal." },
		],
		imageUrl: "/images/Habib-Husein-Bin-Abubakar.jpeg",
	},
	{
		id: "guru-mansur",
		name: "KH. Mohammad Mansur",
		title: "Ulama dan Pejuang Jembatan Lima",
		lifespan: "1878 - 1967",
		fullBiography:
			"KH. Mohammad Mansur, yang populer disebut Guru Mansur, lahir dan tumbuh dalam lingkungan ulama Betawi di wilayah Jembatan Lima, Jakarta Barat. Ia memperoleh pendidikan agama dari keluarga dan sejumlah guru di Betawi, kemudian memperdalam ilmu keislaman dan ilmu falak melalui jaringan ulama Nusantara serta dunia Arab.\n\nGuru Mansur dikenal memiliki penguasaan ilmu falak, fikih, dan ilmu-ilmu keislaman lainnya. Ia mengajar di masjid dan majelis, membina murid, serta menyusun atau mengajarkan pengetahuan yang membantu masyarakat menentukan waktu ibadah dan arah kiblat. Keilmuannya membuatnya dihormati lintas kampung.\n\nPada masa perjuangan kemerdekaan, ia menyuarakan penolakan terhadap kolonialisme dan mendorong semangat perlawanan masyarakat. Sikapnya tercermin dalam dakwah dan pengajaran yang menghubungkan ketaatan agama dengan tanggung jawab membela tanah air.",
		legacyAndImpact:
			"Nama Guru Mansur lekat dengan Masjid Jami Al-Mansur di Jembatan Lima, yang menjadi salah satu pusat pendidikan Islam dan kehidupan sosial masyarakat Jakarta Barat. Murid dan jaringan pengajiannya membantu mempertahankan tradisi keilmuan Islam Betawi di tengah perubahan zaman.\n\nKeahliannya dalam ilmu falak memperlihatkan kontribusi ulama Betawi pada pengetahuan Islam praktis, sementara sikap anti-kolonialnya memperkuat hubungan antara pendidikan agama dan kesadaran kebangsaan. Ia dikenang sebagai guru, ahli ilmu, dan tokoh masyarakat.",
		timeline: [
			{ year: "1878", event: "Lahir di lingkungan Jembatan Lima, Jakarta." },
			{ year: "Awal abad ke-20", event: "Mengembangkan pengajaran agama dan ilmu falak di Jembatan Lima." },
			{ year: "1940-an", event: "Mendukung semangat perjuangan dan penolakan terhadap kolonialisme." },
			{ year: "1967", event: "Wafat dan dimakamkan di kompleks Masjid Jami Al-Mansur." },
		],
		imageUrl: "/images/Guru-Mansur.jpeg",
	},
	{
		id: "habib-ali-kwitang",
		name: "Habib Ali bin Abdurrahman Alhabsyi",
		title: "Pelopor Majelis Taklim Kwitang",
		lifespan: "1870 - 1968",
		fullBiography:
			"Habib Ali bin Abdurrahman Alhabsyi lahir di Jakarta pada 20 April 1870 dalam keluarga sayyid yang memiliki tradisi ilmu dan dakwah. Ia belajar kepada ayahnya, Habib Abdurrahman Alhabsyi, serta sejumlah ulama di Betawi dan kemudian memperdalam pengetahuan agama melalui perjalanan ke Hadramaut.\n\nSetelah kembali ke Batavia, Habib Ali mengembangkan pengajian yang kemudian dikenal sebagai Majelis Taklim Kwitang. Pengajarannya terbuka bagi masyarakat luas dan menggunakan pendekatan yang dekat dengan kehidupan warga, sehingga menarik jamaah dari berbagai lapisan Betawi dan kota-kota sekitarnya.\n\nIa juga dikenal memiliki hubungan baik dengan tokoh masyarakat dan pemerintahan, tanpa mengurangi kemandiriannya sebagai ulama. Majelisnya menjadi tempat pembelajaran hadis, fikih, akhlak, dan tasawuf hingga wafatnya pada 20 Oktober 1968.",
		legacyAndImpact:
			"Majelis Taklim Kwitang menjadi salah satu lembaga pendidikan Islam nonformal paling berpengaruh di Jakarta. Tradisi pengajian yang dirintis Habib Ali diteruskan oleh keluarga, murid, dan jaringan ulama, serta ikut membentuk corak keislaman Betawi yang berakar pada ilmu, adab, dan kecintaan kepada Nabi.\n\nDampaknya melampaui ruang pengajian karena Kwitang menjadi pusat silaturahmi ulama, santri, dan masyarakat. Haul dan majelis yang berkembang dari tradisinya terus menjadi bagian dari kalender keagamaan Jakarta dan memperkuat kesinambungan dakwah antargenerasi.",
		timeline: [
			{ year: "1870", event: "Lahir di Jakarta pada 20 April." },
			{ year: "Akhir abad ke-19", event: "Memperdalam ilmu agama di Betawi dan Hadramaut." },
			{ year: "Awal abad ke-20", event: "Mengembangkan Majelis Taklim Kwitang sebagai pusat pengajaran Islam." },
			{ year: "1968", event: "Wafat di Jakarta pada 20 Oktober." },
		],
		imageUrl: "/images/Habib-Ali-Kwitang.jpg",
	},
	{
		id: "kh-noer-ali",
		name: "KH. Noer Ali",
		title: "Singa Karawang-Bekasi",
		lifespan: "1914 - 1992",
		fullBiography:
			"KH. Noer Ali lahir di Ujung Harapan, Bekasi, pada 15 Juli 1914. Ia tumbuh dalam keluarga Muslim dan sejak muda mempelajari Al-Qur'an serta dasar-dasar agama kepada ulama setempat. Setelah itu ia belajar di berbagai pesantren dan melanjutkan pendidikan ke Makkah, tempat ia memperdalam ilmu agama dan berinteraksi dengan pelajar dari Nusantara.\n\nSekembalinya ke tanah air, KH. Noer Ali mendirikan dan mengembangkan lembaga pendidikan Islam di Bekasi. Ia mengajarkan ilmu agama, membina kader, dan membangun kesadaran sosial umat. Ketika pendudukan dan revolusi berlangsung, jaringan santri yang dibinanya menjadi kekuatan penting di wilayah Bekasi dan Karawang.\n\nIa memimpin perjuangan bersenjata dan diplomasi masyarakat melawan penjajahan, termasuk melalui Laskar Hizbullah dan organisasi perjuangan setempat. Setelah masa revolusi, ia melanjutkan pengabdian melalui pendidikan, dakwah, dan pembangunan masyarakat sampai wafat pada 29 Januari 1992.",
		legacyAndImpact:
			"Warisan KH. Noer Ali tampak pada lembaga pendidikan Islam yang ia rintis dan jaringan pesantren yang berkembang di Bekasi serta sekitarnya. Pendidikan baginya merupakan jalan untuk membangun umat yang berilmu, berakhlak, dan mampu mempertahankan kemerdekaan.\n\nPengakuan sebagai Pahlawan Nasional pada 2006 menegaskan perannya dalam sejarah perjuangan Indonesia. Di tingkat lokal, ia dikenang sebagai ulama yang menyatukan dakwah, pendidikan, dan perjuangan rakyat di kawasan penyangga Jakarta.",
		timeline: [
			{ year: "1914", event: "Lahir di Ujung Harapan, Bekasi, pada 15 Juli." },
			{ year: "1930-an", event: "Menuntut ilmu di Makkah dan memperluas jaringan keulamaan." },
			{ year: "1945-1949", event: "Memimpin laskar santri dan perjuangan rakyat di Bekasi-Karawang." },
			{ year: "2006", event: "Dianugerahi gelar Pahlawan Nasional oleh Pemerintah Republik Indonesia." },
		],
		imageUrl: "/images/KH-Noer-Ali.jpg",
	},
	{
		id: "kh-abdullah-syafiie",
		name: "KH. Abdullah Syafi'ie",
		title: "Pendiri Perguruan As-Syafi'iyah",
		lifespan: "1915 - 1985",
		fullBiography:
			"KH. Abdullah Syafi'ie lahir di Jakarta pada 16 Juli 1915 dan tumbuh dalam lingkungan masyarakat Betawi yang kuat tradisi keagamaannya. Ia belajar Al-Qur'an dan ilmu dasar Islam sejak usia muda, lalu memperdalam pengetahuan kepada ulama-ulama Betawi. Pengalaman mengajar di majelis membuatnya memahami kebutuhan pendidikan umat di tengah perkembangan kota.\n\nPada usia muda ia mulai berdakwah melalui pengajian dan ceramah. Gaya bicaranya yang tegas, jelas, dan mudah dipahami membuatnya dikenal sebagai orator ulung. Ia melihat bahwa dakwah perlu ditopang lembaga pendidikan yang teratur agar anak-anak dan generasi muda memperoleh ilmu agama sekaligus bekal kehidupan.\n\nAtas gagasan itu, ia mengembangkan Perguruan As-Syafi'iyah yang mencakup pendidikan, pengajian, dan kegiatan sosial. Ia terus membina lembaga tersebut serta memperluas pengaruh dakwahnya di Jakarta hingga wafat pada 1985.",
		legacyAndImpact:
			"Perguruan As-Syafi'iyah menjadi warisan kelembagaan terbesar KH. Abdullah Syafi'ie. Jaringan pendidikan dan dakwahnya membantu menyediakan akses pembelajaran Islam bagi masyarakat Betawi dan warga Jakarta dari berbagai latar sosial.\n\nPengaruhnya juga terlihat dalam model dakwah yang memadukan ceramah publik, pendidikan formal, pengajian, dan kegiatan sosial. Ia meninggalkan teladan bahwa pembangunan peradaban Islam membutuhkan lembaga yang berkelanjutan, bukan hanya popularitas seorang pendakwah.",
		timeline: [
			{ year: "1915", event: "Lahir di Jakarta pada 16 Juli." },
			{ year: "1930-an", event: "Mulai aktif mengajar Al-Qur'an dan berdakwah di masyarakat Betawi." },
			{ year: "1950-an", event: "Mengembangkan Perguruan As-Syafi'iyah sebagai lembaga pendidikan Islam." },
			{ year: "1985", event: "Wafat setelah mendedikasikan hidupnya untuk pendidikan dan dakwah." },
		],
		imageUrl: "/images/KH-Abdullah-Syafiie.jpg",
	},
];

export default async function TokohDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const tokoh = tokohData.find((item) => item.id === id);

	if (!tokoh) {
		notFound();
	}

	return (
		<main className="bg-slate-50 pb-16 sm:pb-24">
			<section className="relative bg-emerald-900">
				<Link
					href="/tokoh"
					className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-900 shadow-md backdrop-blur transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-50"
				>
					<ArrowLeft size={17} aria-hidden="true" />
					Kembali
				</Link>

				<div className="relative h-40 overflow-hidden bg-emerald-900 sm:h-48">
					<div
						className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full border-32 border-amber-50/5"
						aria-hidden="true"
					/>
					<div
						className="pointer-events-none absolute -bottom-40 -left-24 size-96 rounded-full border-32 border-amber-50/5"
						aria-hidden="true"
					/>
				</div>
			</section>

			<section className="relative z-10 mx-auto -mt-12 max-w-3xl px-5 sm:-mt-16">
				<div className="flex flex-col items-center rounded-xl bg-white p-5 text-center shadow-lg sm:p-6">
					<div className="flex size-24 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-200 text-emerald-700 shadow-lg sm:size-28">
						{tokoh.imageUrl ? (
							<img
								src={tokoh.imageUrl}
								alt={tokoh.name}
								className="h-full w-full object-cover"
							/>
						) : (
							<UserRound size={52} strokeWidth={1.5} aria-hidden="true" />
						)}
					</div>
					<h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
						{tokoh.name}
					</h1>
					<p className="mt-2 font-medium text-emerald-700">{tokoh.title}</p>
					<div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
						<CalendarDays size={17} aria-hidden="true" />
						<span>{tokoh.lifespan}</span>
					</div>
				</div>
			</section>

			<section className="relative z-20 mx-auto mt-10 grid max-w-5xl gap-8 px-5 lg:grid-cols-[7fr_3fr] lg:gap-12">
				<article className="prose max-w-none text-gray-700 leading-relaxed">
					<section>
						<h2 className="mb-4 text-2xl font-semibold text-emerald-800">
							Kisah Perjuangan
						</h2>
						<div className="space-y-4">
							{tokoh.fullBiography.split("\n\n").map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
					</section>

					<section className="mt-10">
						<h2 className="mb-4 text-2xl font-semibold text-emerald-800">
							Warisan &amp; Keteladanan
						</h2>
						<div className="space-y-4">
							{tokoh.legacyAndImpact
								.split("\n\n")
								.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
						</div>
					</section>
				</article>

				<aside className="h-fit rounded-xl bg-amber-50 p-6 shadow-sm">
					<h2 className="text-xl font-semibold text-emerald-800">
						Jejak Langkah
					</h2>
					<div className="mt-6 ml-2 border-l-2 border-emerald-200 pl-6">
						{tokoh.timeline.map((item) => (
							<div key={`${item.year}-${item.event}`} className="relative pb-6 last:pb-0">
								<span className="absolute -left-7.75 top-1 size-3 rounded-full border-2 border-amber-50 bg-emerald-700" />
								<p className="text-sm font-bold text-emerald-800">{item.year}</p>
								<p className="mt-1 text-sm leading-6 text-gray-700">{item.event}</p>
							</div>
						))}
					</div>
					<Link
						href="/kuis"
						className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
					>
						<FileText size={17} aria-hidden="true" />
						Uji Pengetahuan
					</Link>
				</aside>
			</section>
		</main>
	);
}
