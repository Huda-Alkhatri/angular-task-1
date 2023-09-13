import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes: Routes = [
  {path:'', component:FirstpageComponent},
  {path:'student', component:StudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
