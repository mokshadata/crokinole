<script>
	// an object of components that map to section names (e.g., { "Hero": Hero }) where Hero is a Svelte component
	export let components = {};
	// an array of objects that contain a section name and content (either an array of object)
	export let body = [];
</script>

{#each body as { section, content }}
	{@const id = section.toLowerCase()}
	{@const component = components[section]}
	<section {id}>
		{#if component}
			<svelte:component this={component} {...content}></svelte:component>
		{:else}
			{#each content as { type, value }}
				{@const component = components[type]}
				{#if component}
					<svelte:component this={component} {...value}></svelte:component>
				{:else if type === "text"}
					<p>{@html value}</p>
				{:else}
					<svelte:element this={type} {...value}
						>{#if typeof value === "string"}{@html value}{/if}</svelte:element
					>
				{/if}
			{/each}
		{/if}
	</section>
{/each}
