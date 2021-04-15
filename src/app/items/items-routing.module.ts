import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';

const itemsRoutes: Routes = [
  {
    path: '',
    component: ItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(itemsRoutes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
