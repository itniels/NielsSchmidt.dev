import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
	selector: 'app-personal-area',
	templateUrl: './personal-area.component.html',
	styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit {
	public CurrentAge: number;
	public TotalWorkTime: number;
	public TotalRelationshipTime: number;

	constructor() { }

	ngOnInit(): void {
		// Set my current age on load
		this.CurrentAge = this.CalculateMyAge();
		this.TotalWorkTime = this.CalculateWorkTime();
		this.TotalRelationshipTime = this.CalculateRelationshipTime();
	}

	private CalculateMyAge(): number {
		const today = moment();
		const birthdate = moment('1983-03-11', 'YYYY-mm-dd');

		return today.diff(birthdate, 'years');
	}

	private CalculateWorkTime(): number {
		const today = moment();
		const from = moment('2017-01-16', 'YYYY-mm-dd');

		return today.diff(from, 'years');
	}

	private CalculateRelationshipTime(): number {
		const today = moment();
		const from = moment('2016-03-01', 'YYYY-mm-dd');

		return today.diff(from, 'years');
	}
}
