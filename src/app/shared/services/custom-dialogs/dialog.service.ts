import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ComponentType} from '@angular/cdk/overlay';
import {LanguageService} from '../language.service';

/**
 * A service to control angular material dialog
 */

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog, private language: LanguageService) {
  }

  /**
   * Opens a material dialog
   * @param component The component needed to be inside the dialog
   * @param id Identifier for this dialog to control it "Should be unique"
   * @param data Optional Data to pass to the opened component
   * @param options
   */
  public openDialog(component: ComponentType<any>, id: string, data?: any, options: any = {}): MatDialogRef<any> {
    return this.dialog.open(component, {
      id: `dialog-${id}`,
      panelClass: `dialog-${id}-container`,
      backdropClass: `dialog-${id}-backdrop`,
      direction: this.language.isArabic ? 'rtl' : 'ltr',
      data,
      ...options
    });
  }

  /**
   * Close desired dialog
   * @param id The Id used to open the dialog
   * @param result The result after close
   */
  public closeDialog(id: string, result?: any): void {
    const dialog = this.dialog.getDialogById(`dialog-${id}`);
    if (dialog) {
      dialog.close(result);
    }
  }

}
