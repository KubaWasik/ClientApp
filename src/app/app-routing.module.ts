import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeCanActivateGuard } from 'src/api-authorization/authorize-can-activate.guard';
import { AuthorizeCanLoadGuard } from 'src/api-authorization/authorize-can-load.guard';

const routes: Routes = [
  {
    path: 'Admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    //canLoad: [AuthorizeCanLoadGuard],
  },
  {
    path: 'Contacts',
    loadChildren: () => import('./contacts/contacts.module').then((m) => m.ContactsModule),
    //canLoad: [AuthorizeCanLoadGuard],
  },
  {
    path: 'Home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'Items',
    loadChildren: () => import('./items/items.module').then((m) => m.ItemsModule),
    //canLoad: [AuthorizeCanActivateGuard],
  },
  {
    path: 'Tasks',
    loadChildren: () => import('./tasks/tasks.module').then((m) => m.TasksModule),
    //canLoad: [AuthorizeCanLoadGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
