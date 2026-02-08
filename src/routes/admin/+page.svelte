<script>
	export let data;
	const { requests } = data;
</script>

<div class="admin-container">
	<h1>Guitar Requests</h1>

	{#if requests.length === 0}
		<p>No requests yet. Go build some guitars!</p>
	{:else}
		<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{#each requests as request}
					<tr>
						<td>{new Date(request.created_at).toLocaleDateString()}</td>
						<td>{request.name}</td>
						<td><a href="mailto:{request.email}">{request.email}</a></td>
						<td>{request.tel}</td>
						<td>{request.description}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>

<style>
	.admin-container {
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 1rem;
	}
	th,
	td {
		text-align: left;
		padding: 12px;
		border-bottom: 1px solid #0000;
	}
	th {
		background-color: #0000;
	}
	tr:hover {
		background-color: #0000;
	}
</style>
