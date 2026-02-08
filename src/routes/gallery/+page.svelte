<script>
	import { fade } from "svelte/transition";

	let selectedImage = null;

	function openLightbox(src) {
		selectedImage = src;
		// Prevent background scrolling when lightbox is open
		if (typeof document !== "undefined") {
			document.body.style.overflow = "hidden";
		}
	}

	function closeLightbox() {
		selectedImage = null;
		if (typeof document !== "undefined") {
			document.body.style.overflow = "auto";
		}
	}
</script>

<main class="flex flex-col flex-1 overflow-x-hidden">
	<section
		id="gallery"
		class="relative w-full h-64 md:h-80 flex flex-col justify-center items-center"
		style="background-image: url(images/header_non_main.png); background-size: cover; background-position: center;"
	>
		<div class="absolute inset-0 bg-black/50 z-0" />
		<div class="relative z-10 text-center px-6">
			<h2 class="font-bigshoulders text-4xl md:text-6xl text-white tracking-widest uppercase">
				Discover the Gallery
			</h2>
		</div>
	</section>

	<section class="bg-black py-10 px-4 md:px-8" id="display">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
			{#each [16, 17, 10, 18, 12, 11, 15, 13, 14] as imgNum}
				<button
					class="relative group aspect-[4/5] overflow-hidden border-2 border-zinc-800 hover:border-gold transition-colors duration-300"
					on:click={() => openLightbox(`images/gallery${imgNum}.png`)}
				>
					<img
						src="images/gallery{imgNum}.png"
						alt="Custom 27Four Guitar build"
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<div
						class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors md:hidden"
					></div>
				</button>
			{/each}
		</div>
	</section>
</main>

{#if selectedImage}
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
		on:click={closeLightbox}
		transition:fade={{ duration: 200 }}
		role="presentation"
	>
		<button
			class="absolute top-4 right-4 md:top-10 md:right-10 text-white text-4xl md:text-6xl font-light hover:text-gold transition-colors z-[110] p-4"
			on:click={closeLightbox}
			aria-label="Close Gallery"
		>
			&times;
		</button>

		<div class="relative max-w-5xl max-h-full flex items-center justify-center">
			<img
				src={selectedImage}
				alt="Expanded guitar view"
				class="max-w-full max-h-[90vh] object-contain shadow-2xl border border-zinc-700"
				on:click|stopPropagation
			/>
		</div>
	</div>
{/if}
