<script>
	import { fade } from "svelte/transition";

	let selectedImage = null;

	function openLightbox(src) {
		selectedImage = src;
	}

	function closeLightbox() {
		selectedImage = null;
	}
</script>

<main class="flex flex-col flex-1">
	<section
		id="gallery"
		class="relative w-full h-80 flex flex-col"
		style="background-image: url(images/header_non_main.png); background-size: cover; background-position: center;"
	>
		<div class="absolute inset-0 bg-black/50 z-0" />

		<div class="h-[80px] sm:h-[100px] lg:h-[120px]" />

		<div
			class="relative z-10 flex flex-col gap-6 md:gap-8 lg:gap-10 text-center justify-center px-6 pb-24 pt-10"
		>
			<h2 class="font-bigshoulders text-4xl sm:text-5xl md:text-6xl text-white">
				DISCOVER THE GALLERY
			</h2>
		</div>
	</section>

	<section
		class="dark:bg-maroon flex flex-col items-center justify-center text-center"
		id="display"
	>
		<div class="grid grid-cols-3 grid-rows-3 pt-10 gap-2">
			{#each [16, 17, 10, 18, 12, 11, 15, 13, 14] as imgNum}
				<button class="contents" on:click={() => openLightbox(`images/gallery${imgNum}.png`)}>
					<img
						src="images/gallery{imgNum}.png"
						alt="guitar"
						class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75 border-gold border-2 cursor-pointer"
					/>
				</button>
			{/each}
		</div>
	</section>
</main>

{#if selectedImage}
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
		on:click={closeLightbox}
		transition:fade={{ duration: 250 }}
		role="presentation"
	>
		<button
			class="absolute top-8 right-8 text-white text-5xl font-light hover:text-gold transition-colors z-[110]"
			on:click={closeLightbox}
		>
			&times;
		</button>

		<img
			src={selectedImage}
			alt="Expanded view"
			class="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
			on:click|stopPropagation
		/>
	</div>
{/if}
