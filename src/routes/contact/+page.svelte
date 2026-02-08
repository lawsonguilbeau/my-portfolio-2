<script>
	import { afterNavigate, disableScrollHandling } from "$app/navigation";
	import { enhance } from "$app/forms";

	export let form;
	let submitted = false;

	afterNavigate(() => {
		disableScrollHandling();
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
	});

	function formatPhoneNumber(event) {
		const input = event.target;
		const cleanedValue = input.value.replace(/\D/g, "");
		let formattedValue = "";
		if (cleanedValue.length > 0) formattedValue += "(" + cleanedValue.substring(0, 3);
		if (cleanedValue.length > 3) formattedValue += ")" + "-" + cleanedValue.substring(3, 6);
		if (cleanedValue.length > 6) formattedValue += "-" + cleanedValue.substring(6, 10);
		input.value = formattedValue;
	}
</script>

<main class="flex flex-col flex-1">
	<section
		id="contactSection"
		class="relative w-full h-80 flex flex-col"
		style="background-image: url(images/header_non_main.png); background-size: cover; background-position: center;"
	>
		<div class="absolute inset-0 bg-black/50 z-0" />
		<div class="h-[80px] sm:h-[100px] lg:h-[120px]" />
		<div
			class="relative z-10 flex flex-col gap-6 md:gap-8 lg:gap-10 text-center justify-center px-6 pb-24 pt-10"
		>
			<h2 class="font-bigshoulders text-4xl sm:text-5xl md:text-6xl text-white">CONTACT US</h2>
		</div>
	</section>

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

			<form
				method="POST"
				action="?/submitForm"
				use:enhance={() => {
					return async ({ result, update }) => {
						await update();
						if (result.type === "success") submitted = true;
					};
				}}
				class="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto px-6"
			>
				{#if submitted}
					<div
						class="text-white font-bigshoulders text-2xl border-2 border-gold p-10 rounded-md bg-black w-full text-center"
					>
						MESSAGE SENT! WE'LL BE IN TOUCH SOON.
					</div>
				{:else}
					<div class="flex flex-col md:flex-row gap-4 w-full">
						<div class="w-full">
							<input
								type="text"
								name="name"
								placeholder="Your Name"
								required
								class="w-full px-2 py-3 text-white bg-black rounded-md border-2 border-white border-opacity-100 focus:border-gold duration-200 focus:outline-none"
							/>
						</div>
						<div class="w-full">
							<input
								type="email"
								name="email"
								placeholder="Email Address"
								required
								class="w-full px-2 py-3 text-white bg-black rounded-md border-2 border-white border-opacity-100 focus:border-gold duration-200 focus:outline-none"
							/>
						</div>
					</div>

					<div class="w-full">
						<input
							type="tel"
							id="tel"
							name="tel"
							placeholder="Phone Number"
							on:input={formatPhoneNumber}
							class="w-full px-2 py-3 text-white bg-black rounded-md border-2 border-white border-opacity-100 focus:border-gold duration-200 focus:outline-none"
						/>
					</div>

					<div class="w-full">
						<textarea
							name="description"
							placeholder="Your Message"
							rows="8"
							required
							class="w-full px-2 py-3 text-white bg-black rounded-md border-2 border-white border-opacity-100 focus:border-gold duration-200 focus:outline-none resize-none"
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full px-2 py-3 text-white bg-burgandy font-semibold font-quicksand rounded-md hover:bg-black duration-200 hover:border-white hover:border-2"
					>
						SEND MESSAGE
					</button>
				{/if}

				{#if form?.error}
					<p class="text-red-500 font-quicksand mt-2">{form.message}</p>
				{/if}
			</form>
		</div>
	</section>
</main>
