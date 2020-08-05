import { ContactFormMessageType } from '../enums/ContactFormMessageType';

export interface IContactFormModel {
	name: string;
	email: string;
	message: string;
	type: ContactFormMessageType;
}

export class ContactFormModel implements IContactFormModel {
	public name: string;
	public email: string;
	public message: string;
	public type: ContactFormMessageType;

	constructor() {
		this.type = ContactFormMessageType.None;
	}
}
