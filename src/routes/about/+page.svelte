<script>
	import { enhance } from "$app/forms";

	// Captures the server response
	export let form;

	// Track success state locally to show the "Thank You" message
	let subscribed = false;
</script>

<main class="flex flex-col flex-1">
	<section
		id="about-hero"
		class="relative w-full h-80 flex flex-col"
		style="background-image: url(images/header_non_main.png); background-size: cover; background-position: center;"
	>
		<div class="absolute inset-0 bg-black/50 z-0" />
		<div class="h-[80px] sm:h-[100px] lg:h-[120px]" />
		<div
			class="relative z-10 flex flex-col gap-6 md:gap-8 lg:gap-10 text-center justify-center px-6 pb-24 pt-10"
		>
			<h2 class="font-bigshoulders text-4xl sm:text-5xl md:text-6xl text-white">ABOUT</h2>
		</div>
	</section>

	<section
		class="dark:bg-black py-20 lg:py-32 flex justify-start items-center gap-5 text-left"
		id="story"
	>
		<img src="images/Home_Welcome.png" class="h-96 w-max px-16" alt="home welcome" />
		<div class="flex flex-col text-left gap-4">
			<h1 class="font-bigshoulders text-2xl pb-2 text-gold">
				Crafted for the Individual. Built to Inspire.
			</h1>
			<p class="font-quicksand text-sm text-gray-400 max-w-md">
				At 27Four Guitars, every guitar begins with a story — including ours. The first guitar I
				ever built and sold wasn’t for cash, but on trade for a summer lawn care. That humble
				beginning sparked a passion for building instruments that are as unique as the players who
				pick them up.
			</p>
			<p class="font-quicksand text-sm text-gray-400 max-w-md">
				Since then, every guitar I’ve built carries that same spirit — made by hand, one at a time,
				with an unwavering commitment to premium tonewoods, top-shelf components, and flawless
				playability.
			</p>
			<p class="font-quicksand text-sm text-gray-400 max-w-md">
				Nick Guilbeau <br />
				Founder, Builder, Player
			</p>
			<div class="flex flex-row gap-4">
				<a
					href="/custom-guitars"
					class="font-semibold font-bigshoulders text-white hover:text-gold border-2 border-gold bg-gold hover:bg-white px-4 py-2"
					>CUSTOM GUITARS</a
				>
			</div>
		</div>
	</section>

	<section
		id="newsletter"
		class="dark:bg-black py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div class="flex flex-col gap-10 items-center">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-lg sm:text-3xl md:text-2xl">
					Be the first to see our new guitars
				</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">JOIN THE NEWSLETTER</span>
				</p>
			</div>

			<form
				method="POST"
				action="?/subscribe"
				use:enhance={() => {
					return async ({ result, update }) => {
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
						class="text-white font-bigshoulders text-2xl border border-gold p-4 rounded-md text-center"
					>
						THANKS FOR JOINING THE SQUAD!
					</div>
				{:else}
					<div class="w-full">
						<label for="email" class="sr-only">Email Address</label>
						<input
							type="email"
							id="email"
							name="email"
							required
							placeholder="Email Address"
							class="w-full px-2 py-3 text-black bg-white rounded-md border-transparent focus:outline-none"
						/>
					</div>
					<div class="w-full">
						<label for="first-name" class="sr-only">First Name</label>
						<input
							type="text"
							id="first-name"
							name="firstName"
							required
							placeholder="First Name"
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

				{#if form?.error}
					<p class="text-red-500 font-quicksand text-sm mt-2">{form.message}</p>
				{/if}
			</form>
		</div>
	</section>

	<section
		class="relative w-full min-h-96 flex flex-col items-center justify-center py-20"
		id="customGuitars"
	>
		<div
			class="absolute inset-0 bg-cover bg-center"
			style="background-image: url(images/guitar_horizontal.png);"
		></div>
		<div class="absolute inset-0 bg-black/80"></div>
		<div class="relative z-10 flex flex-col gap-10 items-center text-center px-6 max-w-5xl">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-lg sm:text-3xl md:text-2xl">
					Get in touch with us to discuss your one of a kind guitar
				</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">CUSTOM GUITARS</span>
				</p>
			</div>
			<div class="flex flex-col gap-4 items-center max-w-5xl">
				<p class="text-center text-white font-quicksand">
					All our guitars are built by hand in my barn located in Leesville, South Carolina.
				</p>
				<a
					href="/contact"
					class="font-bigshoulders font-semibold text-white hover:text-burgandy border border-burgandy bg-burgandy hover:bg-white px-4 py-2 transition-colors duration-200"
				>
					CUSTOM ORDER
				</a>
			</div>
			<div class="flex flex-row items-center gap-2 font-bigshoulders text-2xl">
				<span class="text-gold">EMAIL US:</span>
				<a href="mailto:Nick@27FOURGUITARS.COM" class="text-white"> Nick@27FOURGUITARS.COM </a>
			</div>
		</div>
	</section>
</main>
