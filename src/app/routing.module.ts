/* 
Routing module / ruter izmedju komponenti / navigacija izmedju komponenti
https://angular.io/guide/router
Cesto nazivan i: app-routing.module.ts
*/

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { TrainingComponent } from "./training/training.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const rutiranje: Routes = [
    {path : '', component: WelcomeComponent}, // Welcome componenta ce se prva prikazati zbog praznog stringa ('')
    {path : 'training', component: TrainingComponent},
    {path : 'login', component: LoginComponent},
    {path : 'signup', component: SignupComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(rutiranje)],
    exports: [RouterModule]
})

export class RoutingModule {}