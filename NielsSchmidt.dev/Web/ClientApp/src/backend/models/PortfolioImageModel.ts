export interface IPortfolioImageModel {
	src: string;
	caption: string;
}

export class PortfolioImageModel implements IPortfolioImageModel {
	public src: string;
	public caption: string;

	constructor(src: string, caption: string) {
		this.src = src;
		this.caption = caption;
	}
}
