import {
	CalendarDays,
	Gamepad2,
	MapPin,
	Tent,
	Users,
} from "lucide-react";
import Link from "next/link";

const categories = [
	{
		title: "Heritage Explorer",
		href: "/heritage",
		icon: "MapPin",
		description: "Jelajahi masjid dan tempat bersejarah Islam di Jakarta.",
	},
	{
		title: "Budaya Betawi",
		href: "/budaya",
		icon: "Tent",
		description: "Kenali tradisi, kesenian, dan nilai Islami masyarakat Betawi.",
	},
	{
		title: "Tokoh Islam",
		href: "/tokoh",
		icon: "Users",
		description: "Pelajari biografi dan keteladanan ulama penyebar Islam.",
	},
	{
		title: "Game Edukasi",
		href: "/game",
		icon: "Gamepad2",
		description: "Uji pengetahuanmu dengan kuis seru dan kumpulkan poin!",
	},
	{
		title: "Event Center",
		href: "/event",
		icon: "CalendarDays",
		description: "Info pameran, kajian sejarah, dan tur budaya terdekat.",
	},
];

const categoryIcons = {
	MapPin,
	Tent,
	Users,
	Gamepad2,
	CalendarDays,
};

export default function Features() {
	return (
		<section
			id="jelajah"
			className="bg-white px-5 py-16 sm:py-20 lg:px-8 lg:py-24"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-10 max-w-2xl">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
						Temukan Pengalamanmu
					</p>
					<h2 className="text-3xl font-bold text-emerald-900 sm:text-4xl">
						Jelajah Jakarta dari Berbagai Sudut
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6 lg:gap-6">
					{categories.map((item, index) => {
						const Icon = categoryIcons[item.icon as keyof typeof categoryIcons];

						return (
						<Link
							key={item.title}
							href={item.href}
							className={`group rounded-2xl border border-emerald-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg lg:col-span-2 ${
								index === 3 ? "lg:col-start-2" : ""
							}`}
						>
							<Icon className="size-12 text-emerald-700" aria-hidden="true" />
							<h3 className="mt-5 text-lg font-bold leading-tight text-emerald-900">
								{item.title}
							</h3>
							<p className="mt-3 text-sm leading-6 text-slate-600">
								{item.description}
							</p>
						</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}
