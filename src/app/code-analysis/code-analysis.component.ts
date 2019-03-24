import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-code-analysis',
	templateUrl: './code-analysis.component.html',
	styleUrls: ['./code-analysis.component.sass']
})

export class CodeAnalysisComponent implements OnInit, AfterViewInit {
	@Input() skills;
	data: Array<object> = [];

	constructor() {
	}

	ngOnInit() {
		console.log(this.skills);
		this.skills.forEach((skill) => {
			let name, usage;
			let subskill = [];
			skill['value'].forEach(field => {
				if (field['field']['label'] === 'Skill') {
					name = field['value']['display'];
				}
				if (field['field']['label'] === 'Percentage') {
					usage = field['value'];
				}
				if (field['field']['label'] === 'SubSkill') {
					field['value'].forEach(subfield => {
						subskill.push(subfield['value']['display']);
					});
				}
			});
			this.data.push({name: name, usage: usage, subskill: subskill});
		});
	}

	ngAfterViewInit(): void {
		this.renderData();
	}

	renderData(): void {
		const graph = document.getElementById('codeGraph');

		this.data.forEach(skill => {
			const usage = skill['usage'] + '%';

			// Create Nodes
			const skillNode = document.createElement('div');
			const skillText = document.createTextNode(skill['name']);

			// Styling Nodes
			skillNode.style.width = usage;
			skillNode.classList.add(skill['name'].toLowerCase(), 'graphbar');

			// Appending Nodes
			skillNode.appendChild(skillText);

			let subskillText = '';
			if (Array.isArray(skill['subskill'])) {
				skill['subskill'].forEach((subskill, index) => {
					if (index > 0) {
						subskillText += ', ';
					}
					subskillText += subskill;
				});
				skillNode.dataset.hover = subskillText;
			}
			graph.appendChild(skillNode);
		});
	}
}
