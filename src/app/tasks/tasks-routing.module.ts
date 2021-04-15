import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeCanActivateGuard } from 'src/api-authorization/authorize-can-activate.guard';
import { TasksComponent } from './tasks/tasks.component';

const tasksRoutes: Routes = [
  {
    path: '',
    component: TasksComponent,
    canActivate: [AuthorizeCanActivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(tasksRoutes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
