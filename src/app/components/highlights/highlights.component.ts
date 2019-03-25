import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-highlights',
	templateUrl: './highlights.component.html',
	styleUrls: ['./highlights.component.sass']
})

export class HighlightsComponent implements OnInit {
	@Input() highlights;
	data: Array<string> = [];

	constructor() {
	}

	ngOnInit() {
		this.highlights.forEach((highlight) => {
			if (highlight['field']['label'] === 'Highlight') {
				this.data.push(highlight['value']);
			}
		});
	}
}
