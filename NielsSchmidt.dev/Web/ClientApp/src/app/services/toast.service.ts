import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})
export class ToastService {

	constructor(private snackBar: MatSnackBar) { }

	public SnackDefault(msg: string, duration: number = 3000): void {
		this.snackBar.open(msg, null, { duration: duration, panelClass: ['snack-bottom'] });
	}

	public SnackSuccess(msg: string, duration: number = 3000): void {
		this.snackBar.open(msg, null, { duration: duration, panelClass: ['snack-bottom', 'snack-success'] });
	}

	public SnackWarning(msg: string, duration: number = 3000): void {
		this.snackBar.open(msg, null, { duration: duration, panelClass: ['snack-bottom', 'snack-warning'] });
	}

	public SnackError(msg: string, duration: number = 3000): void {
		this.snackBar.open(msg, null, { duration: duration, panelClass: ['snack-bottom', 'snack-error'] });
	}
}
