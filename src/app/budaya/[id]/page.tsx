import { ArrowLeft, CalendarDays, Check, Play } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const budayaData = [
	{
		id: "ondel-ondel",
		name: "Ondel-Ondel",
		imageUrl: "/images/ondel-ondel.jpg",
		videoUrl: "https://www.youtube.com/results?search_query=video+animasi+ondel+ondel+Betawi",
		category: "Seni Pertunjukan",
		shortDescription:
			"Ikon boneka raksasa khas Betawi yang melambangkan leluhur penjaga kampung.",
		fullDescription:
			"Ondel-ondel adalah boneka berukuran besar yang dimainkan oleh seseorang di dalam kerangkanya dan biasanya tampil berpasangan. Tokoh laki-laki mengenakan wajah merah dengan kumis, sedangkan tokoh perempuan umumnya berwajah putih atau terang dan mengenakan hiasan kepala khas Betawi. Keduanya memakai busana tradisional yang dibuat mencolok agar mudah terlihat dalam arak-arakan.\n\nDalam pertunjukan, ondel-ondel bergerak mengikuti iringan musik seperti tanjidor, kendang pencak, atau gambang kromong. Saat ini ondel-ondel hadir dalam pesta rakyat, penyambutan tamu, festival budaya, dan pertunjukan pariwisata, meski makna ritual serta konteks sosialnya tetap penting untuk dipahami.",
		historyAndMeaning:
			"Tradisi ondel-ondel dikenal dalam kehidupan masyarakat Betawi sejak masa Batavia. Dalam catatan lama, boneka ini pernah disebut barongan dan kerap dikaitkan dengan pertunjukan yang bersifat tolak bala atau penjaga keselamatan kampung. Perubahan nama menjadi ondel-ondel dan bentuk pertunjukannya berkembang mengikuti perubahan masyarakat Betawi.\n\nSepasang ondel-ondel sering dimaknai sebagai lambang keseimbangan, perlindungan, dan keberadaan leluhur yang menjaga komunitas. Wajah yang tegas pada tokoh laki-laki dan riasan pada tokoh perempuan juga menghadirkan gagasan tentang keberanian, kesuburan, serta kesinambungan kehidupan. Makna tersebut tidak selalu seragam karena bergantung pada konteks dan penuturan komunitas pendukungnya.",
		performanceContext:
			"Biasanya ditampilkan dalam arak-arakan khitanan, pernikahan, peresmian, penyambutan tamu, festival budaya, dan perayaan ulang tahun Jakarta.",
		interestingFacts: [
			"Ondel-ondel biasanya dibuat berpasangan sebagai tokoh laki-laki dan perempuan.",
			"Kerangka boneka umumnya dibuat dari bambu agar kuat tetapi tetap dapat dibawa oleh pemain.",
			"Hiasan kepala tokoh perempuan dikenal sebagai kembang kelapa dan menjadi salah satu ciri visualnya.",
		],
	},
	{
		id: "palang-pintu",
		name: "Tradisi Palang Pintu",
		imageUrl: "/images/tradisi-palang-pintu.jpeg",
		videoUrl: "https://www.youtube.com/results?search_query=video+animasi+tradisi+palang+pintu+Betawi",
		category: "Tradisi Pernikahan",
		shortDescription:
			"Tradisi penyambutan tamu dalam pernikahan Betawi yang menggabungkan pantun dan silat.",
		fullDescription:
			"Palang pintu adalah rangkaian adat dalam perkawinan Betawi ketika rombongan pengantin laki-laki hendak memasuki lingkungan keluarga pengantin perempuan. Perwakilan kedua pihak berdialog melalui pantun, saling menguji kemampuan berbicara, lalu dilanjutkan dengan adu silat yang bersifat simbolis. Rombongan laki-laki juga biasanya diminta menunjukkan kesiapan membaca Al-Qur'an.\n\nTradisi ini bukan pertarungan sungguhan, melainkan pertunjukan teratur yang menggabungkan humor, sastra lisan, bela diri, dan nilai keagamaan. Setelah syarat simbolis dipenuhi, pihak keluarga perempuan membuka jalan dan menerima rombongan sebagai bagian dari hubungan kekeluargaan baru.",
		historyAndMeaning:
			"Palang pintu tumbuh dari tata pergaulan dan adat perkawinan masyarakat Betawi yang terbentuk melalui pertemuan berbagai unsur budaya di Batavia. Unsur silat mencerminkan tradisi bela diri yang penting dalam kehidupan masyarakat, sedangkan pantun menjadi cara menyampaikan pesan secara halus, jenaka, dan berirama.\n\nSecara filosofis, palang pintu menggambarkan tanggung jawab calon suami untuk melindungi keluarga, memiliki kecakapan sosial, dan memahami ajaran agama. Penerimaan oleh pihak perempuan menandai bahwa perkawinan bukan sekadar hubungan dua orang, tetapi juga pertemuan dan persetujuan dua keluarga.",
		performanceContext:
			"Umumnya digelar saat rombongan pengantin laki-laki tiba di rumah pengantin perempuan, dan kini juga dipentaskan dalam festival atau penyambutan resmi budaya Betawi.",
		interestingFacts: [
			"Dialog pembuka biasanya disampaikan dalam bentuk pantun berbalas.",
			"Adu silat dalam palang pintu bersifat simbolis dan mengikuti urutan pertunjukan yang disepakati.",
			"Pembacaan Al-Qur'an menegaskan kuatnya nilai Islam dalam adat perkawinan Betawi.",
		],
	},
	{
		id: "lenong",
		name: "Kesenian Lenong",
		imageUrl: "/images/lenong.jpg",
		videoUrl: "https://www.youtube.com/results?search_query=video+animasi+kesenian+lenong+Betawi",
		category: "Teater Tradisional",
		shortDescription:
			"Teater tradisional Betawi yang dibawakan dengan dialek khas dan penuh humor.",
		fullDescription:
			"Lenong adalah teater rakyat Betawi yang menggabungkan dialog, akting, musik, nyanyian, dan humor. Pertunjukannya menggunakan bahasa Betawi yang komunikatif dan sering memberi ruang improvisasi kepada pemain untuk menanggapi penonton atau keadaan sekitar. Cerita dapat mengambil tema kehidupan rakyat, kepahlawanan, percintaan, maupun kisah bangsawan.\n\nSecara umum dikenal lenong denes yang berkisah tentang kerajaan atau bangsawan dan lenong preman yang lebih dekat dengan kehidupan sehari-hari. Pembagian ini membantu menjelaskan ragam cerita lenong, meski dalam praktiknya kelompok pertunjukan dapat mengembangkan bentuk dan repertoar yang beragam.",
		historyAndMeaning:
			"Lenong berkembang di lingkungan masyarakat Betawi pada akhir abad ke-19 hingga awal abad ke-20, dalam suasana kota Batavia yang mempertemukan banyak kelompok etnis dan tradisi pertunjukan. Kesenian ini tumbuh dari hiburan panggung rakyat dan dipengaruhi berbagai unsur musik serta teater yang beredar di Batavia.\n\nHumor dalam lenong tidak hanya berfungsi sebagai hiburan, tetapi juga sebagai cara menyampaikan kritik sosial dan nasihat tanpa bahasa yang menggurui. Tokoh rakyat, konflik antara yang kuat dan lemah, serta penggunaan dialek Betawi membuat lenong menjadi ruang untuk merawat identitas, ingatan kolektif, dan kecerdasan lisan masyarakat.",
		performanceContext:
			"Dulu dipentaskan di panggung atau halaman kampung untuk hajatan dan hiburan warga; kini juga hadir di gedung pertunjukan, sekolah, festival, dan acara pelestarian budaya.",
		interestingFacts: [
			"Pemain lenong sering melakukan improvisasi berdasarkan respons penonton.",
			"Lenong preman umumnya mengangkat kehidupan rakyat biasa, sementara lenong denes memakai latar bangsawan.",
			"Iringan musiknya dapat melibatkan gambang kromong, kendang, gong, dan instrumen pendukung lainnya.",
		],
	},
	{
		id: "tanjidor",
		name: "Musik Tanjidor",
		imageUrl: "/images/tanjidor.jpg",
		videoUrl: "https://www.youtube.com/results?search_query=video+animasi+musik+tanjidor+Betawi",
		category: "Musik Tradisional",
		shortDescription:
			"Orkes kesenian Betawi yang sangat dipengaruhi oleh musik Eropa sejak abad ke-19.",
		fullDescription:
			"Tanjidor adalah orkes tradisional yang menonjolkan alat musik tiup dan perkusi, seperti trompet, trombon, klarinet, saksofon, drum, dan simbal. Susunan instrumennya menghasilkan bunyi yang kuat sehingga cocok untuk mengiringi arak-arakan dan pertunjukan di ruang terbuka. Repertoarnya dapat mencakup lagu lokal maupun lagu yang berasal dari tradisi musik Barat.\n\nKelompok tanjidor biasanya terdiri dari para pemain yang belajar secara turun-temurun atau melalui komunitas. Walaupun bentuk alat musiknya mendapat pengaruh Eropa, cara memainkan, fungsi sosial, dan lingkungan pertunjukannya berkembang menjadi bagian dari kebudayaan Betawi.",
		historyAndMeaning:
			"Asal-usul tanjidor sering dihubungkan dengan praktik musik tiup pada masa kolonial, termasuk kelompok musik militer dan hiburan di perkebunan atau kediaman pejabat. Setelah perubahan sosial pada akhir masa kolonial, alat-alat musik tersebut digunakan dan diolah oleh masyarakat lokal untuk kebutuhan pertunjukan rakyat.\n\nTanjidor menunjukkan proses percampuran budaya yang khas di Batavia: unsur Eropa diterima, diubah, dan diberi fungsi baru dalam kehidupan masyarakat Betawi. Kehadirannya dalam arak-arakan menciptakan suasana meriah, memperkuat kebersamaan warga, dan menandai peristiwa penting dalam komunitas.",
		performanceContext:
			"Biasanya dimainkan dalam arak-arakan pernikahan, khitanan, pesta rakyat, penyambutan tamu, festival budaya, serta perayaan di lingkungan kampung.",
		interestingFacts: [
			"Nama tanjidor sering dikaitkan dengan istilah Portugis tangedor yang merujuk pada pemain atau musik bertali, meski sejarah istilahnya memiliki beberapa penjelasan.",
			"Sebagian besar instrumen tanjidor berasal dari keluarga alat musik tiup logam dan kayu.",
			"Pertunjukan tanjidor sangat efektif untuk ruang terbuka karena karakter suaranya yang lantang.",
		],
	},
	{
		id: "silat-beksi",
		name: "Silat Beksi",
		imageUrl: "",
		videoUrl: "https://www.youtube.com/results?search_query=video+animasi+silat+beksi+Betawi",
		category: "Seni Bela Diri",
		shortDescription:
			"Seni bela diri khas Betawi yang berkembang di kawasan pesisir dan pinggiran Jakarta.",
		fullDescription:
			"Beksi adalah aliran silat yang berkembang di lingkungan masyarakat Betawi, terutama di wilayah Jakarta Barat, Tangerang, dan kawasan sekitarnya. Ciri geraknya dikenal dekat dengan jarak tubuh, mengutamakan kecepatan, sikap rendah, serangan tangan, tangkisan, dan penguasaan keseimbangan. Nama serta variasi tekniknya dapat berbeda menurut perguruan dan jalur pewarisan.\n\nLatihan beksi tidak hanya mengajarkan kemampuan membela diri, tetapi juga disiplin, pengendalian emosi, penghormatan kepada guru, dan tanggung jawab kepada sesama. Dalam banyak perguruan, latihan fisik berjalan berdampingan dengan pembinaan akhlak dan penguatan nilai keagamaan.",
		historyAndMeaning:
			"Sejarah beksi diwariskan melalui guru, murid, dan cerita komunitas, sehingga terdapat beberapa versi mengenai tokoh pendiri serta asal istilahnya. Aliran ini tumbuh dalam lingkungan kampung dan pesisir yang membutuhkan keterampilan bela diri untuk menjaga diri, keluarga, serta lingkungan. Hubungannya dengan tradisi silat Tionghoa dan aliran lokal juga kerap dibahas dalam sejarah perkembangannya.\n\nMakna utama beksi terletak pada keseimbangan antara keberanian dan pengendalian diri. Seorang pesilat tidak hanya dituntut kuat secara fisik, tetapi juga mampu menahan diri, menghormati orang lain, dan menggunakan ilmunya untuk perlindungan. Nilai-nilai tersebut menjadikan beksi sebagai pendidikan karakter sekaligus warisan gerak Betawi.",
		performanceContext:
			"Diajarkan di padepokan, sanggar, dan lingkungan kampung; ditampilkan dalam festival budaya, pertunjukan adat, penyambutan, serta pembukaan acara Betawi.",
		interestingFacts: [
			"Gerak beksi banyak menekankan pertarungan jarak dekat dan posisi tubuh yang rendah.",
			"Pewarisan ilmu dilakukan melalui hubungan guru dan murid dalam perguruan.",
			"Pertunjukan silat sering dipadukan dengan palang pintu dalam rangkaian perkawinan Betawi.",
		],
	},
	{
		id: "tari-sirih-kuning",
		name: "Tari Sirih Kuning",
		imageUrl: "/images/tari-sirih-kuning.jpg",
		videoUrl: "https://www.youtube.com/results?search_query=video+animasi+tari+sirih+kuning+Betawi",
		category: "Seni Tari",
		shortDescription:
			"Tarian pergaulan yang sering ditampilkan untuk menyambut tamu kehormatan.",
		fullDescription:
			"Tari Sirih Kuning adalah tari Betawi yang berkembang sebagai tari pergaulan dan tari penyambutan. Geraknya lincah dan ceria, dengan penari mengenakan busana Betawi serta membawa suasana ramah kepada orang yang disambut. Dalam bentuk pertunjukan modern, tari ini sering dibawakan oleh penari perempuan secara berkelompok, meskipun penyajiannya dapat menyesuaikan kebutuhan acara.\n\nNama sirih kuning merujuk pada simbol sirih dalam adat Melayu dan Betawi, yang berkaitan dengan penghormatan, persahabatan, dan penerimaan tamu. Koreografi yang dikenal sekarang juga dipengaruhi perkembangan tari Betawi panggung, sehingga bentuknya dapat berbeda antara satu sanggar dan sanggar lainnya.",
		historyAndMeaning:
			"Tari ini berhubungan dengan tradisi penyambutan Betawi yang menempatkan sirih sebagai bagian penting dari tata krama menerima tamu. Penggunaan sirih tidak hanya bersifat dekoratif, tetapi menjadi tanda bahwa tamu dihormati dan diterima sebagai bagian dari hubungan sosial. Perkembangan tari panggung kemudian menyusun simbol tersebut menjadi rangkaian gerak yang lebih teratur.\n\nSecara filosofis, Tari Sirih Kuning menyampaikan keramahan, keterbukaan, dan penghormatan. Warna kuning dalam busana atau properti kerap memberi kesan kemuliaan dan keceriaan, sementara gerak berkelompok menegaskan nilai kebersamaan yang menjadi bagian penting dari kehidupan masyarakat Betawi.",
		performanceContext:
			"Biasanya ditampilkan untuk menyambut tamu kehormatan, membuka acara resmi, menyemarakkan pernikahan, serta menjadi materi pertunjukan sanggar dan festival budaya.",
		interestingFacts: [
			"Sirih merupakan simbol penghormatan dan penerimaan tamu dalam banyak tradisi Melayu dan Nusantara.",
			"Tari Sirih Kuning sering dipentaskan sebagai tari penyambutan di acara pemerintahan dan kebudayaan.",
			"Ragam gerak dan jumlah penari dapat berbeda sesuai koreografi sanggar atau kebutuhan acara.",
		],
	},
];

