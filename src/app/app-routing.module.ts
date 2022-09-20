import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookListComponent } from './book-list/book-list.component';


 const routes: Routes = [
    { path: '', redirectTo: 'employee', pathMatch: 'full' },
    { path: 'books', component: BookListComponent },
    { path: 'add', component: AddBookComponent },
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  /* const routes: Routes = [
    { path: '', redirectTo: 'employee', pathMatch: 'full' },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'add', component: CreateEmployeeComponent },
    { path: 'update/:id', component: UpdateEmployeeComponent },
    { path: 'details/:id', component: EmployeeDetailsComponent },
  ]; */

 

}
