import {Component} from '@angular/core';
import {RouteNavigationService} from '../../services/route-navigation.service';

@Component({
	selector: 'projects-page',
	templateUrl: './projects-page.component.html',
	styleUrls: ['./projects-page.component.sass']
})
export class ProjectsPageComponent {

	constructor(public navigate: RouteNavigationService) {
	}

}
