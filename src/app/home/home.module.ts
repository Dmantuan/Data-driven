import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DadosPessoaisComponent } from '../components/dados-pessoais/dados-pessoais.component';
import { CaracteristicasComponent } from '../components/caracteristicas/caracteristicas.component';
import { DadosCadastraisComponent } from '../components/dados-cadastrais/dados-cadastrais.component';
import { EnderecoComponent } from '../components/endereco/endereco.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    DadosPessoaisComponent,
    CaracteristicasComponent,
    DadosCadastraisComponent,
    EnderecoComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
