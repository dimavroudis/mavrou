import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-code-analysis',
	templateUrl: './code-analysis.component.html',
	styleUrls: ['./code-analysis.component.sass']
})

export class CodeAnalysisComponent implements OnInit {
	@Input() skills;
	data: Array<{ name: string, usage: number, subskill: any }> = [];

	constructor() {
	}

	ngOnInit() {
		this.skills.forEach((skill) => {
			let name, usage;
			const subskill = [];
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
			this.data.push({ name, usage, subskill });
		});
	}

}
