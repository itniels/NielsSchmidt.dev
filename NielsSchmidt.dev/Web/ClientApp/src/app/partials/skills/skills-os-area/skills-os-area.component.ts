import { Component, OnInit } from '@angular/core';
import { IOperatingSystemModel } from '../../../../backend/models/OperatingSystemModel';
import { StoreService } from '../../../services/store.service';

@Component({
	selector: 'app-skills-os-area',
	templateUrl: './skills-os-area.component.html',
	styleUrls: ['./skills-os-area.component.scss']
})
export class SkillsOsAreaComponent implements OnInit {
	public IsStrippedBars: boolean;
	public OperatingSystems: Array<IOperatingSystemModel>;

	constructor(private store: StoreService) {
	}

	ngOnInit(): void {
		this.store.IsBarsStripped.subscribe(x => this.IsStrippedBars = x);
		this.store.OperatingSystems.subscribe(x => this.OperatingSystems = x);
	}
}
