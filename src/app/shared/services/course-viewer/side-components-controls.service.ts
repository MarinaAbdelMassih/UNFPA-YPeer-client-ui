import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MatDialog, MatDrawer} from "@angular/material";
import {LanguageService} from "../language.service";

@Injectable({
  providedIn: 'root'
})
export class SideComponentsControlsService {

  private curriculumDrawer: MatDrawer;
  public isCurriculumOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private isArabic: boolean = false;

  constructor(private dialog: MatDialog, private langService: LanguageService) {
    this.isArabic = this.langService.getIsArabic();
  }

  public setCurriculumDrawer(matDrawer: MatDrawer) {
    this.curriculumDrawer = matDrawer;
    this.curriculumDrawer._openedStream.subscribe(() => {
      this.isCurriculumOpen.next(this.curriculumDrawer.opened);
    });
    this.curriculumDrawer._closedStream.subscribe(() => {
      this.isCurriculumOpen.next(this.curriculumDrawer.opened);
    });
  }

  public toggleCurriculum(): void {
    this.curriculumDrawer.toggle()
  }

  public closeCurriculum(): void {
    this.curriculumDrawer.close();
  }

  openModal(stuff, component) {
    setTimeout(() => {
      this.dialog.open(component, {
        id: 'custom-dialog-' + stuff.id,
        panelClass: 'custom-modal-dialog-container',
        backdropClass: 'custom-modal-dialog-backdrop',
        direction: this.langService.getIsArabic() ? 'rtl' : 'ltr',
        data: stuff,
        disableClose: true
      });
    }, 500);
  }
}
