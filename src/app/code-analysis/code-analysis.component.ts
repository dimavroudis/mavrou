import {AfterViewInit, Component, OnInit} from '@angular/core';

import {ProjectService} from '../project.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
	selector: 'app-code-analysis',
	templateUrl: './code-analysis.component.html',
	styleUrls: ['./code-analysis.component.sass']
})

export class CodeAnalysisComponent implements OnInit, AfterViewInit {

	data: Object;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private projectService: ProjectService
	) {
	}

	ngOnInit() {
		this.getCodeData();
	}

	ngAfterViewInit(): void {
		this.renderData();
	}

	getCodeData(): void {
		const id = this.route.snapshot.paramMap.get('id');
		this.projectService.getCodeData(id).subscribe(data => this.data = data);
	}

	renderData(): void {
		const graph = document.getElementById('codeGraph');

		for (const key of Object.keys(this.data)) {
			const usage = this.data[key].usage + '%';

			// Create Nodes
			const skillNode = document.createElement('div');
			const skillText = document.createTextNode(this.data[key].name);

			// Styling Nodes
			skillNode.style.width = usage;
			skillNode.classList.add(this.data[key].name.toLowerCase(), 'graphbar');

			// Appending Nodes
			skillNode.appendChild(skillText);

			let detailsText = '';
			if (this.data[key].details) {
				const dkeys = Object.keys(this.data[key].details);
				for (const dkey of dkeys) {
					if (parseInt(dkey, 10) > 0) {
						detailsText += ', ';
					}
					detailsText += this.data[key].details[dkey].name;
				}
				skillNode.dataset.hover = detailsText;
			}
			graph.appendChild(skillNode);
		}
	}
}
