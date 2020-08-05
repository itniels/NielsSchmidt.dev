import { Component, OnInit } from '@angular/core';
import { IContactFormModel, ContactFormModel } from '../../../backend/models/ContactFormModel';
import { ContactFormMessageType } from '../../../backend/enums/ContactFormMessageType';
import { StoreService } from '../../services/store.service';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';

@Component({
	selector: 'app-contact-area',
	templateUrl: './contact-area.component.html',
	styleUrls: ['./contact-area.component.scss']
})
export class ContactAreaComponent implements OnInit {
	public ContactFormMessageType = ContactFormMessageType;

	public ContactFormModel: IContactFormModel;
	public MessageSent: boolean;

	public get FormCanSend() { return this.AssertContactFormCanSend(); }

	constructor(private store: StoreService, private api: ApiService, private toast: ToastService) {
		this.ContactFormModel = new ContactFormModel();
	}

	ngOnInit(): void {

	}

	/**
	 * Send the message
	 * @method
	 * */
	public SendMessage(): void {
		console.log(this.ContactFormModel);

		this.api.PostData<IContactFormModel>('/Contact/SendMessage', this.ContactFormModel)
			.then((result) => {
				this.MessageSent = true;
				this.Clear();
				this.toast.SnackSuccess('Successfully sent your email!');
			})
			.catch((err) => {
				console.error('Failed to send message', err);
				this.toast.SnackError('Failed to send your email!');
			});
	}

	public Clear(): void {
		this.ContactFormModel = new ContactFormModel();
		this.toast.SnackDefault('Cleared the form');
	}

	/**
	 * Assert if form is ready to send
	 * @method
	 * */
	private AssertContactFormCanSend(): boolean {
		if (!this.ContactFormModel.name || this.ContactFormModel.name.length === 0)
			return false;

		if (!this.ContactFormModel.email || this.ContactFormModel.email.length === 0 || this.ContactFormModel.email.indexOf('@') < 0)
			return false;

		if (!this.ContactFormModel.message || this.ContactFormModel.message.length === 0)
			return false;

		if (this.ContactFormModel.type === ContactFormMessageType.None)
			return false;

		return true;
	}
}
