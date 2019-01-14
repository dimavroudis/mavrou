import {Component} from '@angular/core';
import {animate, query, style, transition, trigger} from '@angular/animations';
import {RouterOutlet} from '@angular/router';

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
			transition('* => HomePage', [
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
	title = 'mavrou';

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}
