import { Component, OnInit } from '@angular/core';
import { IHumanLanguageModel } from '../../../../backend/models/HumanLanguageModel';
import { ICodeLanguageModel } from '../../../../backend/models/CodeLanguageModel';
import { StoreService } from '../../../services/store.service';

@Component({
	selector: 'app-skills-languages-area',
	templateUrl: './skills-languages-area.component.html',
	styleUrls: ['./skills-languages-area.component.scss']
})
export class SkillsLanguagesAreaComponent implements OnInit {
	public IsStrippedBars: boolean;
	public HumanLanguages: Array<IHumanLanguageModel> = [];
	public CodeLanguages: Array<ICodeLanguageModel> = [];

	constructor(private store: StoreService) {
	}

	ngOnInit(): void {
		this.store.IsBarsStripped.subscribe(x => this.IsStrippedBars = x);
		this.store.LanguagesHuman.subscribe(x => this.HumanLanguages = x);
		this.store.LanguagesCode.subscribe(x => this.CodeLanguages = x);
	}
}
