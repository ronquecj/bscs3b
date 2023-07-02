import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ClientsComponent,
    DeliveryComponent,
  ],
  imports: [],
})

export class MainNavModule {}
