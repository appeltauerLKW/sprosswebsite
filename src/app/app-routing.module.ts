import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OderpageComponent } from './oderpage/oderpage.component';
import { ConfirmpageComponent } from './confirmpage/confirmpage.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'orderpage', component: OderpageComponent },
  { path: 'confirmpage', component: ConfirmpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
