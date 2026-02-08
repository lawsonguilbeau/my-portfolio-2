<script>
	import { enhance } from "$app/forms";
	import { fade } from "svelte/transition";

	// Captures the server response
	export let form;

	// Track success state locally to show the "Thank You" message
	let subscribed = false;
</script>

<main class="flex flex-col flex-1 overflow-x-hidden">
	<section
		id="about-hero"
		class="relative w-full h-64 md:h-80 flex flex-col justify-center items-center"
		style="background-image: url(images/header_non_main.png); background-size: cover; background-position: center;"
	>
		<div class="absolute inset-0 bg-black/50 z-0" />
		<div class="relative z-10 text-center px-6">
			<h2 class="font-bigshoulders text-5xl md:text-7xl text-white tracking-widest uppercase">
				ABOUT
			</h2>
		</div>
	</section>

	<section
		class="dark:bg-black py-16 md:py-32 flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-16 px-6"
		id="story"
	>
		<img
			src="images/Home_Welcome.png"
			class="w-full max-w-[18rem] md:max-w-md h-auto"
			alt="home welcome"
		/>

		<div class="flex flex-col text-center lg:text-left gap-6 max-w-lg">
			<h1 class="font-bigshoulders text-3xl md:text-4xl text-gold leading-tight">
				Crafted for the Individual. <br class="hidden md:block" /> Built to Inspire.
			</h1>
			<div class="space-y-4 font-quicksand text-base text-gray-400">
				<p>
					At 27Four Guitars, every guitar begins with a story — including ours. The first guitar I
					ever built and sold wasn’t for cash, but on trade for a summer lawn care. That humble
					beginning sparked a passion for building instruments that are as unique as the players who
					pick them up.
				</p>
				<p>
					Since then, every guitar I’ve built carries that same spirit — made by hand, one at a
					time, with an unwavering commitment to premium tonewoods, top-shelf components, and
					flawless playability.
				</p>
				<p class="text-white font-medium pt-2">
					Nick Guilbeau <br />
					<span class="text-gold text-sm uppercase tracking-widest">Founder, Builder, Player</span>
				</p>
			</div>

			<div class="flex justify-center lg:justify-start">
				<a
					href="/custom-guitars"
					class="font-semibold font-bigshoulders text-white hover:text-gold border-2 border-gold bg-gold hover:bg-white px-8 py-3 transition-all tracking-widest"
				>
					CUSTOM GUITARS
				</a>
			</div>
		</div>
	</section>

	<section id="newsletter" class="dark:bg-black py-20 px-6 border-y border-gray-900">
		<div class="flex flex-col gap-10 items-center max-w-2xl mx-auto">
			<div class="text-center">
				<p class="font-bigshoulders text-gold text-xl md:text-2xl mb-2">
					Be the first to see our new guitars
				</p>
				<h2
					class="font-bigshoulders text-white text-3xl md:text-4xl border-y-2 border-gray-700 py-2 inline-block"
				>
					JOIN THE NEWSLETTER
				</h2>
			</div>

			<form
				method="POST"
				action="?/subscribe"
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
						THANKS FOR JOINING THE SQUAD!
					</div>
				{:else}
					<input
						type="email"
						name="email"
						required
						placeholder="Email Address"
						class="w-full px-4 py-4 text-black bg-white rounded-md focus:outline-none"
					/>
					<input
						type="text"
						name="firstName"
						required
						placeholder="First Name"
						class="w-full px-4 py-4 text-black bg-white rounded-md focus:outline-none"
					/>
					<button
						type="submit"
						class="w-full py-4 text-white bg-red-900 font-bold uppercase tracking-widest hover:bg-red-800 transition-colors"
					>
						Subscribe
					</button>
				{/if}

				{#if form?.error && !subscribed}
					<p class="text-red-500 font-quicksand text-sm mt-2">{form.message}</p>
				{/if}
			</form>
		</div>
	</section>

	<section
		id="customGuitars"
		class="relative w-full min-h-[500px] flex flex-col items-center justify-center py-24 px-6"
	>
		<div
			class="absolute inset-0 bg-cover bg-center"
			style="background-image: url(images/guitar_horizontal.png);"
		></div>
		<div class="absolute inset-0 bg-black/85"></div>

		<div class="relative z-10 flex flex-col gap-10 items-center text-center max-w-4xl">
			<div class="space-y-4">
				<p class="font-bigshoulders text-gold text-xl md:text-3xl tracking-tight">
					Get in touch with us to discuss your one of a kind guitar
				</p>
				<h2
					class="font-bigshoulders text-white text-4xl md:text-5xl border-y-2 border-gray-700 py-3 inline-block"
				>
					CUSTOM GUITARS
				</h2>
			</div>

			<p class="text-white font-quicksand text-lg max-w-2xl">
				All our guitars are built by hand in my barn located in <br class="hidden md:block" /> Leesville,
				South Carolina.
			</p>

			<a
				href="/contact"
				class="font-bigshoulders font-semibold text-white hover:text-red-900 border border-red-900 bg-red-900 hover:bg-white px-10 py-4 transition-all text-xl tracking-widest"
			>
				CUSTOM ORDER
			</a>

			<div
				class="flex flex-col md:flex-row items-center gap-2 font-bigshoulders text-xl md:text-2xl"
			>
				<span class="text-gold uppercase tracking-widest">Email Us:</span>
				<a
					href="mailto:Nick@27FOURGUITARS.COM"
					class="text-white hover:text-gold transition-colors break-all"
				>
					Nick@27FOURGUITARS.COM
				</a>
			</div>
		</div>
	</section>
</main>
