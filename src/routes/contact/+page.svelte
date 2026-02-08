<script>
	import { afterNavigate, disableScrollHandling } from "$app/navigation";
	import { enhance } from "$app/forms";
	import { fade } from "svelte/transition";

	export let form;
	let submitted = false;

	afterNavigate(() => {
		disableScrollHandling();
		if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	});

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
		id="contactSection"
		class="relative w-full h-64 md:h-80 flex flex-col justify-center items-center"
		style="background-image: url(images/header_non_main.png); background-size: cover; background-position: center;"
	>
		<div class="absolute inset-0 bg-black/60 z-0" />
		<div class="relative z-10 text-center px-6">
			<h2 class="font-bigshoulders text-5xl md:text-7xl text-white uppercase tracking-widest">
				CONTACT US
			</h2>
		</div>
	</section>

	<section id="customOrder" class="dark:bg-black py-16 md:py-24 px-6 relative">
		<div class="flex flex-col gap-10 items-center max-w-2xl mx-auto">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-xl md:text-2xl italic">
					We would love to hear from you
				</p>
				<h2 class="font-bigshoulders text-white text-3xl md:text-4xl">
					<span
						class="border-b-2 border-t-2 border-gray-700 py-2 inline-block uppercase tracking-tighter"
					>
						Send us a message
					</span>
				</h2>
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
				class="flex flex-col gap-5 w-full"
			>
				{#if submitted}
					<div
						class="text-white font-bigshoulders text-2xl border-2 border-gold p-12 rounded-md bg-zinc-950 w-full text-center"
						transition:fade
					>
						MESSAGE SENT!<br />
						<span class="text-gold text-lg">WE'LL BE IN TOUCH SOON.</span>
					</div>
				{:else}
					<div class="flex flex-col md:flex-row gap-5 w-full">
						<div class="flex-1">
							<label for="name" class="sr-only">Your Name</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Your Name"
								required
								class="w-full px-4 py-4 text-white bg-transparent rounded-md border-2 border-zinc-800 focus:border-gold transition-colors focus:outline-none"
							/>
						</div>
						<div class="flex-1">
							<label for="email" class="sr-only">Email Address</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Email Address"
								required
								class="w-full px-4 py-4 text-white bg-transparent rounded-md border-2 border-zinc-800 focus:border-gold transition-colors focus:outline-none"
							/>
						</div>
					</div>

					<div class="w-full">
						<label for="tel" class="sr-only">Phone Number</label>
						<input
							type="tel"
							id="tel"
							name="tel"
							placeholder="Phone Number (Optional)"
							on:input={formatPhoneNumber}
							class="w-full px-4 py-4 text-white bg-transparent rounded-md border-2 border-zinc-800 focus:border-gold transition-colors focus:outline-none"
						/>
					</div>

					<div class="w-full">
						<label for="description" class="sr-only">Your Message</label>
						<textarea
							id="description"
							name="description"
							placeholder="Tell us about your dream guitar..."
							rows="6"
							required
							class="w-full px-4 py-4 text-white bg-transparent rounded-md border-2 border-zinc-800 focus:border-gold transition-colors focus:outline-none resize-none"
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full py-5 text-white bg-red-900 font-bold font-bigshoulders text-xl tracking-widest rounded-md hover:bg-white hover:text-red-900 border-2 border-transparent hover:border-red-900 transition-all duration-300"
					>
						SEND MESSAGE
					</button>
				{/if}

				{#if form?.error}
					<p class="text-red-500 font-quicksand text-center mt-2">{form.message}</p>
				{/if}
			</form>
		</div>
	</section>
</main>
