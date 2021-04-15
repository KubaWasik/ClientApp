import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {}
