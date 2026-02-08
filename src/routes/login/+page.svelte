<script>
	import { enhance } from "$app/forms";
	export let form;
</script>

<div class="login-box">
	<h1>Admin Login</h1>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

	<form method="POST" use:enhance>
		<label>
			Email:
			<input name="email" type="email" required />
		</label>
		<label>
			Password:
			<input name="password" type="password" required />
		</label>
		<button type="submit">Login</button>
	</form>
</div>

<style>
	.login-box {
		max-width: 400px;
		margin: 4rem auto;
		padding: 2rem;
		border: 1px solid #ccc;
		border-radius: 8px;
	}
	input {
		width: 100%;
		margin-bottom: 1rem;
		padding: 0.5rem;
	}
	.error {
		color: red;
	}
</style>
