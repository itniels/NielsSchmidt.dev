import { OsLanguageExperience } from '../enums/OsLanguageExperience';
import { OsType } from '../enums/OsType';

export interface IOperatingSystemModel {
	name: string;
	type: OsType;
	experience: OsLanguageExperience;
	relativePercent: number;
}

export class OperatingSystemModel implements IOperatingSystemModel {
	public name: string;
	public type: OsType;
	public experience: OsLanguageExperience;
	public relativePercent: number;
	public icon: string;

	constructor(name: string, type: OsType, experience: OsLanguageExperience, relativePercent: number, icon: string) {
		this.name = name;
		this.type = type;
		this.experience = experience;
		this.relativePercent = relativePercent;
		this.icon = icon;
	}
}
