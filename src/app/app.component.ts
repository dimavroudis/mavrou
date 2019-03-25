import {Component} from '@angular/core';
import {animate, query, style, transition, trigger} from '@angular/animations';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {RouteNavigationService} from './route-navigation.service';
import Typed from 'typed.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	animations: [
		trigger('routeAnimations', [
			transition('* => Project', [
				query(':enter', [
					style({opacity: 0})
				], {optional: true}),
				query(':leave', [
					animate('0ms', style({visibility: 'hidden'}))
				], {optional: true}),
				query(':enter', [
					style({opacity: 0}),
					animate('300ms 100ms', style({opacity: 1}))
				], {optional: true}),
			]),
			transition('* => *', [
				query(':enter', [
					style({opacity: 0})
				], {optional: true}),
				query(':leave', [
					style({opacity: 1}),
					animate('300ms', style({opacity: 0}))
				], {optional: true}),
				query(':enter', [
					style({opacity: 0}),
					animate('300ms 300ms', style({opacity: 1}))
				], {optional: true}),
			])
		])
	]
})

export class AppComponent {

	typed: Typed;

	constructor(private router: Router, public navigate: RouteNavigationService) {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				(<any>window).gtag('config', 'UA-79194198-1', {'page_path': event.urlAfterRedirects});
				this.animateOnView();
			}
		});
		this.navigate.childInit$.subscribe(data => {
				if (data === 'typed' || data === undefined) {
					this.typed = new Typed('#typed', {
						stringsElement: '#typed-strings',
						typeSpeed: 60
					});
				}
				if (data === 'animate' || data === undefined) {
					this.animateOnView();
				}
			}
		);
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}

	animateOnView() {
		const elements = document.querySelectorAll('.animate');
		elements.forEach(element => {
			element.classList.remove('animate');
		});
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					entry.target.setAttribute('style', '');
				} else {
					entry.target.setAttribute('style', 'animation:none');
				}
				entry.target.classList.remove('animate');
			});
		});

		elements.forEach(element => {
			observer.observe(element);
		});
	}
}
