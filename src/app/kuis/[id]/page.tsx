"use client";

import { use, useState } from "react";
import { Star } from "lucide-react";
import Link from "next/link";

const quizData = {
	"masjid-istiqlal": [
		{
			question: "Di kota mana Masjid Istiqlal berada?",
			options: ["Jakarta", "Bandung", "Surabaya", "Yogyakarta"],
			correctAnswer: "Jakarta",
		},
		{
			question: "Apa arti kata Istiqlal?",
			options: ["Kemerdekaan", "Persahabatan", "Perjalanan", "Kemenangan"],
			correctAnswer: "Kemerdekaan",
		},
		{
			question: "Berapa diameter kubah utama Masjid Istiqlal?",
			options: ["25 meter", "35 meter", "45 meter", "55 meter"],
			correctAnswer: "45 meter",
		},
        {
            question: "Sebagai lambang kerukunan beragama di Indonesia, pintu masuk Masjid Istiqlal sengaja dibangun berhadapan dengan sebuah gereja besar lho! Apa nama gereja tersebut?",
            options: ["Gereja Katedral", "Gereja Immanuel", "Gereja Tugu", "Gereja Blenduk"],
            correctAnswer: "Gereja Katedral",
        },
        {
            question: "Tahukah kamu? Arsitek hebat yang memenangkan perlombaan menggambar desain Masjid Istiqlal bernama Frederich Silaban. Apa fakta unik dari arsitek ini?",
            options: ["Beliau beragama Kristen Protestan", "Beliau berasal dari Arab Saudi", "Beliau adalah seorang Presiden", "Beliau baru berumur 10 tahun"],
            correctAnswer: "Beliau beragama Kristen Protestan",
        }

	],
	"pahlawan-betawi": [
		{
			question: "Siapa panglima yang menaklukkan Sunda Kelapa pada tahun 1527?",
			options: ["Pangeran Fatahillah", "KH. Noer Ali", "Guru Mansur", "Habib Ali Kwitang"],
			correctAnswer: "Pangeran Fatahillah",
		},
		{
			question: "Nama baru apa yang diberikan Fatahillah untuk Sunda Kelapa?",
			options: ["Jayakarta", "Batavia", "Kota Betawi", "Mataram"],
			correctAnswer: "Jayakarta",
		},
		{
			question: "KH. Noer Ali dikenal sebagai ulama dan pejuang dari wilayah mana?",
			options: ["Bekasi dan Karawang", "Bali dan Lombok", "Medan dan Aceh", "Makassar dan Gowa"],
			correctAnswer: "Bekasi dan Karawang",
		},
		{
			question: "Apa julukan terkenal KH. Noer Ali?",
			options: ["Singa Karawang-Bekasi", "Macan Sunda Kelapa", "Panglima Laut Jawa", "Raja Tanah Betawi"],
			correctAnswer: "Singa Karawang-Bekasi",
		},
		{
			question: "Siapa ulama yang mendirikan Perguruan As-Syafi'iyah?",
			options: ["KH. Abdullah Syafi'ie", "Pangeran Fatahillah", "Habib Husein Alaydrus", "KH. Noer Ali"],
			correctAnswer: "KH. Abdullah Syafi'ie",
		},
		{
			question: "Di kawasan mana Guru Mansur berdakwah dan berjuang?",
			options: ["Jembatan Lima", "Kwitang", "Luar Batang", "Sunda Kelapa"],
			correctAnswer: "Jembatan Lima",
		},
		{
			question: "Sikap apa yang dapat kita teladani dari para pahlawan Islam Betawi?",
			options: ["Berani dan cinta tanah air", "Mudah menyerah", "Suka bertengkar", "Tidak peduli sesama"],
			correctAnswer: "Berani dan cinta tanah air",
		},
	],
	"budaya-islami": [
		{
			question: "Apa nama tradisi Betawi yang menggabungkan pantun dan silat dalam pernikahan?",
			options: ["Palang Pintu", "Tanjidor", "Lenong", "Sirih Kuning"],
			correctAnswer: "Palang Pintu",
		},
		{
			question: "Apa yang biasanya dilakukan dalam pertunjukan Palang Pintu?",
			options: ["Berbalas pantun dan silat", "Membuat perahu", "Menanam padi", "Menyanyi sendirian"],
			correctAnswer: "Berbalas pantun dan silat",
		},
		{
			question: "Ondel-ondel biasanya tampil dalam bentuk apa?",
			options: ["Sepasang laki-laki dan perempuan", "Tiga anak kecil", "Satu penari tanpa musik", "Sekelompok pemain wayang"],
			correctAnswer: "Sepasang laki-laki dan perempuan",
		},
		{
			question: "Apa makna awal ondel-ondel bagi masyarakat Betawi?",
			options: ["Penjaga kampung dan penolak bala", "Alat untuk memasak", "Tanda mulai panen", "Hiasan rumah biasa"],
			correctAnswer: "Penjaga kampung dan penolak bala",
		},
		{
			question: "Lenong adalah kesenian Betawi berupa apa?",
			options: ["Teater tradisional", "Permainan layang-layang", "Tarian perang", "Kerajinan tangan"],
			correctAnswer: "Teater tradisional",
		},
		{
			question: "Alat musik Tanjidor banyak menggunakan alat musik jenis apa?",
			options: ["Tiup dan perkusi", "Petik saja", "Gong saja", "Piano dan biola saja"],
			correctAnswer: "Tiup dan perkusi",
		},
		{
			question: "Tari Sirih Kuning biasanya dipentaskan untuk apa?",
			options: ["Menyambut tamu", "Mengiringi lomba lari", "Memanggil hujan", "Menjaga pasar"],
			correctAnswer: "Menyambut tamu",
		},
	],
	"jejak-ulama": [
		{
			question: "Siapa ulama asal Hadramaut yang makamnya berada di Luar Batang?",
			options: ["Habib Husein bin Abubakar Alaydrus", "KH. Mohammad Mansur", "KH. Noer Ali", "Habib Ali Kwitang"],
			correctAnswer: "Habib Husein bin Abubakar Alaydrus",
		},
		{
			question: "Di kawasan mana Masjid dan makam Habib Husein berada?",
			options: ["Luar Batang", "Tanah Abang", "Kwitang", "Jembatan Lima"],
			correctAnswer: "Luar Batang",
		},
		{
			question: "Apa ilmu yang sangat dikuasai oleh Guru Mansur?",
			options: ["Ilmu falak", "Ilmu pelayaran", "Ilmu pertanian", "Ilmu pertukangan"],
			correctAnswer: "Ilmu falak",
		},
		{
			question: "Ilmu falak membantu umat Islam mempelajari hal-hal tentang apa?",
			options: ["Benda langit dan waktu ibadah", "Cara membuat rumah", "Cara memasak", "Jenis-jenis tanaman"],
			correctAnswer: "Benda langit dan waktu ibadah",
		},
		{
			question: "Majelis taklim terkenal yang dirintis Habib Ali bin Abdurrahman Alhabsyi berada di mana?",
			options: ["Kwitang", "Luar Batang", "Koja", "Jatinegara"],
			correctAnswer: "Kwitang",
		},
		{
			question: "Apa salah satu pelajaran penting dari majelis Habib Ali Kwitang?",
			options: ["Ilmu agama dan akhlak", "Cara berdagang saja", "Teknik bermain bola", "Membuat kapal"],
			correctAnswer: "Ilmu agama dan akhlak",
		},
		{
			question: "KH. Noer Ali dikenal memimpin perjuangan di sekitar wilayah mana?",
			options: ["Bekasi dan Karawang", "Bali dan Madura", "Padang dan Medan", "Surabaya dan Malang"],
			correctAnswer: "Bekasi dan Karawang",
		},
		{
			question: "Organisasi perjuangan apa yang pernah berkaitan dengan perjuangan KH. Noer Ali?",
			options: ["Laskar Hizbullah", "Budi Utomo", "Sarekat Dagang", "Jong Java"],
			correctAnswer: "Laskar Hizbullah",
		},
		{
			question: "Siapa pendiri Perguruan As-Syafi'iyah?",
			options: ["KH. Abdullah Syafi'ie", "Habib Husein Luar Batang", "Pangeran Fatahillah", "KH. Mohammad Mansur"],
			correctAnswer: "KH. Abdullah Syafi'ie",
		},
		{
			question: "Apa teladan utama para ulama tersebut bagi pelajar?",
			options: ["Rajin belajar dan bermanfaat bagi sesama", "Mengejar pujian", "Takut mencoba hal baru", "Menjauhi masyarakat"],
			correctAnswer: "Rajin belajar dan bermanfaat bagi sesama",
		},
	],
};