export default async function BudayaDetail({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const budaya = budayaData.find((item) => item.id === id);

	if (!budaya) {
		notFound();
	}

	return (
		<main className="bg-slate-50 pb-16 sm:pb-24">
			<section className="relative z-0">
				<Link
					href="/budaya"
					className="absolute left-5 top-5 z-20 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-emerald-900 shadow-md backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
				>
					<ArrowLeft size={17} aria-hidden="true" />
					Kembali
				</Link>

				{budaya.imageUrl && (
					<img
						src={budaya.imageUrl}
						alt={budaya.name}
						className="relative z-0 mx-auto h-64 w-full max-w-[1600px] object-cover object-center md:h-96"
					/>
				)}
			</section>

			<section className="relative z-10 mx-auto -mt-16 max-w-5xl px-5 lg:-mt-24">
				<div className="-translate-y-1/2 rounded-xl bg-white p-6 shadow-lg sm:p-8">
					<div className="flex flex-wrap items-start justify-between gap-4">
						<div>
							<h1 className="text-3xl font-bold text-emerald-900">
								{budaya.name}
							</h1>
							<span className="mt-3 inline-flex rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-800">
								{budaya.category}
							</span>
						</div>

						<div className="flex max-w-xl items-start gap-2 text-sm leading-6 text-gray-500">
							<CalendarDays
								className="mt-1 shrink-0 text-emerald-700"
								size={18}
								aria-hidden="true"
							/>
							<span>{budaya.performanceContext}</span>
						</div>
					</div>
				</div>
			</section>

			<section className="mx-auto mt-8 grid max-w-5xl gap-8 px-5 lg:grid-cols-[7fr_3fr] lg:gap-12">
				<article className="prose max-w-none text-gray-700 leading-relaxed">
					<section>
						<h2 className="mb-4 text-2xl font-semibold text-emerald-800">
							Mengenal Budaya
						</h2>
						<div className="space-y-4">
							{budaya.fullDescription.split("\n\n").map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>
					</section>

					<section className="mt-10">
						<h2 className="mb-4 text-2xl font-semibold text-emerald-800">
							Sejarah &amp; Makna Filosofis
						</h2>
						<div className="space-y-4">
							{budaya.historyAndMeaning
								.split("\n\n")
								.map((paragraph) => (
									<p key={paragraph}>{paragraph}</p>
								))}
						</div>
					</section>
				</article>

				<aside className="h-fit rounded-xl bg-amber-50 p-6">
					<h2 className="text-xl font-semibold text-emerald-800">
						Fakta Menarik
					</h2>
					<ul className="mt-5 space-y-4 text-sm leading-6 text-gray-700">
						{budaya.interestingFacts.map((fact) => (
							<li key={fact} className="flex items-start gap-3">
								<Check
									className="mt-1 shrink-0 text-emerald-700"
									size={17}
									strokeWidth={2.5}
									aria-hidden="true"
								/>
								<span>{fact}</span>
							</li>
						))}
					</ul>
					<a
						href={budaya.videoUrl}
						target="_blank"
						rel="noreferrer"
						className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
					>
						<Play size={17} fill="currentColor" aria-hidden="true" />
						Tonton Video Animasi
					</a>
				</aside>
			</section>
		</main>
	);
}
