import {AfterViewInit, Component} from '@angular/core';
import {RouteNavigationService} from '../route-navigation.service';

@Component({
	selector: 'app-projects-page',
	templateUrl: './projects-page.component.html',
	styleUrls: ['./projects-page.component.sass']
})
export class ProjectsPageComponent implements AfterViewInit {

	constructor(public navigate: RouteNavigationService) {
	}

	ngAfterViewInit() {
		this.navigate.setChildInit('typed');
	}


}
