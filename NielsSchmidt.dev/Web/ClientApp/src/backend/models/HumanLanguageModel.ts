import { HumanLanguageLevel } from '../enums/HumanLanguagelevel';

export interface IHumanLanguageModel {
	name: string;
	spoken: HumanLanguageLevel;
	written: HumanLanguageLevel;
	flagCode: string;
}

export class HumanLanguageModel implements IHumanLanguageModel {
	public name: string;
	public spoken: HumanLanguageLevel;
	public written: HumanLanguageLevel;
	public flagCode: string;

	constructor(name: string, spoken: HumanLanguageLevel, written: HumanLanguageLevel, flagCode: string) {
		this.name = name;
		this.spoken = spoken;
		this.written = written;
		this.flagCode = flagCode;
	}
}
