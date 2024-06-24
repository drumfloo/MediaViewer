import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GridContentComponent } from '../grid-content/grid-content.component';

import { ComService } from '../../services/com.service';

@Component({
  selector: 'app-dialog',
  standalone: false,
  //imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  //readonly ref: MatDialogRef<DialogComponent> = inject(MatDialogRef<DialogComponent>);
  readonly data: any = inject<any>(MAT_DIALOG_DATA);
  //readonly title: any = inject<any>(MAT_DIALOG_DATA);

  
}
