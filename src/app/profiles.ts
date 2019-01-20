import {Profile} from './profile';

export const PROFILES: Profile[] = [
	{
		id: 0,
		fname: 'Dimitris',
		lname: 'Mavroudis',
		gender: 'Male',
		jobTitle: 'Front End & Wordpress Developer',
		about: '<p>I am a front end developer with 3+ years experience, based in Thessaloniki, Greece.</p><p>I code and design high quality and fully responsive websites and web apps. I take great care to ensure an exceptional user experience while keeping it clean and efficient behind the scenes.</p><p>I enjoy constantly learning and improving my skills both in programming and design and I take every opportunity build something new.</p>',
		skills: [
			{
				name: 'WordPress',
				logo: 'assets/images/logos/wordpress.png',
				type: 'cms'
			},
			{
				name: 'Liferay',
				logo: 'assets/images/logos/wordpress.png',
				type: 'cms'
			},
			{
				name: 'Git',
				logo: 'assets/images/logos/git.png',
				type: 'tool'
			},
			{
				name: 'AngularJS',
				logo: 'assets/images/logos/angular.png',
				type: 'front-end'
			},
			{
				name: 'JQuery',
				logo: 'assets/images/logos/jquery.png',
				type: 'front-end'
			},
			{
				name: 'PHP',
				logo: 'assets/images/logos/php.png',
				type: 'back-end'
			},
			{
				name: 'Gulp',
				logo: 'assets/images/logos/gulp.png',
				type: 'tool',
			},
			{
				name: 'MySQL',
				logo: 'assets/images/logos/mysql.png',
				type: 'back-end'
			},
			{
				name: 'HTML5',
				logo: 'assets/images/logos/html5.png',
				type: 'front-end'
			},
			{
				name: 'TypeScript',
				logo: 'assets/images/logos/typecript.png',
				type: 'front-end'
			},
			{
				name: 'SASS',
				logo: 'assets/images/logos/sass.png',
				type: 'front-end'
			},
			{
				name: 'Bootstrap',
				logo: 'assets/images/logos/bootstrap.png',
				type: 'front-end'
			},
			{
				name: 'Photoshop',
				logo: 'assets/images/logos/photoshop.png',
				type: 'tool'
			}
		],
		worksFor: {name: 'Freelance', url: '', logo: ''},
		socialProfiles: [
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/dimitrismavroudis/',
			},
			{
				name: 'GitHub',
				url: 'https://github.com/dimavroudis',
			}
		]
	}
];
