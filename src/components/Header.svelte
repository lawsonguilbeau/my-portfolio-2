<script lang="ts">
	export let y;

	let tabs = [
		{ name: "HOME", link: "/" },
		{ name: "AVALIABLE GUITARS", link: "/avaliable-guitars" },
		{ name: "CUSTOM GUITARS", link: "/custom-guitars" },
		{ name: "ABOUT", link: "/about" },
		{ name: "GALLERY", link: "/gallery" },
		{ name: "CONTACT US", link: "/contact" }
	];
</script>

<header
	class={"z-[100] duration-200 px-6 flex items-center justify-between" +
		(y > 0
			? " fixed top-0 w-full py-4 bg-black border-black shadow-md "
			: " absolute top-0 w-full py-6 bg-transparent border-transparent ")}
>
	<img src={"images/logo_basic_whitegold.png"} alt="logo white gold" class="px-[70px] w-18 h-8" />
	<div class="font-bigshoulders text-xl px-[70px] sm:flex items-center gap-4 hidden">
		{#each tabs as tab, index}
			<a href={tab.link} class="hover:text-gold transition-colors duration-200">
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
</header>
