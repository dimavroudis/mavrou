import {Component, Input, OnInit} from '@angular/core';
import {GLOBALS} from '../../globals';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
	selector: 'contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {
	@Input() socialMedia: object;
	status = 'idle';
	apiURL = GLOBALS.BASE_API_URL + '/' + GLOBALS.FORM_ENDPOINT + '?token=' + GLOBALS.TOKEN_API;

	constructor(private http: HttpClient) {
	}

	onSubmit(form: any) {
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		};
		this.status = 'sending';
		this.http.post(this.apiURL, {form}, httpOptions).subscribe(
			() => {
				this.status = 'success';
			},
			(err) => {
				this.status = 'error';
				console.log(err);
			}
		);

	}

	ngOnInit() {
	}

}
