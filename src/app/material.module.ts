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

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule], 
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule]
})

export class MaterialModule {} // Kada se klasa exportuje znaci da je postala public i da mozemo da je koristimo