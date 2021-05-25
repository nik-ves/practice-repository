/*
U okviru ovog modula (material.module.ts)
registrovacemo komponente https://material.angular.io/

- dugme: https://material.angular.io/components/button/overview
*/

import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button'; // Button
import { MatIconModule } from '@angular/material/icon'; // Icons




@NgModule({
    imports: [MatButtonModule, MatIconModule], 
    exports: [MatButtonModule, MatIconModule]
})

export class MaterialModule {} // Kada se klasa exportuje znaci da je postala public i da mozemo da je koristimo