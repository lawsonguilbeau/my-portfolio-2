<main class="flex flex-col flex-1">
	<section
		id="avaliableGuitars"
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
			<h2 class="font-bigshoulders text-4xl sm:text-5xl md:text-6xl text-white">
				Available Guitars
			</h2>

			<!-- Inventory Section -->
		</div>
	</section>
	<!-- Newsletter Section -->

	<section class="dark:bg-black py-20 lg:py-32 flex justify-start gap-5" id="welcome">
		<div class="flex flex-col justify-center text-center pl-32">
			<img src="images/Available.png" class="h-96 w-max" alt="home welcome" />
			<h1 class="font-bigshoulders text-xl pt-3">$3400</h1>
			<p class="font-quicksand text-sm text-gold max-w-md">
				Sg Style Guitar <br />
				Mahogany Body w/ highly figured maple neck <br />
				Ammo fret markers & glow side dots
			</p>
			<p class="font-bigshoulders text-white text-3xl pt-6">
				<span class="border-b-2 border-t-2 border-gray-700 py-1">SOLD</span>
			</p>
		</div>
		<div class="flex flex-col text-center gap-4 pt-20 pl-20">
			<p class="font-bigshoulders text-white text-3xl">
				<span class="border-b-2 border-t-2 border-gray-700 py-1"
					>NO GUITARS AVAILABLE AT THIS TIME</span
				>
			</p>
			<p class="font-quicksand text-sm text-gold max-w-md">
				There are not any guitars available for public sale at this time. We are currently working
				on custom builds, but do check back soon. There are several awesome builds in the works and
				will be posted here as soon as they are complete. Sign up below to have a chance to purchase
				them before they are available to the general public.
			</p>
		</div>
	</section>

	<section
		id="about"
		class="dark:bg-black py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div class="flex flex-col gap-10 items-center">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-lg sm:text-3xl md:text-2xl">
					Be the first to know when new guitars are available
				</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">SIGN UP HERE</span>
				</p>
			</div>
			<form class="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto">
				<div class="w-full">
					<label for="email" class="font-quicksand text-grey-400 text-sm sr-only"
						>Email Address</label
					>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email Address"
						class="w-full px-2 py-3 text-black bg-white rounded-md border-transparent focus:outline-none"
					/>
				</div>
				<div class="w-full">
					<label for="first-name" class="font-quicksand text-grey-400 text-sm sr-only"
						>First Name</label
					>
					<input
						type="text"
						id="first-name"
						name="first-name"
						placeholder="First Name"
						class="w-full px-2 py-3 text-black bg-white rounded-md border-transparent focus:outline-none"
					/>
				</div>
				<button
					type="submit"
					class="w-full px-2 py-3 text-white bg-burgandy font-semibold rounded-md">Subscribe</button
				>
			</form>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="dark:bg-black py-20" id="testimonials">
		<div class="flex flex-col gap-10 items-center pb-12">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-lg sm:text-3xl md:text-2xl">Testimonials</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">WHAT OUR CLIENTS SAY</span>
				</p>
			</div>
		</div>

		<!-- Testimonials Container -->
		<div class="flex flex-row gap-12 max-w-5xl mx-auto font-quicksand text-gray-400 text-sm px-6">
			<!-- Testimonial Left -->
			<div class="max-w-md text-left flex flex-col justify-start gap-4 items-start">
				<p>
					It will be passed down for more generations! My Papa and Daddy are proud right now! Thank
					you so much for this!!! I couldn't be happier about it!
				</p>
				<img src="images/rick.jpg" alt="rick" class="w-20 h-20 rounded-full" />
				<p class="text-white font-semibold">TANNA BRANDON</p>
				<p class="mt-2">This guitar is amazing man!!!</p>
				<img src="images/rick.jpg" alt="rick" class="w-20 h-20 rounded-full" />
				<p class="text-white font-semibold">MATT PUTMAN</p>
			</div>

			<!-- Testimonial Right -->
			<div class="max-w-md text-right flex flex-col justify-end gap-4 items-end">
				<p>
					I just wanted to reach out and say that this guitar is magnificent! I love the amount of
					detail that went into it. I feel like every time I look at it, I find something new. It
					sounds perfect for what I want and I'm so happy that it looks and feels like exactly what
					I asked for and more!
				</p>
				<img src="images/rick.jpg" alt="rick" class="w-20 h-20 rounded-full" />
				<p class="text-white font-semibold">JACKSON WHITAKER</p>
				<p class="mt-2">Beautiful work! You are truly one of the most talented people I know!</p>
				<img src="images/rick.jpg" alt="rick" class="w-20 h-20 rounded-full" />
				<p class="text-white font-semibold">CRIS MASSINGILL</p>
			</div>
		</div>
	</section>
</main>
