import { Component, OnInit } from '@angular/core';
import { IPortfolioImageModel, PortfolioImageModel } from '../../../../backend/models/PortfolioImageModel';

@Component({
	selector: 'app-portfolio-web-nikachat',
	templateUrl: './portfolio-web-nikachat.component.html',
	styleUrls: ['./portfolio-web-nikachat.component.scss']
})
export class PortfolioWebNikachatComponent implements OnInit {
	public Images: Array<IPortfolioImageModel> = [];

	constructor() { }

	ngOnInit(): void {
		this.Images = this.GetImages();
	}

	private GetImages(): Array<IPortfolioImageModel> {
		return [
			new PortfolioImageModel('/img/portfolio/nikachat/login.png', 'Login screen'),
			new PortfolioImageModel('/img/portfolio/nikachat/main_nocall.png', 'Main interface without joining'),
			new PortfolioImageModel('/img/portfolio/nikachat/main_joined.png', 'Main interface joined'),
			new PortfolioImageModel('/img/portfolio/nikachat/switch.png', 'Main interface on another device when joined'),
			new PortfolioImageModel('/img/portfolio/nikachat/chat.png', 'Chat open'),
			new PortfolioImageModel('/img/portfolio/nikachat/youtube1.png', 'Youtube player'),
			new PortfolioImageModel('/img/portfolio/nikachat/youtube2.png', 'Youtube player'),
			new PortfolioImageModel('/img/portfolio/nikachat/plex.png', 'Embeded Plex client'),
			new PortfolioImageModel('/img/portfolio/nikachat/tablet.png', 'Tablet view'),
			new PortfolioImageModel('/img/portfolio/nikachat/mobile.png', 'Mobile view'),
		];
	}
}
