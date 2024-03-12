<script lang="ts">
	import type { PageData } from './$types.js';
	import * as Avatar from '$lib/components/ui/avatar';
	import type { UserDetails } from './root-page.types.js';
	import { formateDate, truncate } from './helpers.js';
	import PrimaryButton from '$lib/components/PrimaryButton.svelte';
	export let data: PageData;
	let user_details: UserDetails = data.user_details;
	let past_experience = user_details.past_experience || [];
</script>

<svelte:head>
	<title>Profile Page | Duggup</title>
</svelte:head>

<section
	class="relative mx-10 mt-12 flex flex-col md:ml-[20px] md:mr-[60px] xl:ml-[60px] xl:mr-[250px]"
>
	<div
		class="flex w-full flex-col items-center gap-14 md:flex-row md:items-start md:justify-center"
	>
		<article class="md:pl-[126px]">
			<div class="flex w-max flex-col items-center gap-2">
				<Avatar.Root class="border-slate-150 h-[120px] w-[120px] border-4">
					<Avatar.Image src="/profile_picture.png" alt="ProfilePicture" />

					<Avatar.Fallback class="text-4xl"
						>{user_details.name?.charAt(0).toLocaleUpperCase()}</Avatar.Fallback
					>
				</Avatar.Root>
				<h1 class="text-2xl font-bold leading-7 text-lightGray">{user_details?.name}</h1>
			</div>
		</article>

		<article class="my-5 mb-10 flex flex-shrink-0 flex-col gap-5">
			<div class="flex justify-between">
				<p class="max-w-[584px] text-sm font-normal leading-6 text-secondaryBlack">
					{user_details.bio}
				</p>
				<div class="flex flex-col items-end">
					<img
						class="h-9 w-9"
						src={user_details.current_company_details?.logo_url}
						alt="CompanyLogo"
					/>
					<h1 class="mt-2 text-right text-base font-bold leading-[19.36px] text-black">
						{user_details.current_company_details?.name}
					</h1>
					<h2
						class="mt-1 whitespace-nowrap text-right text-xs font-normal leading-[14.52px] text-softGray"
					>
						{user_details.current_company_details?.role}
					</h2>
				</div>
			</div>
			<div class="flex justify-between">
				<PrimaryButton showLogo={false} buttonText="Followed" />
				<div class="flex items-center gap-4">
					<a target="_blank" href={user_details.website_url}>
						<div class="flex gap-1 hover:underline">
							<span>My website</span>
							<img src="/link_arrow_top_rIght.svg" alt="LinkIcon" />
						</div>
					</a>
					<img src="/dot-horizontal.svg" alt="DotsIcon" />
				</div>
			</div>
		</article>
	</div>

	<section class="self-center">
		{#each past_experience as item}
			<article class="flex flex-col md:pl-[160px]">
				<div class="border-l-2 border-dotted border-softGray pl-6">
					<div class="flex flex-col gap-[70px] p-6">
						{#each item.content as content}
							<div class="relative mt-5 flex flex-wrap-reverse items-start gap-6 md:flex-wrap">
								<span
									class="absolute -top-[30px] text-sm font-normal leading-[14.52px] text-softGray md:-left-[155px]"
									>{formateDate(content.published_at)}</span
								>
								<img
									class="absolute -left-[58px] -top-[30px] md:self-center"
									src="/dot_blue_border.svg"
									alt="blueDot"
								/>

								{#each content.articles as article}
									<article
										class="flex h-[226px] w-[344px] flex-col overflow-hidden rounded-xl border border-dullGray bg-white"
									>
										<img class="h-[136px] object-cover" src={article.cover_image_url} alt="" />
										<div class=" p-6 text-sm">
											<h1>{truncate(article.title, 84)}</h1>
										</div>
									</article>
								{/each}
							</div>

							<article
								class="shadow-softShadow relative mt-[100px] flex max-w-[713px] flex-col rounded-xl bg-white px-5 py-4 md:mb-0 md:mt-0"
							>
								<h1 class=" text-xl font-bold leading-8 text-secondaryBlack">{item.role}</h1>
								<div class="text-softGray">
									<span>{item.employment_status ?? ''}</span>
									{#if item.work_location}
										<span>·</span>
										<span>{item.work_location}</span>
									{/if}
								</div>
								<img
									class=" absolute -left-[56.5px] -top-[10px] md:-top-[30px]"
									src="/bread_crumb_up.svg"
									alt="breadCrumb"
								/>
								<img
									class=" absolute -left-[64px] -top-[140px] md:bottom-[23px]"
									src="/dot_blue_border_lg.svg"
									alt="blueDot"
								/>
								<div
									class="absolute -top-[150px] left-0 flex flex-col gap-2 md:-bottom-[35px] md:-left-[226.5px] md:items-end"
								>
									<img class="h-12 w-12" src={item.logo_url} alt="companyLogo" />
									<h1 class="text-base font-bold leading-[19.36px] text-primaryBlack md:text-right">
										{item.company_name ?? ''}
									</h1>
									<span class="text-xs font-normal leading-[14.52px] text-softGray md:text-right"
										>{item.company_address ?? ''}</span
									>
									<span class="text-xs font-normal leading-[14.52px] text-softGray md:text-right"
										>Joined</span
									>
									<span class="text-xs font-normal leading-[14.52px] text-softGray md:text-right"
										>{formateDate(item.start_date)}</span
									>
								</div>
							</article>
						{/each}
					</div>
				</div>
			</article>
		{/each}
	</section>
</section>
