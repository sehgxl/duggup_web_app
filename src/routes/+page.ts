import type { UserDetails } from './root-page.types';

const getUserDetails = () => {
	return {
		name: 'Krishna Kiran',
		bio: 'Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.',
		website_url: 'https://www.krishnakiran.com/',
		current_company_details: {
			name: 'Duggup',
			role: 'Co-Founder and CEO',
			logo_url: '/duggup_logo_rounded.svg'
		},
		past_experience: [
			{
				company_name: 'Duggup',
				role: 'Co-Founder and CEO',
				logo_url: '/duggup_logo_rounded.svg',
				start_date: '2023-11-01',
				employment_status: 'Full-time',
				work_location: 'Remote',
				company_address: 'San Francisco Bay Area',
				content: [
					{
						published_at: '2023-12-01',
						articles: [
							{
								title: `Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.`,
								cover_image_url: '/sam_altman.jpeg'
							},
							{
								title: `No amount of technology can convert a bad story into a good story.`,
								cover_image_url: '/jobs.jpeg'
							}
						]
					}
				]
			},
			{
				company_name: 'BetterUp',
				role: 'VP Engineering',
				logo_url: '/better_up_logo.svg',
				start_date: '2022-09-01',
				employment_status: 'Full-time',
				work_location: null,
				company_address: 'San Francisco Bay Area',
				content: [
					{
						published_at: '2023-12-01',
						articles: [
							{
								title: `Startup Lesson I am reflecting. Don't build for the "average person".`,
								cover_image_url: '/desk_setup.jpeg'
							},
							{
								title: `Your biggest regrets at 80 will be acts of omission.`,
								cover_image_url: '/tokyo_map.png'
							}
						]
					}
				]
			}
		]
	};
};

/** @type {import('./$types').PageLoad} */ export function load() {
	const user_details: UserDetails = getUserDetails();
	return {
		user_details
	};
}
