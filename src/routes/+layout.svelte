<script lang="ts">
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	import NavButton from '$lib/components/NavButton.svelte';
	import { page } from '$app/stores';
	let user_details: UserDetails = $page.data.user_details;
	import '../app.pcss';
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { UserDetails } from './root-page.types';
</script>

<nav
	class="flex flex-col items-center border-b border-dotted border-lightGray py-[10px] md:mx-[30px] md:flex-row md:justify-between lg:mx-[117px]"
>
	<section class="flex items-center gap-1">
		<img src="/duggup_logo.svg" alt="DuggupLogo" />
		<h1 class="text-xl font-semibold text-primaryBlack">duggup</h1>
	</section>

	<section class="flex flex-col-reverse items-center gap-2 md:flex-row md:gap-10">
		<div class="flex items-center gap-8">
			<NavButton buttonText="Home" navLink="/" iconUrl="/house.svg" />
			<NavButton buttonText="Explore" navLink="/" iconUrl="/double_bars.svg" />
			<NavButton buttonText="Learn" navLink="/" iconUrl="/open_book.svg" />
		</div>

		<PrimaryButton buttonText="Post" />

		<div class="flex items-center gap-3">
			<Avatar.Root class="h-[48px] w-[48px] border-[0.5px] border-lightBlack ">
				<Avatar.Image src="/profile_picture.png" alt="ProfilePicture" />
				<Avatar.Fallback>{user_details.name?.charAt(0).toLocaleUpperCase()}</Avatar.Fallback>
			</Avatar.Root>

			<h1 class="text-xl font-normal leading-6 text-primaryBlack">
				{user_details.name}
			</h1>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<img src="/chevron-down.svg" class="h-4 w-4 cursor-pointer" alt="" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Profile</DropdownMenu.Item>
						<DropdownMenu.Item>Billing</DropdownMenu.Item>
						<DropdownMenu.Item>Team</DropdownMenu.Item>
						<DropdownMenu.Item>Subscription</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</section>
</nav>

<slot />
