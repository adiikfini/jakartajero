"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

const faqData = [
	{
		question: "Apa itu J-HERO?",
		answer:
			"J-HERO adalah singkatan dari Jakarta Heritage Exploration and Rediscovery. Ini adalah platform belajar interaktif untuk mengenalkan sejarah dan budaya Islam di Jakarta kepada anak-anak.",
	},
	{
		question: "Apakah aplikasi ini gratis untuk digunakan?",
		answer:
			"Tentu saja! Saat ini semua fitur, termasuk materi sejarah, budaya, dan kuis edukasi bisa diakses sepenuhnya secara gratis.",
	},
	{
		question: "Untuk usia berapa platform ini dirancang?",
		answer:
			"Materi dan bahasa yang kami gunakan disesuaikan untuk siswa Sekolah Dasar (SD) kelas 3 hingga 6, namun siapa saja yang ingin belajar sangat dipersilakan!",
	},
	{
		question: "Bagaimana cara memainkan kuis edukasi?",
		answer:
			"Kamu cukup masuk ke menu 'Eksplorasi', pilih 'Kuis Edukasi', lalu pilih kuis yang ingin kamu mainkan. Jawab pertanyaannya dan kumpulkan skor sempurnamu!",
	},
	{
		question: "Apakah saya perlu mendaftar/login untuk belajar?",
		answer:
			"Untuk saat ini, kamu bisa membaca semua materi dan bermain kuis tanpa perlu mendaftar akun.",
	},
];

export default function FaqPage() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setOpenIndex((currentIndex) =>
			currentIndex === index ? null : index,
		);
	};

	return (
		<main className="min-h-screen bg-gray-50">
			<Navbar />
			<section className="rounded-b-[3rem] bg-emerald-800 px-6 pb-16 pt-32 text-center">
				<h1 className="text-4xl font-bold text-amber-400">
					Ada yang bisa kami bantu?
				</h1>
				<p className="mx-auto mt-4 max-w-2xl text-emerald-100">
					Temukan jawaban untuk pertanyaan yang paling sering ditanyakan seputar
					J-HERO di bawah ini.
				</p>
			</section>

			<section className="relative z-10 mx-auto -mt-8 max-w-3xl px-6 pb-20">
				{faqData.map((faq, index) => {
					const isOpen = openIndex === index;

					return (
						<div
							key={faq.question}
							className="mb-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
						>
							<button
								type="button"
								className="flex w-full items-center justify-between p-6 text-left text-lg font-bold text-emerald-950 transition-colors hover:bg-emerald-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-emerald-700"
								onClick={() => toggleFaq(index)}
								aria-expanded={isOpen}
								aria-controls={`faq-answer-${index}`}
							>
								<span>{faq.question}</span>
								<span className="ml-4 shrink-0 text-2xl text-emerald-700" aria-hidden="true">
									{isOpen ? "−" : "+"}
								</span>
							</button>
							{isOpen && (
								<div
									id={`faq-answer-${index}`}
									className="border-t border-gray-100 p-6 pt-0 leading-relaxed text-gray-600"
								>
									<p className="pt-6">{faq.answer}</p>
								</div>
							)}
						</div>
					);
				})}
			</section>
		</main>
	);
}
