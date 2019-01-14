import {Component} from '@angular/core';
import {animate, group, query, style, transition, trigger} from '@angular/animations';
import {RouterOutlet} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass'],
	animations: [
		trigger('routeAnimations', [
			transition('* => Project', [
				query('img', style({ opacity: 0, animation: 'none'})
					, { optional: true }),
				query(':enter', [
						style({ opacity: 0 })
				], { optional: true }),
				query(':leave',  [
						animate('0ms', style({ visibility: 'hidden' }))
					], { optional: true }),
				query(':enter',  [
						style({ opacity: 0 }),
						animate('300ms 100ms', style({ opacity: 1 }))
					], { optional: true }),
				group([
					query(':enter img.laptop', [
						style({ transform: 'translateY(100px)' }),
						animate('1.5s ease-out', style({ transform: 'translateY(0px)', opacity: 1 })),
					], { optional: true }),
					query(':enter img.mobile', [
						style({ transform: 'translateY(100px)' }),
						animate('1.8s ease-out', style({ transform: 'translateY(0px)', opacity: 1 })),
					], { optional: true }),
				])
			]),
			transition('* => HomePage', [
				query(':enter', [
					style({ opacity: 0 })
				], { optional: true }),
				query(':leave',  [
					style({ opacity: 1 }),
					animate('300ms', style({ opacity: 0 }))
				], { optional: true }),
				query(':enter',  [
					style({ opacity: 0 }),
					animate('300ms 300ms', style({ opacity: 1 }))
				], { optional: true }),
			])
		])
	]
})

export class AppComponent {
	title = 'mavrou';
	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
	onDone() {
		const mockups = document.querySelectorAll('.screenshots img');
		mockups.forEach(element => {
			element.classList.add('float');
		});
	}
}
