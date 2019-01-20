import {Project} from './project';

export const PROJECTS: Project[] = [
		{
			id: 'autoconvert',
			name: 'AutoConvert Greeklish Permalinks',
			type: 'plugin',
			featured: true,
			summary: 'AutoConvert Greeklish Permalinks is the WordPress plugin that allows users to convert Greek characters to Latin (better known as greeklish) in all permalinks of posts, pages, custom post types and taxonomies.',
			highlights: [
				'Expanded on the functionality of previous plugins by adding conversion for old post and better UI',
				'My 1st plugin published on wordpress.org',
				'Over 1000 active installations',
				'The highest growing plugin in its category'
			],
			skills: [
				{
					'name': 'Wordpress',
					'usage': 80,
				},
				{
					'name': 'PHP',
					'usage': 30,
				},
				{
					'name': 'JavaScript',
					'usage': 20,
					'details': [
						{
							'name': 'jQuery',
							'usage': 90,
						},
						{
							'name': 'Gulp',
							'usage': 10,
						},
					]
				},
				{
					'name': 'CSS',
					'usage': 10,
					'details': [
						{
							'name': 'Bootstrap',
							'usage': 100,
						},
					]
				},
			],
			link: 'https://wordpress.org/plugins/autoconvert-greeklish-permalinks/',
			tags: ['WordPress', 'Plugin'],
			logo: 'assets/images/logos/autoconvert.png',
			images: {
				mobile: '',
				laptop: 'assets/images/screenshots/autoconvert-laptop.png'
			}
		},
		{
			id: 'movvin',
			name: 'movvin.com',
			featured: true,
			type: 'website',
			summary: 'Movvin is an online solution for travellers and holiday-makers wishing to book transfers from any airport or port to their desired destination and various leisure activities, provided by licensed professionals at the best prices.',
			highlights: [
				'Worked with Liferay and JSF',
				'Custom Google Maps API integration',
				'Fully responsive design'
			],
			skills: [
				{
					'name': 'Liferay',
					'usage': 30,
					'details': [
						{
							'name': 'Velocity',
							'usage': 90,
						},
						{
							'name': 'JSP',
							'usage': 10,
						}
					]
				},
				{
					'name': 'JSF',
					'usage': 60,
					'details': [
						{
							'name': 'PrimeFaces',
							'usage': 100,
						},
					]
				},
				{
					'name': 'JavaScript',
					'usage': 30,
					'details': [
						{
							'name': 'jQuery',
							'usage': 90,
						},
						{
							'name': 'AlloyUi',
							'usage': 10,
						},
						{
							'name': 'GMaps API',
							'usage': 10,
						},
					]
				},
				{
					'name': 'CSS',
					'usage': 40,
					'details': [
						{
							'name': 'Bootstrap',
							'usage': 100,
						},
					]
				},
			],
			link: 'https://movvin.com',
			tags: ['Front End'],
			logo: 'assets/images/logos/movvin.png',
			images: {
				mobile: 'assets/images/screenshots/movvin-mobile.png',
				laptop: 'assets/images/screenshots/movvin-laptop.png'
			}
		},
		{
			id: 'gostudy',
			name: 'GoStudy.gr',
			type: 'website',
			featured: true,
			summary: 'GoStudy is a career orientation platform designed to help greek high school students choose their university faculty. The project won the 2nd place on the 6th Innovation & Entrepreneurship Ideas Competition of University of Macedonia. ',
			highlights: [
				'Developed a custom search engine',
				'UI and UX design',
				'Use of History API',
				'2nd place on the 6th Innovation & Entrepreneurship Ideas Competition of University of Macedonia.'
			],
			skills: [
				{
					'name': 'Wordpress',
					'usage': 80,
				},
				{
					'name': 'PHP',
					'usage': 50,
				},
				{
					'name': 'JavaScript',
					'usage': 60,
					'details': [
						{
							'name': 'jQuery',
							'usage': 90,
						},
						{
							'name': 'Gulp',
							'usage': 10,
						},
					]
				},
				{
					'name': 'CSS',
					'usage': 20,
					'details': [
						{
							'name': 'Bootstrap',
							'usage': 100,
						},
					]
				},
			],
			link: 'https://gostudy.gr',
			tags: ['WordPress', 'Full Stack'],
			logo: 'assets/images/logos/gostudy.png',
			images: {
				mobile: 'assets/images/screenshots/gostudy-mobile.png',
				laptop: 'assets/images/screenshots/gostudy-laptop.png'
			}
		},
		{
			id: 'leadcompass',
			name: 'LeadCompass.gr',
			type: 'website',
			featured: false,
			summary: 'LeadCompass.gr aims to help young people to transition from education to the labor market through a series of e-courses, e-books, webinars, cv templates and more.',
			highlights: [
				'LMS functionality',
				'WooCommerce templates customization',
				'Custom shortcodes and plugins'
			],
			skills: [
				{
					'name': 'Wordpress',
					'usage': 60,
					'details': [
						{
							'name': 'WooCommerce',
							'usage': 50,
						},
						{
							'name': 'LearnPress',
							'usage': 50,
						},
					]
				},
				{
					'name': 'PHP',
					'usage': 30,
				},
				{
					'name': 'JavaScript',
					'usage': 40,
					'details': [
						{
							'name': 'jQuery',
							'usage': 100,
						}
					]
				},
				{
					'name': 'CSS',
					'usage': 20,
				},
			],
			link: 'https://leadcompass.gr',
			tags: ['WordPress', 'Full Stack'],
			logo: 'assets/images/logos/leadcompass.png',
			images: {
				mobile: 'assets/images/screenshots/leadcompass-mobile.png',
				laptop: 'assets/images/screenshots/leadcompass-laptop.png'
			},
		},

	]
;
