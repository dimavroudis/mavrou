import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GLOBALS} from '../globals';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

	private skills: any;
	private baseURL = GLOBALS.BASE_API_URL;

	constructor(private route: ActivatedRoute) {
		this.skills = this.route.snapshot.data['skills']['entries'];

	}

	ngOnInit() {
	}

}
