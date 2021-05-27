/*
U okviru ovog modula (material.module.ts)
registrovacemo komponente https://material.angular.io/

- dugme: https://material.angular.io/components/button/overview
*/

import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button'; // Button
import { MatIconModule } from '@angular/material/icon'; // Icons 
import { MatFormFieldModule } from '@angular/material/form-field'; // Form
import { MatInputModule } from '@angular/material/input'; // Input
import { MatDatepickerModule } from '@angular/material/datepicker'; // Datepicker
import { MatNativeDateModule } from '@angular/material/core'; // Potrebno za brojeve iz datepickera, ne moze jedno bez drugog
import { MatCheckboxModule } from '@angular/material/checkbox'; // Checkbox
import { MatSidenavModule } from '@angular/material/sidenav'; // Sidenav
import { MatToolbarModule } from '@angular/material/toolbar'; // Toolbar
import { MatListModule } from '@angular/material/list'; // Lista za sidenav
import { MatTabsModule } from '@angular/material/tabs'; // Tabovi
import { MatCardModule } from '@angular/material/card'; // Cards
import { MatSelectModule } from '@angular/material/select'; // Padajuci meni
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Spinner
import { MatTableModule } from '@angular/material/table'; // Tabela
import { MatSortModule } from '@angular/material/sort'; // Sortiranje u hederu tabele


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule
  ],
})
export class MaterialModule {} // Kada se klasa exportuje znaci da je postala public i da mozemo da je koristimo