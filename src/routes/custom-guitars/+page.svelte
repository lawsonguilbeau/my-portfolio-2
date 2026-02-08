<script>
	import { enhance } from "$app/forms";
	import { fade } from "svelte/transition";

	export let form;
	let submitted = false;

	function formatPhoneNumber(event) {
		const input = event.target;
		const cleanedValue = input.value.replace(/\D/g, "");
		let formattedValue = "";

		if (cleanedValue.length > 0) formattedValue += "(" + cleanedValue.substring(0, 3);
		if (cleanedValue.length > 3) formattedValue += ") " + cleanedValue.substring(3, 6);
		if (cleanedValue.length > 6) formattedValue += "-" + cleanedValue.substring(6, 10);

		input.value = formattedValue;
	}
</script>

<main class="flex flex-col flex-1 overflow-x-hidden">
	<section
		id="customGuitarsHero"
		class="relative w-full h-64 md:h-80 flex flex-col justify-center items-center"
		style="background-image: url(images/header_non_main.png); background-size: cover; background-position: center;"
	>
		<div class="absolute inset-0 bg-black/60 z-0" />
		<div class="relative z-10 text-center px-6">
			<h2
				class="font-bigshoulders text-4xl sm:text-5xl md:text-7xl text-white uppercase tracking-widest"
			>
				Custom Guitars
			</h2>
		</div>
	</section>

	<section id="customOrder" class="dark:bg-black py-16 md:py-24 px-6 relative">
		<div class="flex flex-col gap-10 items-center max-w-2xl mx-auto">
			<div class="text-center">
				<p class="font-bigshoulders text-gold text-2xl md:text-3xl italic mb-2">What we can do</p>
				<div class="h-1 w-20 bg-gray-800 mx-auto"></div>
			</div>

			<form
				method="POST"
				action="?/submitForm"
				use:enhance={() => {
					return async ({ result, update }) => {
						await update();
						if (result.type === "success") submitted = true;
					};
				}}
				class="flex flex-col gap-6 w-full"
			>
				{#if submitted}
					<div
						class="text-white font-bigshoulders text-2xl border-2 border-gold p-12 rounded-md bg-zinc-950 w-full text-center"
						transition:fade
					>
						CONSULTATION REQUESTED!<br />
						<span class="text-gold text-lg">WE'LL REACH OUT TO START THE BUILD PROCESS.</span>
					</div>
				{:else}
					<div class="w-full group">
						<label
							for="name"
							class="block font-quicksand text-gray-400 text-xs uppercase tracking-widest mb-2 ml-1"
							>Your Name*</label
						>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Full Name"
							required
							class="w-full px-4 py-4 text-white bg-transparent rounded-md border-2 border-zinc-800 focus:border-gold transition-all duration-300 focus:outline-none"
						/>
					</div>

					<div class="w-full group">
						<label
							for="email"
							class="block font-quicksand text-gray-400 text-xs uppercase tracking-widest mb-2 ml-1"
							>Your Email*</label
						>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="email@example.com"
							required
							class="w-full px-4 py-4 text-white bg-transparent rounded-md border-2 border-zinc-800 focus:border-gold transition-all duration-300 focus:outline-none"
						/>
					</div>

					<div class="w-full group">
						<label
							for="tel"
							class="block font-quicksand text-gray-400 text-xs uppercase tracking-widest mb-2 ml-1"
							>Phone</label
						>
						<input
							type="tel"
							id="tel"
							name="tel"
							placeholder="(XXX) XXX-XXXX"
							on:input={formatPhoneNumber}
							class="w-full px-4 py-4 text-white bg-transparent rounded-md border-2 border-zinc-800 focus:border-gold transition-all duration-300 focus:outline-none"
						/>
					</div>

					<div class="w-full group">
						<label
							for="description"
							class="block font-quicksand text-gray-400 text-xs uppercase tracking-widest mb-2 ml-1"
							>Build Description*</label
						>
						<textarea
							id="description"
							name="description"
							placeholder="Tell us about the wood, electronics, or style you have in mind..."
							rows="6"
							required
							class="w-full px-4 py-4 text-white bg-transparent rounded-md border-2 border-zinc-800 focus:border-gold transition-all duration-300 focus:outline-none resize-none"
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full py-5 mt-4 text-white bg-red-900 font-bold font-bigshoulders text-xl tracking-widest rounded-md hover:bg-white hover:text-red-900 border-2 border-transparent hover:border-red-900 transition-all duration-300 uppercase shadow-lg"
					>
						Request Consultation
					</button>
				{/if}

				{#if form?.error && !submitted}
					<p class="text-red-500 font-quicksand text-center mt-2">{form.message}</p>
				{/if}
			</form>
		</div>
	</section>
</main>
