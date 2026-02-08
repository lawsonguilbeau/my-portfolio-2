<script>
	import { enhance } from "$app/forms";
	import { fade } from "svelte/transition";
	export let form;
</script>

<main class="min-h-[80vh] flex items-center justify-center px-6">
	<div class="w-full max-w-md bg-zinc-950 p-8 md:p-12 rounded-lg border border-zinc-800 shadow-2xl">
		<div class="text-center mb-10">
			<h1 class="font-bigshoulders text-4xl text-white uppercase tracking-widest">
				Admin <span class="text-gold">Login</span>
			</h1>
			<div class="h-1 w-12 bg-burgandy mx-auto mt-2"></div>
		</div>

		{#if form?.error}
			<div
				transition:fade
				class="bg-red-900/20 border border-red-900 text-red-500 p-3 rounded text-sm mb-6 text-center font-quicksand"
			>
				{form.error}
			</div>
		{/if}

		<form method="POST" use:enhance class="flex flex-col gap-6">
			<div class="flex flex-col gap-2">
				<label
					for="email"
					class="font-quicksand text-xs text-gray-400 uppercase tracking-widest ml-1"
				>
					Email Address
				</label>
				<input
					id="email"
					name="email"
					type="email"
					required
					class="w-full bg-black border-2 border-zinc-800 text-white px-4 py-3 rounded-md focus:border-gold focus:outline-none transition-colors duration-300"
					placeholder="admin@27four.com"
				/>
			</div>

			<div class="flex flex-col gap-2">
				<label
					for="password"
					class="font-quicksand text-xs text-gray-400 uppercase tracking-widest ml-1"
				>
					Password
				</label>
				<input
					id="password"
					name="password"
					type="password"
					required
					class="w-full bg-black border-2 border-zinc-800 text-white px-4 py-3 rounded-md focus:border-gold focus:outline-none transition-colors duration-300"
					placeholder="••••••••"
				/>
			</div>

			<button
				type="submit"
				class="w-full bg-burgandy hover:bg-red-800 text-white font-bigshoulders text-xl py-4 rounded-md tracking-widest transition-all duration-300 mt-4 uppercase shadow-lg active:scale-[0.98]"
			>
				Enter Dashboard
			</button>
		</form>

		<div class="mt-8 text-center">
			<a href="/" class="text-gray-500 hover:text-white text-sm font-quicksand transition-colors">
				&larr; Return to Site
			</a>
		</div>
	</div>
</main>
