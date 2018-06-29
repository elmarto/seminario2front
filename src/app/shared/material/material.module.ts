import { NgModule } from '@angular/core';
import { MatNativeDateModule, MatSelectModule, MatDialogModule, MatSnackBarModule,
  MatSidenavModule, MatButtonModule, MatIconModule, MatTableModule, MatDatepickerModule,
  MatCheckboxModule, MatInputModule, MatButtonToggleModule, MatCardModule, MatProgressSpinnerModule,
  MatTooltipModule, MatRadioModule, MatGridListModule, MatTabsModule, MatPaginatorModule, MatChipsModule,
  MatSliderModule, MatExpansionModule, MatStepperModule, MatDividerModule, MatMenuModule} from '@angular/material';

  const MAT_MODULES = [
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    MatRadioModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule
  ];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class MaterialModule { }
