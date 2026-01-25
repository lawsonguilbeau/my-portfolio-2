<main class="flex flex-col flex-1">
	<section
		id="introPage"
		class="relative w-full min-h-screen flex flex-col"
		style="background-image: url(images/Home_Main.webp); background-size: cover; background-position: center;"
	>
		<!-- Overlay to dim background -->
		<div class="absolute inset-0 bg-black/50 z-0" />

		<!-- Header placeholder to push content below -->
		<div class="h-[80px] sm:h-[100px] lg:h-[120px]" />

		<!-- Hero Content -->
		<div class="relative z-10 flex flex-col gap-6 md:gap-8 lg:gap-10 text-center px-6 pb-24">
			<img
				src="images/logo_full_whitegold.png"
				alt="logo white gold"
				class="h-[16rem] w-[32rem] mx-auto"
			/>

			<h2 class="font-bigshoulders text-4xl sm:text-5xl md:text-6xl text-white">
				Build the guitar that
				<br /> reflects who you are!
			</h2>
			<p class="font-bold text-bigshoulders text-gold sm:text-lg md:text-xl">
				UNIQUE GUITARS. EXQUISITE TONE
			</p>

			<!-- Home Welcome Section -->
		</div>
	</section>
	<section class="dark:bg-black py-20 lg:py-32 flex justify-start gap-5 text-left" id="welcome">
		<img src="images/Home_Welcome.png" class="h-96 w-max pl-32" alt="home welcome" />
		<div class="flex flex-col text-left gap-4 pt-20">
			<h1 class="font-bigshoulders text-2xl pb-2">WELCOME TO 27FOUR GUITARS</h1>
			<p class="font-quicksand text-sm text-gray-400 max-w-md">
				We offer unique, hand built guitars for discerning players who seek instruments that truly
				reflect their individuality. By combining premium tome woods and top-shelf components, I
				ensure exquisite tone and flawless playability, offering a level of quality that transcends
				limited options.
			</p>
			<div class="flex flex-row gap-4">
				<button
					class="font-semibold text-gold hover:text-gold border-gold hover:text-white border-2 border-gold bg-transparent hover:bg-gold hover:border-white px-4 py-2"
					>READ MORE</button
				>
				<button
					class="font-semibold text-white hover:text-gold border-2 border-gold bg-gold hover:bg-white px-4 py-2"
					>CUSTOM ORDER</button
				>
			</div>
		</div>
	</section>
	<!-- Newsletter Section -->
	<section
		id="about"
		class="dark:bg-black py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
	>
		<div class="flex flex-col gap-10 items-center">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-lg sm:text-3xl md:text-2xl">
					Be the first to see our newest guitars
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

	<!-- Custom Guitars Section -->
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

	<!-- Display Section -->
	<section
		class="dark:bg-black flex flex-col items-center justify-center py-20 text-center"
		id="display"
	>
		<div class="relative z-10 flex flex-col gap-10 items-center text-center px-6 max-w-5xl">
			<div class="flex flex-col gap-4 text-center">
				<p class="font-bigshoulders text-gold text-sm sm:text-3xl md:text-2xl">
					Check out my latest work
				</p>
				<p class="font-bigshoulders text-white text-3xl">
					<span class="border-b-2 border-t-2 border-gray-700 py-1">OUR GUITARS</span>
				</p>
			</div>
		</div>
		<div class="grid grid-cols-3 grid-rows-3 pt-10">
			<img
				src="images/gallery1.png"
				alt="guitar"
				class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75"
			/>
			<img
				src="images/gallery2.png"
				alt="guitar"
				class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75"
			/>
			<img
				src="images/gallery3.png"
				alt="guitar"
				class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75"
			/>
			<img
				src="images/gallery4.png"
				alt="guitar"
				class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75"
			/>
			<img
				src="images/gallery5.png"
				alt="guitar"
				class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75"
			/>
			<img
				src="images/gallery6.png"
				alt="guitar"
				class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75"
			/>
			<img
				src="images/gallery7.png"
				alt="guitar"
				class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75"
			/>
			<img
				src="images/gallery8.png"
				alt="guitar"
				class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75"
			/>
			<img
				src="images/gallery9.png"
				alt="guitar"
				class="w-full h-96 object-cover transition-opacity duration-300 hover:opacity-75"
			/>
		</div>
	</section>
</main>
