<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let buttonText: string;
	export let showLogo: boolean = true;
</script>

<div class="w-max rounded-b-lg border-b-4 border-lightBlack">
	<Button
		class="gap-4 rounded border-[0.5px] border-lightBlack bg-white  px-6 py-2 text-lightBlack hover:bg-slate-50"
	>
		{#if showLogo}
			<img class="h-3 w-3" src="/plus_outlined.svg" alt="PlusIcon" />
		{/if}
		<h1 class="text-xs font-normal leading-5">{buttonText}</h1>
	</Button>
</div>
