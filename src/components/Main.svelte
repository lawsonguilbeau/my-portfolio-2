<script>
	import { fade } from "svelte/transition";
	import { enhance } from "$app/forms";

	export let form;

	let selectedImage = null;
	let subscribed = false;

	function openLightbox(src) {
		selectedImage = src;
	}

	function closeLightbox() {
		selectedImage = null;
	}
</script>

<main class="flex flex-col flex-1 overflow-x-hidden">
	<section
		id="introPage"
		class="relative w-full min-h-screen flex flex-col justify-center items-center"
		style="background-image: url(images/Home_Main.webp); background-size: cover; background-position: center;"
	>
		<div class="absolute inset-0 bg-black/60 z-0" />

		<div class="relative z-10 flex flex-col gap-6 md:gap-10 text-center px-6 max-w-4xl">
			<img
				src="images/logo_full_whitegold.png"
				alt="logo white gold"
				class="w-full max-w-[18rem] sm:max-w-[24rem] md:max-w-[32rem] mx-auto h-auto object-contain"
			/>
			<h2 class="font-bigshoulders text-4xl sm:text-5xl md:text-7xl text-white leading-tight">
				BUILD THE GUITAR THAT <br class="hidden sm:block" /> REFLECTS WHO YOU ARE
			</h2>
			<p class="font-bold text-bigshoulders text-gold text-lg md:text-2xl tracking-[0.2em]">
				UNIQUE GUITARS. EXQUISITE TONE
			</p>
		</div>
	</section>

	<section
		class="dark:bg-black py-16 md:py-32 flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-20 px-6"
		id="welcome"
	>
		<img
			src="images/Home_Welcome.png"
			class="w-full max-w-[20rem] md:max-w-md h-auto"
			alt="home welcome"
		/>

		<div class="flex flex-col text-center lg:text-left gap-6 max-w-lg">
			<h1 class="font-bigshoulders text-3xl md:text-4xl text-white">WELCOME TO 27FOUR GUITARS</h1>
			<p class="font-quicksand text-base text-gray-400">
				We offer unique, hand-built guitars for discerning players who seek instruments that truly
				reflect their individuality. By combining premium tonewoods and top-shelf components, I
				ensure exquisite tone and flawless playability.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
				<button
					class="font-semibold text-gold border-2 border-gold bg-transparent hover:bg-gold hover:text-white px-8 py-3 transition-all uppercase tracking-widest"
				>
					Read More
				</button>
				<button
					class="font-semibold text-white border-2 border-gold bg-gold hover:bg-white hover:text-gold px-8 py-3 transition-all uppercase tracking-widest"
				>
					Custom Order
				</button>
			</div>
		</div>
	</section>

	<section id="about" class="dark:bg-black py-20 px-6 border-t border-gray-900">
		<div class="flex flex-col gap-10 items-center max-w-2xl mx-auto">
			<div class="text-center">
				<p class="font-bigshoulders text-gold text-xl md:text-2xl mb-2 italic">
					Be the first to see our newest guitars
				</p>
				<h2
					class="font-bigshoulders text-white text-3xl md:text-4xl border-y-2 border-gray-800 py-3 inline-block uppercase tracking-tighter"
				>
					Join the Newsletter
				</h2>
			</div>

			<form
				method="POST"
				action="/?/subscribe"
				use:enhance={() => {
					return async ({ result, update }) => {
						await update();
						if (result.type === "success") subscribed = true;
					};
				}}
				class="flex flex-col items-center gap-4 w-full"
			>
				{#if subscribed}
					<div
						class="text-white font-bigshoulders text-2xl border border-gold p-6 rounded-md text-center w-full"
						transition:fade
					>
						THANKS FOR SIGNING UP!
					</div>
				{:else}
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						required
						class="w-full px-4 py-4 text-black bg-white rounded-md focus:ring-2 focus:ring-gold outline-none"
					/>
					<input
						type="text"
						name="firstName"
						placeholder="First Name"
						required
						class="w-full px-4 py-4 text-black bg-white rounded-md focus:ring-2 focus:ring-gold outline-none"
					/>
					<button
						type="submit"
						class="w-full py-4 text-white bg-red-900 font-bold uppercase tracking-widest hover:bg-red-800 transition-colors"
					>
						Subscribe
					</button>
				{/if}

				{#if form?.error && !subscribed}
					<p class="text-red-500 font-quicksand text-sm mt-2 italic" transition:fade>
						{form.message}
					</p>
				{/if}
			</form>
		</div>
	</section>

	<section class="dark:bg-black py-20 px-6" id="testimonials">
		<div class="text-center mb-16">
			<p class="font-bigshoulders text-gold text-2xl">Testimonials</p>
			<h2
				class="font-bigshoulders text-white text-3xl border-y-2 border-gray-800 py-2 inline-block"
			>
				WHAT OUR CLIENTS SAY
			</h2>
		</div>

		<div class="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto text-gray-400 px-4">
			<div class="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
				<p class="italic text-lg">
					"It will be passed down for more generations! My Papa and Daddy are proud right now! Thank
					you so much!"
				</p>
				<div class="flex items-center gap-4">
					<img
						src="images/rick.jpg"
						alt="client"
						class="w-16 h-16 rounded-full border-2 border-gold"
					/>
					<p class="text-white font-bold tracking-widest uppercase">Tanna Brandon</p>
				</div>
			</div>
			<div class="flex-1 flex flex-col items-center md:items-end text-center md:text-right gap-4">
				<p class="italic text-lg">
					"I love the amount of detail that went into it. It sounds perfect and looks exactly what I
					asked for!"
				</p>
				<div class="flex items-center gap-4 md:flex-row-reverse">
					<img
						src="images/rick.jpg"
						alt="client"
						class="w-16 h-16 rounded-full border-2 border-gold"
					/>
					<p class="text-white font-bold tracking-widest uppercase">Jackson Whitaker</p>
				</div>
			</div>
		</div>
	</section>

	<section class="dark:bg-black py-20" id="display">
		<div class="text-center mb-12 px-6">
			<p class="font-bigshoulders text-gold text-2xl">Check out my latest work</p>
			<h2
				class="font-bigshoulders text-white text-3xl border-y-2 border-gray-800 py-2 inline-block uppercase"
			>
				Our Guitars
			</h2>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as num}
				<button
					class="relative group overflow-hidden h-96"
					on:click={() => openLightbox(`images/gallery${num}.png`)}
				>
					<img
						src="images/gallery{num}.png"
						alt="guitar gallery {num}"
						class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
					/>
					<div
						class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
					>
						<span class="text-white font-bigshoulders text-2xl border-2 border-white px-4 py-2"
							>VIEW IMAGE</span
						>
					</div>
				</button>
			{/each}
		</div>
	</section>
</main>

{#if selectedImage}
	<div
		class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 p-4 sm:p-10"
		on:click={closeLightbox}
		transition:fade={{ duration: 250 }}
		role="presentation"
	>
		<button
			class="absolute top-6 right-6 text-white text-5xl font-light hover:text-gold z-[1010]"
			on:click={closeLightbox}>&times;</button
		>
		<img
			src={selectedImage}
			alt="Expanded view"
			class="max-w-full max-h-full object-contain"
			on:click|stopPropagation
		/>
	</div>
{/if}
