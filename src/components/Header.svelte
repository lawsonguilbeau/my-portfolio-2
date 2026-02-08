<script lang="ts">
    import { fade, slide } from "svelte/transition";
    export let y: number;

    let isMenuOpen = false;

    let tabs = [
        { name: "HOME", link: "/" },
        { name: "AVAILABLE GUITARS", link: "/avaliable-guitars" },
        { name: "CUSTOM GUITARS", link: "/custom-guitars" },
        { name: "ABOUT", link: "/about" },
        { name: "GALLERY", link: "/gallery" },
        { name: "CONTACT US", link: "/contact" }
    ];

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        // Prevent background scrolling when menu is open
        if (typeof document !== 'undefined') {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        }
    }
</script>

<header
    class={"z-[100] duration-300 px-4 md:px-12 flex items-center justify-between transition-all " +
        (y > 50
            ? " fixed top-0 w-full py-4 bg-black/95 border-b border-zinc-800 shadow-xl backdrop-blur-md "
            : " absolute top-0 w-full py-6 bg-transparent border-transparent ")}
>
    <a href="/" class="z-[110]">
        <img 
            src="images/logo_basic_whitegold.png" 
            alt="logo white gold" 
            class="w-auto h-8 md:h-10 object-contain" 
        />
    </a>

    <nav class="font-bigshoulders text-lg lg:text-xl items-center gap-6 hidden lg:flex text-white">
        {#each tabs as tab}
            <a href={tab.link} class="hover:text-gold transition-colors duration-200 tracking-widest">
                {tab.name}
            </a>
        {/each}
    </nav>

    <button 
        class="lg:hidden flex flex-col justify-center items-center z-[110] w-10 h-10 gap-1.5 focus:outline-none"
        on:click={toggleMenu}
        aria-label="Toggle Menu"
    >
        <span class={`h-0.5 w-7 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span class={`h-0.5 w-7 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span class={`h-0.5 w-7 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
    </button>
</header>

{#if isMenuOpen}
    <div 
        class="fixed inset-0 bg-black z-[105] flex flex-col items-center justify-center lg:hidden"
        transition:fade={{ duration: 200 }}
        on:click={toggleMenu}
    >
