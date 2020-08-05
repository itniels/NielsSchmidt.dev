import { CodeLanguageType } from '../enums/CodeLanguageType';
import { CodeLanguageExperience } from '../enums/CodeLanguageExperience';

export interface ICodeLanguageModel {
	name: string;
	type: CodeLanguageType;
	experience: CodeLanguageExperience;
	relativePercent: number;
}

export class CodeLanguageModel implements ICodeLanguageModel {
	public name: string;
	public type: CodeLanguageType;
	public experience: CodeLanguageExperience;
	public relativePercent: number;
	public icon: string;

	constructor(name: string, type: CodeLanguageType, experience: CodeLanguageExperience, relativePercent: number, icon: string) {
		this.name = name;
		this.type = type;
		this.experience = experience;
		this.relativePercent = relativePercent;
		this.icon = icon;
	}
}
