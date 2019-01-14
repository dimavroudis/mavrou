import {Project} from './project';

export const PROJECTS: Project[] = [
	{
		id: 'autoconvert',
		name: 'AutoConvert Greeklish Permalinks',
		type: 'plugin',
		summary: 'AutoConvert Greeklish Permalinks is the WordPress plugin that allows users to convert Greek characters to Latin (better known as greeklish) in all permalinks of posts, pages, custom post types and taxonomies.',
		description: 'AutoConvert Greeklish Permalinks is the WordPress plugin that allows users to convert Greek characters to Latin (better known as greeklish) in all permalinks of posts, pages, custom post types and taxonomies.',
		skills: {'PHP': 90, 'CSS': 10},
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
		type: 'website',
		summary: 'Movvin is an online solution for travellers and holiday-makers wishing to book transfers from any airport or port to their desired destination and various leisure activities, provided by licensed professionals at the best prices.',
		description: 'Movvin is an online solution for travellers and holiday-makers wishing to book transfers from any airport or port to their desired destination and various leisure activities, provided by licensed professionals at the best prices.',
		skills: {'JSF': 50, 'JS': 20, 'CSS': 30},
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
		summary: 'GoStudy is a career orientation platform designed to help greek high school students choose their university faculty. The project won the 2nd place on the 6th Innovation & Entrepreneurship Ideas Competition of University of Macedonia. ',
		description: 'GoStudy is a career orientation platform designed to help greek high school students choose their university faculty. The project won the 2nd place on the 6th Innovation & Entrepreneurship Ideas Competition of University of Macedonia. ',
		skills: {'PHP': 50, 'JS': 20, 'CSS': 30},
		link: 'https://gostudy.gr',
		tags: ['WordPress', 'Full Stack'],
		logo: 'assets/images/logos/gostudy.png',
		images: {
			mobile: 'assets/images/screenshots/gostudy-mobile.png',
			laptop: 'assets/images/screenshots/gostudy-laptop.png'
		}
	},

];
