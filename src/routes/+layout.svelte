<script>
	import { browser } from "$app/environment";
	import { afterNavigate, disableScrollHandling } from "$app/navigation";
	import { page } from "$app/stores";

	import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";

	let y;
	let innerHeight = 0;
	let innerWidth = 0;

	afterNavigate(() => {
		if (browser) {
			// 1. Tell SvelteKit to stop trying to handle the scroll
			disableScrollHandling();
			// 2. Force the scroll to the absolute top
			window.scrollTo({ top: 0, behavior: "instant" });
		}
	});

	function goTop() {
		if (browser) {
			document.body.scrollIntoView({ behavior: "smooth" });
		}
	}
</script>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />

<div class="relative flex-col max-w[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
	<div
		class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] " +
			(y > 0 ? " opacity-full pointer-events-auto " : " pointer-events-none opacity-0 ")}
	>
		<button
			on:click={goTop}
			class="ml-auto rounded-sm aspect-square bg-black/30 text-white-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer"
		>
			<i class="fa-solid fa-angles-up grid place-items-center aspect-square" />
		</button>
	</div>

	<Header {y} />

	{#key $page.url.pathname}
		<slot />
	{/key}

	<Footer />
</div>
