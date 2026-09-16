"use client";

import { X } from "lucide-react";
import { useState } from "react";

export default function InfographicViewer({ images }: { images: string[] }) {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{images.map((image, index) => (
					<button
						type="button"
						key={image}
						onClick={() => setSelectedImage(image)}
						className="cursor-pointer overflow-hidden rounded-xl border border-gray-200 shadow-lg transition-transform duration-300 hover:scale-105"
						aria-label={`Buka infografis ${index + 1}`}
					>
						<img
							src={image}
							alt={`Infografis ${index + 1}`}
							className="h-auto w-full object-contain"
						/>
					</button>
				))}
			</div>

			{selectedImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
					role="dialog"
					aria-modal="true"
					aria-label="Infografis ukuran besar"
				>
					<button
						type="button"
						onClick={() => setSelectedImage(null)}
						className="absolute right-6 top-6 text-white transition-colors hover:text-gray-300"
						aria-label="Tutup"
					>
						<X size={32} aria-hidden="true" />
					</button>
					<img
						src={selectedImage}
						alt="Infografis ukuran besar"
						className="max-h-[90vh] w-auto max-w-full rounded-xl object-contain"
					/>
				</div>
			)}
		</>
	);
}
