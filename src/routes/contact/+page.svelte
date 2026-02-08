<script>
	import { afterNavigate, disableScrollHandling } from "$app/navigation";

	afterNavigate(() => {
		// This tells SvelteKit "I'll handle the scroll myself, thanks"
		disableScrollHandling();

		// Force the scroll to the top
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
	});

	function formatPhoneNumber(event) {
		const input = event.target;
		const cleanedValue = input.value.replace(/\D/g, "");
		let formattedValue = "";

		if (cleanedValue.length > 0) {
			formattedValue += "(" + cleanedValue.substring(0, 3);
		}
		if (cleanedValue.length > 3) {
			formattedValue += ")" + "-" + cleanedValue.substring(3, 6);
		}
		if (cleanedValue.length > 6) {
			formattedValue += "-" + cleanedValue.substring(6, 10);
		}

		input.value = formattedValue;
	}

	// This is the specific line that forces the scroll reset
	afterNavigate(() => {
		window.scrollTo(0, 0);
	});
</script>

<main class="flex flex-col flex-1">
	<section
		id="contactSection"
		class="relative w-full h-80 flex flex-col"
		style="background-image: url(images/header_non_main.png); background-size: cover; background-position: center;"
	>
		<!-- Overlay to dim background -->
		<div class="absolute inset-0 bg-black/50 z-0" />

		<!-- Header placeholder to push content below -->
		<div class="h-[80px] sm:h-[100px] lg:h-[120px]" />

		<!-- Hero Content -->
		<div
			class="relative z-10 flex flex-col gap-6 md:gap-8 lg:gap-10 text-center justify-center px-6 pb-24 pt-10"
		>
			<h2 class="font-bigshoulders text-4xl sm:text-5xl md:text-6xl text-white">CONTACT US</h2>
		</div>
	</section>

	<!-- Custom Input Field Section -->
	<section
		id="customOrder"
		class="dark:bg-black py-20 pt-10 lg:pt-16 lg:py-1 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div class="flex flex-col gap-10 items-center">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-lg sm:text-3xl md:text-2xl">
					We would love to hear from you
				</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">SEND US A MESSAGE</span>
				</p>
			</div>
			<form class="flex flex-row items-center gap-4 w-full max-w-2xl mx-auto">
				<div class="w-full">
					<label for="first-name" class="font-quicksand text-grey-400 text-sm sr-only"
						>First Name</label
					>
					<input
						type="text"
						id="first-name"
						name="first-name"
						placeholder="Your Name"
						class="w-full px-2 py-3 text-white bg-black rounded-md border-2 border-white focus:border-gold duration-200 focus:outline-none"
						required
					/>
				</div>
				<div class="w-full">
					<label for="email" class="font-quicksand text-grey-400 text-sm sr-only"
						>Email Address</label
					>

					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email Address"
						class="w-full px-2 py-3 text-white bg-black rounded-md border-2 border-white focus:border-gold duration-200 focus:outline-none"
						required
					/>
				</div>
				<div class="w-full">
					<label for="tel" class="font-quicksand text-grey-400 text-sm sr-only">Phone Number</label>
					<input
						type="tel"
						id="tel"
						name="tel"
						placeholder="Phone Number"
						class="w-full px-2 py-3 text-white bg-black rounded-md border-2 border-white focus:border-gold duration-200 focus:outline-none"
						on:input={formatPhoneNumber}
					/>
				</div>
			</form>
			<form class="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto">
				<div class="w-full">
					<label for="description" class="font-quicksand text-grey-400 text-sm sr-only"
						>Brief Description</label
					>
					<textarea
						id="description"
						name="description"
						placeholder="Your Message"
						rows="8"
						class="w-full px-2 py-3 text-white bg-black rounded-md border-2 border-white focus:border-gold duration-200 focus:outline-none resize-none"
						required
					></textarea>
				</div>
				<button
					type="submit"
					class="w-full px-2 py-3 text-white bg-burgandy font-semibold font-quicksand rounded-md hover:bg-black duration-200 hover:border-white hover:border-2"
					>SEND MESSAGE</button
				>
			</form>
		</div>
	</section>
	<section class="dark:bg-black flex flex-col items-center justify-center py-10" id="customGuitars">
		<!-- Content -->
		<div class="relative z-10 flex flex-col gap-10 items-center text-center px-6 max-w-5xl">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-lg sm:text-3xl md:text-2xl">
					Let us know what you think
				</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">CONTACT</span>
				</p>
			</div>

			<!-- Email row -->
			<div class="flex flex-row items-center gap-2 font-bigshoulders text-2xl">
				<span class="text-gold">EMAIL US:</span>
				<a href="mailto:Nick@27FOURGUITARS.COM" class="text-white"> Nick@27FOURGUITARS.COM </a>
			</div>
		</div>
	</section>
</main>
