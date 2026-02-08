<script>
	export let data;
	const { requests } = data;
</script>

<div class="min-h-screen bg-black text-white p-4 md:p-8 pt-24 md:pt-32">
	<div class="max-w-7xl mx-auto">
		<div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
			<h1
				class="font-bigshoulders text-4xl md:text-5xl text-gold tracking-widest uppercase text-center md:text-left"
			>
				Guitar Requests
			</h1>
			<span class="bg-gray-900 text-gray-400 px-4 py-1 rounded-full text-sm font-quicksand">
				Total: {requests.length}
			</span>
		</div>

		{#if requests.length === 0}
			<div class="text-center py-20 border-2 border-dashed border-gray-800 rounded-lg">
				<p class="font-quicksand text-gray-500 text-lg">No requests yet. Go build some guitars!</p>
			</div>
		{:else}
			<div class="hidden md:block overflow-x-auto rounded-lg border border-gray-800">
				<table class="w-full text-left font-quicksand border-collapse">
					<thead class="bg-gray-900 font-bigshoulders text-gold text-xl tracking-wider">
						<tr>
							<th class="p-4 border-b border-gray-800">Date</th>
							<th class="p-4 border-b border-gray-800">Name</th>
							<th class="p-4 border-b border-gray-800">Contact</th>
							<th class="p-4 border-b border-gray-800">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-800">
						{#each requests as request}
							<tr class="hover:bg-gray-900/50 transition-colors">
								<td class="p-4 text-sm whitespace-nowrap">
									{new Date(request.created_at).toLocaleDateString()}
								</td>
								<td class="p-4 font-bold text-white">{request.name}</td>
								<td class="p-4 text-sm">
									<div class="flex flex-col">
										<a href="mailto:{request.email}" class="text-gold hover:underline"
											>{request.email}</a
										>
										<span class="text-gray-500">{request.tel}</span>
									</div>
								</td>
								<td class="p-4 text-sm text-gray-300 max-w-md italic">
									"{request.description}"
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div class="grid grid-cols-1 gap-4 md:hidden">
				{#each requests as request}
					<div class="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col gap-3">
						<div class="flex justify-between items-start border-b border-gray-800 pb-2">
							<h3 class="font-bigshoulders text-2xl text-white uppercase tracking-wide">
								{request.name}
							</h3>
							<span class="text-xs text-gray-500 font-quicksand uppercase">
								{new Date(request.created_at).toLocaleDateString()}
							</span>
						</div>

						<div class="space-y-1">
							<p class="text-gold font-quicksand text-sm">
								<span class="text-gray-500 mr-2 uppercase text-[10px]">Email:</span>
								<a href="mailto:{request.email}" class="hover:underline">{request.email}</a>
							</p>
							<p class="text-white font-quicksand text-sm">
								<span class="text-gray-500 mr-2 uppercase text-[10px]">Phone:</span>
								{request.tel}
							</p>
						</div>

						<div class="bg-black/40 p-3 rounded mt-2">
							<p class="text-xs text-gray-500 uppercase mb-1 font-bold">Request Detail:</p>
							<p class="text-gray-300 text-sm italic font-quicksand">"{request.description}"</p>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
