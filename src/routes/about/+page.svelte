<main class="flex flex-col flex-1">
	<section
		id="about"
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
			<h2 class="font-bigshoulders text-4xl sm:text-5xl md:text-6xl text-white">ABOUT</h2>

			<!-- Inventory Section -->
		</div>
	</section>
	<!-- Newsletter Section -->

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
				playability. I believe that every detail that improves the tone of a guitar, whether by 0.1%
				or 10%, adds up to increase the overall tone of the instrument. From hand-carved necks to
				meticulously voiced pickups, no detail is too small in the pursuit of inspiring tone and
				lasting beauty.
			</p>
			<p class="font-quicksand text-sm text-gray-400 max-w-md">
				Whether you’re chasing vintage warmth, modern clarity, or something entirely your own, our
				mission is to create guitars that don’t just sound exceptional — they feel like an extension
				of you.
			</p>
			<p class="font-quicksand text-sm text-gray-400 max-w-md">
				Join us in the pursuit of tone without compromise.
			</p>
			<p class="font-quicksand text-sm text-gray-400 max-w-md">
				Nick Guilbeau <br />
				Founder, Builder, Player
			</p>
			<div class="flex flex-row gap-4">
				<button
					class="font-semibold font-bigshoulders text-white hover:text-gold border-2 border-gold bg-gold hover:bg-white px-4 py-2"
					>CUSTOM GUITARS</button
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
					Be the first to see our new guitars
				</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">JOIN THE NEWSLETTER</span>
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

	<section
		class="relative w-full min-h-96 flex flex-col items-center justify-center py-20"
		id="customGuitars"
	>
		<!-- Background image with overlay -->
		<div
			class="absolute inset-0 bg-cover bg-center"
			style="background-image: url(images/guitar_horizontal.png);"
		></div>
		<div class="absolute inset-0 bg-black/80"></div>
		<!-- overlay -->

		<!-- Content -->
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
					All our guitars are built by hand in my barn located in Leesville, South Carolina. My goal
					is to never build the same guitar twice which means your guitar is one of a kind. Click
					the link below or email me to schedule a call to talk about your next guitar. I look
					forward to building what you can dream up!
				</p>
				<a
					href="#contact"
					class="font-bigshoulders font-semibold text-white hover:text-burgandy border border-burgandy bg-burgandy hover:bg-white px-4 py-2 transition-colors duration-200"
				>
					CUSTOM ORDER
				</a>
			</div>

			<!-- Email row -->
			<div class="flex flex-row items-center gap-2 font-bigshoulders text-2xl">
				<span class="text-gold">EMAIL US:</span>
				<a href="mailto:Nick@27FOURGUITARS.COM" class="text-white"> Nick@27FOURGUITARS.COM </a>
			</div>
		</div>
	</section>
</main>
