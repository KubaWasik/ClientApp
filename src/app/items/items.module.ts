import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [ItemsComponent],
  imports: [SharedModule, ItemsRoutingModule],
})
export class ItemsModule {}
