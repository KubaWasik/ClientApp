import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [ContactsComponent],
  imports: [SharedModule, ContactsRoutingModule],
})
export class ContactsModule {}
