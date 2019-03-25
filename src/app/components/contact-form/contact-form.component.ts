import {Component, Input, OnInit} from '@angular/core';
import {GLOBALS} from '../../globals';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {
	@Input() socialMedia: object;
	status = '';
	apiURL = GLOBALS.BASE_API_URL + '/' + GLOBALS.FORM_ENDPOINT + '?token=' + GLOBALS.TOKEN_API;

	constructor() {
	}

	onSubmit(form: any) {
		fetch(this.apiURL, {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				form: form
			})
		})
			.then(() => this.status = 'success')
			.catch(() => this.status = 'error');

	}

	ngOnInit() {
	}

}
