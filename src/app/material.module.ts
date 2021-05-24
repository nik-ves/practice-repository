/*
U okviru ovog modula (material.module.ts)
registrovacemo komponente https://material.angular.io/

- dugme: https://material.angular.io/components/button/overview
*/

import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    imports: [MatButtonModule], 
    exports: [MatButtonModule]
})

export class MaterialModule {} // Kada se klasa exportuje znaci da je postala public i da mozemo da je koristimo