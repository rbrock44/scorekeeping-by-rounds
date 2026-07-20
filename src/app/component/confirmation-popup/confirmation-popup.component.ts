import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation-popup',
    template: `
    <div data-border-div>
      <div data-popup-ctn>
        <div data-question-label class="confirm-label">{{label}}</div>
        <div data-perform-action class="confirm-label">{{PERFORM_THIS_ACTION}}</div>
        <div class="button-div">
          <button data-confirm-button mat-stroked-button
                  type="button"
                  (click)="closeDialog(true)">
            Confirm
          </button>
          <button type="button" data-cancel-button mat-stroked-button (click)="closeDialog(false)">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {
  data = inject(MAT_DIALOG_DATA);
  dialogRef = inject<MatDialogRef<ConfirmationPopupComponent>>(MatDialogRef);

  PERFORM_THIS_ACTION: string = 'Are you sure you want to perform this action?';

  label: string;

  constructor() {
    this.dialogRef.disableClose = true;
  }

  ngOnInit() {
    if (this.data) {
      this.label = this.data.label;
    }
  }

  closeDialog(shouldPerformAction: boolean): void {
    this.dialogRef.close(shouldPerformAction);
  }

}
