import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NoSuchPathComponent } from './no-such-path/no-such-path.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/list'},
  {path:'list',component:ContactsListComponent},
  {path:'add',component:ContactFormComponent},
  {path:'edit/:id',component:ContactFormComponent},
  {path:'**',component:NoSuchPathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
