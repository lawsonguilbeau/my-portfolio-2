<script>
	import { enhance } from "$app/forms";
	import { fade } from "svelte/transition";

	export let form;
	let subscribed = false;
</script>

<main class="flex flex-col flex-1 overflow-x-hidden">
	<section
		id="avaliableGuitars"
		class="relative w-full h-64 md:h-80 flex flex-col justify-center items-center"
		style="background-image: url(images/header_non_main.png); background-size: cover; background-position: center;"
	>
		<div class="absolute inset-0 bg-black/50 z-0" />
		<div class="relative z-10 text-center px-6">
			<h2
				class="font-bigshoulders text-4xl sm:text-5xl md:text-7xl text-white uppercase tracking-widest"
			>
				Available Guitars
			</h2>
		</div>
	</section>

	<section
		class="dark:bg-black py-16 md:py-32 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-24 px-6"
		id="welcome"
	>
		<div class="flex flex-col items-center text-center max-w-sm">
			<div class="relative group">
				<img
					src="images/Available.png"
					class="h-80 md:h-96 w-auto object-contain"
					alt="Available Guitar"
				/>
				<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
					<span
						class="bg-black/60 text-white font-bigshoulders text-4xl px-6 py-2 border-2 border-white rotate-12"
						>SOLD</span
					>
				</div>
			</div>
			<h1 class="font-bigshoulders text-2xl pt-4 text-white tracking-widest">$3400</h1>
			<p class="font-quicksand text-sm text-gold mt-2 leading-relaxed">
				Sg Style Guitar <br />
				Mahogany Body w/ highly figured maple neck <br />
				Ammo fret markers & glow side dots
			</p>
		</div>

		<div
			class="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:pt-10 max-w-md"
		>
			<h2
				class="font-bigshoulders text-white text-3xl md:text-4xl border-y-2 border-gray-800 py-2 inline-block leading-tight"
			>
				NO GUITARS AVAILABLE <br class="md:hidden" /> AT THIS TIME
			</h2>
			<p class="font-quicksand text-base text-gold/80 leading-relaxed">
				There are not any guitars available for public sale at this time. We are currently working
				on custom builds, but do check back soon.
				<br /><br />
				There are several awesome builds in the works and will be posted here as soon as they are complete.
				Sign up below to purchase them before they hit the general public.
			</p>
		</div>
	</section>

	<section id="about" class="dark:bg-black py-20 px-6 border-t border-gray-900">
		<div class="flex flex-col gap-8 items-center max-w-2xl mx-auto">
			<div class="text-center space-y-2">
				<p class="font-bigshoulders text-gold text-lg md:text-2xl italic">Be the first to know</p>
				<h2
					class="font-bigshoulders text-white text-3xl md:text-4xl border-y-2 border-gray-700 py-2 uppercase tracking-tighter"
				>
					Sign Up Here
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
				class="flex flex-col gap-4 w-full"
			>
				{#if subscribed}
					<div
						class="text-white font-bigshoulders text-2xl border border-gold p-6 text-center rounded-md"
						transition:fade
					>
						THANKS FOR SIGNING UP!
					</div>
				{:else}
					<input
						type="email"
						name="email"
						required
						placeholder="Email Address"
						class="w-full px-4 py-4 text-black rounded-md outline-none"
					/>
					<input
						type="text"
						name="firstName"
						required
						placeholder="First Name"
						class="w-full px-4 py-4 text-black rounded-md outline-none"
					/>
					<button
						type="submit"
						class="w-full py-4 text-white bg-red-900 font-bold uppercase tracking-widest hover:bg-red-800 transition-colors"
					>
						Subscribe
					</button>
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

		<div class="flex flex-col md:flex-row gap-16 max-w-6xl mx-auto text-gray-400">
			<div class="flex-1 flex flex-col gap-12">
				<div class="flex flex-col items-center md:items-start text-center md:text-left gap-4">
					<p class="italic text-base leading-relaxed">
						"It will be passed down for more generations! My Papa and Daddy are proud right now!
						Thank you so much for this!!!"
					</p>
					<div class="flex items-center gap-4">
						<img
							src="images/rick.jpg"
							alt="client"
							class="w-16 h-16 rounded-full border-2 border-gold"
						/>
						<p class="text-white font-bold uppercase tracking-widest">Tanna Brandon</p>
					</div>
				</div>
				<div class="flex flex-col items-center md:items-start text-center md:text-left gap-4">
					<p class="italic text-base">"This guitar is amazing man!!!"</p>
					<div class="flex items-center gap-4">
						<img
							src="images/rick.jpg"
							alt="client"
							class="w-16 h-16 rounded-full border-2 border-gold"
						/>
						<p class="text-white font-bold uppercase tracking-widest">Matt Putman</p>
					</div>
				</div>
			</div>

			<div class="flex-1 flex flex-col gap-12">
				<div class="flex flex-col items-center md:items-end text-center md:text-right gap-4">
					<p class="italic text-base leading-relaxed">
						"I just wanted to reach out and say that this guitar is magnificent! I love the amount
						of detail that went into it."
					</p>
					<div class="flex items-center gap-4 md:flex-row-reverse">
						<img
							src="images/rick.jpg"
							alt="client"
							class="w-16 h-16 rounded-full border-2 border-gold"
						/>
						<p class="text-white font-bold uppercase tracking-widest">Jackson Whitaker</p>
					</div>
				</div>
				<div class="flex flex-col items-center md:items-end text-center md:text-right gap-4">
					<p class="italic text-base">
						"Beautiful work! You are truly one of the most talented people I know!"
					</p>
					<div class="flex items-center gap-4 md:flex-row-reverse">
						<img
							src="images/rick.jpg"
							alt="client"
							class="w-16 h-16 rounded-full border-2 border-gold"
						/>
						<p class="text-white font-bold uppercase tracking-widest">Cris Massingill</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
