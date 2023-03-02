import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { ToolBarComponent } from '../components/tool-bar/tool-bar.component';


@NgModule({
  declarations: [
    SideBarComponent,
    ToolBarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    MatExpansionModule,
    MatSidenavModule,

  ],
  exports:[

    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    MatExpansionModule,
    MatSidenavModule,

    MatSidenavModule,
    SideBarComponent,
    ToolBarComponent,

  ]
})
export class SharedModule { }
