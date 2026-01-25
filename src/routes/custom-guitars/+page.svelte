<script>
	function formatPhoneNumber(event) {
		const input = event.target;
		const cleanedValue = input.value.replace(/\D/g, ""); // Remove all non-digit characters
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
</script>

<main class="flex flex-col flex-1">
	<section
		id="customGuitars"
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
			<h2 class="font-bigshoulders text-4xl sm:text-5xl md:text-6xl text-white">Custom Guitars</h2>
		</div>
	</section>

	<!-- Custom Input Field Section -->
	<section
		id="customOrder"
		class="dark:bg-black py-20 pt-10 lg:pt-16 lg:py-1 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div class="flex flex-col gap-10 items-center">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-lg sm:text-3xl md:text-2xl">What we can do</p>
			</div>
			<form
				method="POST"
				action="?/submitForm"
				class="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto"
			>
				<div class="w-full">
					<label for="first-name" class="font-quicksand text-grey-400 text-sm sr-only"
						>First Name</label
					>
					<p>Your Name*</p>
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

					<p>Your Email*</p>
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
					<p>Phone</p>
					<input
						type="tel"
						id="tel"
						name="tel"
						placeholder="Phone Number"
						class="w-full px-2 py-3 text-white bg-black rounded-md border-2 border-white focus:border-gold duration-200 focus:outline-none"
						on:input={formatPhoneNumber}
					/>
				</div>
				<div class="w-full">
					<label for="description" class="font-quicksand text-grey-400 text-sm sr-only"
						>Brief Description</label
					>
					<p>Give us a breif description of your guitar*</p>
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
					>REQUEST CONSULTATION</button
				>
			</form>
		</div>
	</section>
</main>