export default function QuizGameplay({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = use(params);
	const questions = quizData[id as keyof typeof quizData];
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);

	if (!questions) {
		return <div>Kuis tidak ditemukan</div>;
	}

	const handleAnswer = (selectedOption: string) => {
		const question = questions[currentQuestion];

		if (selectedOption === question.correctAnswer) {
			setScore((currentScore) => currentScore + 10);
		}

		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion((questionIndex) => questionIndex + 1);
		} else {
			setShowResult(true);
		}
	};

	const resetQuiz = () => {
		setCurrentQuestion(0);
		setScore(0);
		setShowResult(false);
	};

	if (showResult) {
		return (
			<main className="flex min-h-screen items-center justify-center bg-emerald-50 p-6">
				<section className="w-full max-w-xl rounded-3xl border-4 border-amber-400 bg-white p-10 text-center shadow-xl">
					<Star
						className="mx-auto size-20 text-amber-400"
						fill="currentColor"
						aria-hidden="true"
					/>
					<h1 className="mt-5 text-3xl font-extrabold text-emerald-800">
						Yeay! Kuis Selesai!
					</h1>
					<p className="my-6 text-6xl font-black text-amber-500">
						{score}
					</p>
					<p className="text-lg font-semibold text-emerald-800">
						{score === questions.length * 10
							? "Kamu J-HERO Sejati!"
							: "Bagus sekali! Yuk coba lagi supaya dapat nilai sempurna!"}
					</p>
					<div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
						<button
							type="button"
							onClick={resetQuiz}
							className="rounded-full bg-emerald-100 px-6 py-3 font-bold text-emerald-800 transition-colors hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
						>
							Ulangi Kuis
						</button>
						<Link
							href="/kuis"
							className="rounded-full bg-amber-400 px-6 py-3 font-bold text-emerald-900 shadow-md transition-colors hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
						>
							Pilih Kuis Lain
						</Link>
					</div>
				</section>
			</main>
		);
	}

	const question = questions[currentQuestion];

	return (
		<main className="min-h-screen bg-emerald-50 p-6">
			<div className="mx-auto max-w-3xl">
				<header className="flex items-center justify-between gap-4">
					<Link
						href="/kuis"
						className="font-semibold text-emerald-800 transition-colors hover:text-emerald-950"
					>
						Keluar
					</Link>
					<span className="rounded-full bg-amber-200 px-4 py-2 text-sm font-bold text-amber-800">
						Soal {currentQuestion + 1} dari {questions.length}
					</span>
				</header>

				<section className="mt-8 rounded-3xl bg-white p-8 text-center shadow-xl">
					<h1 className="mb-8 text-2xl font-bold text-emerald-900">
						{question.question}
					</h1>
					<div className="grid gap-4 sm:grid-cols-2">
						{question.options.map((option) => (
							<button
								key={option}
								type="button"
								onClick={() => handleAnswer(option)}
								className="rounded-2xl border-b-4 border-amber-300 bg-amber-100 p-4 text-lg font-semibold text-emerald-900 transition-all hover:-translate-y-1 hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
							>
								{option}
							</button>
						))}
					</div>
				</section>
			</div>
		</main>
	);
}
