import { DevToolType } from '../enums/DevToolType';
import { DevToolExperience } from '../enums/DevToolExperience';

export interface IDevToolModel {
	name: string;
	type: DevToolType;
	experience: DevToolExperience;
	relativePercent: number;
}

export class DevToolModel implements IDevToolModel {
	public name: string;
	public type: DevToolType;
	public experience: DevToolExperience;
	public relativePercent: number;
	public icon: string;

	constructor(name: string, type: DevToolType, experience: DevToolExperience, relativePercent: number, icon: string) {
		this.name = name;
		this.type = type;
		this.experience = experience;
		this.relativePercent = relativePercent;
		this.icon = icon;
	}
}
