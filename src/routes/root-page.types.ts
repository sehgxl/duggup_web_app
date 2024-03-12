export type Content = {
	published_at: string;
	articles: {
		title: string;
		cover_image_url: string;
	}[];
}[];

export type Experience = {
	company_name: string;
	role: string;
	logo_url: string;
	start_date: string;
	employment_status: string;
	work_location: string | null;
	company_address: string;
	content: Content;
};

export type CompanyDetails = {
	name: string;
	role: string;
	logo_url: string;
};

export type UserDetails = {
	name: string | null;
	bio: string | null;
	website_url: string | null;
	current_company_details: CompanyDetails | null;
	past_experience: Experience[] | null;
};
