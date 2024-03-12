<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	export let buttonText: string;
	export let navLink: string;
	export let iconUrl: string;
</script>

<a href={navLink}>
	<Button variant="link" class="bg- bg-whit flex items-center gap-2 p-1">
		<img class="m-1 h-4 w-4" src={iconUrl} alt="HomeIcon" />
		<h1 class="text-lightBlack text-xs font-normal leading-5">{buttonText}</h1>
	</Button>
</a>
