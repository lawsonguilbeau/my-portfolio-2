<script>
	import { fade } from "svelte/transition";
	import { enhance } from "$app/forms";

	// This captures the response from your +page.server.js via the parent page
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

<main class="flex flex-col flex-1">
	<section
		id="introPage"
		class="relative w-full min-h-screen flex flex-col"
		style="background-image: url(images/Home_Main.webp); background-size: cover; background-position: center;"
	>
		<div class="absolute inset-0 bg-black/50 z-0" />
		<div class="h-[80px] sm:h-[100px] lg:h-[120px]" />
		<div class="relative z-10 flex flex-col gap-6 md:gap-8 lg:gap-10 text-center px-6 pb-24">
			<img
				src="images/logo_full_whitegold.png"
				alt="logo white gold"
				class="h-[16rem] w-[32rem] mx-auto"
			/>
			<h2 class="font-bigshoulders text-4xl sm:text-5xl md:text-6xl text-white">
				Build the guitar that <br /> reflects who you are!
			</h2>
			<p class="font-bold text-bigshoulders text-gold sm:text-lg md:text-xl">
				UNIQUE GUITARS. EXQUISITE TONE
			</p>
		</div>
	</section>

	<section class="dark:bg-black py-20 lg:py-32 flex justify-start gap-5 text-left" id="welcome">
		<img src="images/Home_Welcome.png" class="h-96 w-max pl-32" alt="home welcome" />
		<div class="flex flex-col text-left gap-4 pt-20">
			<h1 class="font-bigshoulders text-2xl pb-2">WELCOME TO 27FOUR GUITARS</h1>
			<p class="font-quicksand text-sm text-gray-400 max-w-md">
				We offer unique, hand built guitars for discerning players who seek instruments that truly
				reflect their individuality. By combining premium tome woods and top-shelf components, I
				ensure exquisite tone and flawless playability.
			</p>
			<div class="flex flex-row gap-4">
				<button
					class="font-semibold text-gold border-2 border-gold bg-transparent hover:bg-gold hover:text-white px-4 py-2 transition-all"
					>READ MORE</button
				>
				<button
					class="font-semibold text-white border-2 border-gold bg-gold hover:bg-white hover:text-gold px-4 py-2 transition-all"
					>CUSTOM ORDER</button
				>
			</div>
		</div>
	</section>

	<section
		id="about"
		class="dark:bg-black py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div class="flex flex-col gap-10 items-center">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-lg sm:text-3xl md:text-2xl">
					Be the first to see our newest guitars
				</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">JOIN THE NEWSLETTER</span>
				</p>
			</div>

			<form
				method="POST"
				action="/?/subscribe"
				use:enhance={() => {
					return async ({ result, update }) => {
						// Resets the form and handles the server data
						await update();
						if (result.type === "success") {
							subscribed = true;
						}
					};
				}}
				class="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto"
			>
				{#if subscribed}
					<div
						class="text-white font-bigshoulders text-2xl border border-gold p-4 rounded-md"
						transition:fade
					>
						THANKS FOR SIGNING UP!
					</div>
				{:else}
					<div class="w-full">
						<label for="email" class="sr-only">Email Address</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Email Address"
							required
							class="w-full px-2 py-3 text-black bg-white rounded-md border-transparent focus:outline-none"
						/>
					</div>
					<div class="w-full">
						<label for="first-name" class="sr-only">First Name</label>
						<input
							type="text"
							id="first-name"
							name="firstName"
							placeholder="First Name"
							required
							class="w-full px-2 py-3 text-black bg-white rounded-md border-transparent focus:outline-none"
						/>
					</div>
					<button
						type="submit"
						class="w-full px-2 py-3 text-white bg-burgandy font-semibold rounded-md hover:bg-red-900 transition-colors"
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

	<section class="dark:bg-black py-20" id="testimonials">
		<div class="flex flex-col gap-10 items-center pb-12">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-lg sm:text-3xl md:text-2xl">Testimonials</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">WHAT OUR CLIENTS SAY</span>
				</p>
			</div>
		</div>
		<div class="flex flex-row gap-12 max-w-5xl mx-auto font-quicksand text-gray-400 text-sm px-6">
			<div class="max-w-md text-left flex flex-col justify-start gap-4 items-start">
				<p>
					It will be passed down for more generations! My Papa and Daddy are proud right now! Thank
					you so much!
				</p>
				<img src="images/rick.jpg" alt="rick" class="w-20 h-20 rounded-full" />
				<p class="text-white font-semibold">TANNA BRANDON</p>
			</div>
			<div class="max-w-md text-right flex flex-col justify-end gap-4 items-end">
				<p>
					I love the amount of detail that went into it. It sounds perfect and looks exactly what I
					asked for!
				</p>
				<img src="images/rick.jpg" alt="rick" class="w-20 h-20 rounded-full" />
				<p class="text-white font-semibold">JACKSON WHITAKER</p>
			</div>
		</div>
	</section>

	<section
		class="dark:bg-black flex flex-col items-center justify-center py-20 text-center"
		id="display"
	>
		<div class="relative z-10 flex flex-col gap-10 items-center text-center px-6 max-w-5xl">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-sm sm:text-3xl md:text-2xl">
					Check out my latest work
				</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">OUR GUITARS</span>
				</p>
			</div>
		</div>
		<div class="grid grid-cols-3 grid-rows-3 pt-10">
			{#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as num}
				<button class="contents" on:click={() => openLightbox(`images/gallery${num}.png`)}>
					<img
						src="images/gallery{num}.png"
						alt="guitar gallery {num}"
						class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75 cursor-pointer"
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
			on:click={closeLightbox}>&times;</button
		>
		<img
			src={selectedImage}
			alt="Expanded view"
			class="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
			on:click|stopPropagation
		/>
	</div>
{/if}
