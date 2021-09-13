import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ClientRoutingModule } from './client-routing.module';
import { MaterialModule } from '../material/material.module';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';

@NgModule({
  declarations: [
    BuscarComponent,
    ClienteComponent,
    HomeComponent,
    ListadoComponent,
    AgregarComponent,
    AccountCardComponent,
    CreditCardComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class ClientModule {}
