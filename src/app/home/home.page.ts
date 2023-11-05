import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SwiperContainer } from 'swiper/element';
import { IDadosPessoaisFormGroup } from '../models/idados-pessoais-form-group';
import { IDadosCadastraisFormGroup } from '../models/idados-cadastrais-form-group';
import { IEnderecoFormGroup } from '../models/iendereco-form-group';
import { ICaracteristicasFormGroup } from '../models/icaracteristicas-form-group';

/*
  NOTES:
    Set attributes of swiper-container
      element.setAttribute('allow-slide-prev', 'false');
    
    Access swiper in swiper-container 
      console.log(element.swiper.activeIndex);
    
    One way to add event in swiper
      - event name is different from swiper and ionic documentation
      this.swiperContainer.addEventListener('swiperslidechange', (event) => {
        this.onSlideChange();
      });
  
  TODO:
    - Add validation in FormControls
    - Necessary add button for pass slides?? or just actions is enough
      -> we can use allowSlidePrev and allowSlideNext to restrict slidesChanges and toasts for notify the user
*/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  swiperContainer!: SwiperContainer;
  index: number = 0;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      dadosPessoais: this.buildDadosPessoaisGroup(),
      dadosCadastrais: this.buildDadosCadastraisGroup(),
      endereco: this.buildEnderecoGroup(),
      caracteristicas: this.buildCaracteristicaGroup(),
    });
  }

  ngAfterViewInit(): void {
    this.swiperContainer = document.querySelector<SwiperContainer>('#swiper')!;
  }

  private buildDadosPessoaisGroup(): FormGroup<IDadosPessoaisFormGroup> {
    return this.formBuilder.group({
      nome: [null],
      sobrenome: [null],
      idade: [null],
      dataNascimento: [null],
      nomeMae: [null],
      nomePai: [null],
      cpf: [null],
      rg: [null],
    });
  }

  private buildDadosCadastraisGroup(): FormGroup<IDadosCadastraisFormGroup> {
    return this.formBuilder.group({
      nomeUsuario: [null],
      nomePai: [null],
      email: [null],
      senha: [null],
      ddd: [null],
      celular: [null],
    });
  }

  private buildEnderecoGroup(): FormGroup<IEnderecoFormGroup> {
    return this.formBuilder.group({
      rua: [null],
      bairro: [null],
      numero: [null],
      cidade: [null],
      logradouro: [null],
      estado: [null],
      cep: [null],
      pontoReferencia: [null],
    });
  }

  private buildCaracteristicaGroup(): FormGroup<ICaracteristicasFormGroup> {
    return this.formBuilder.group({
      altura: [null],
      peso: [null],
      tipoSanguineo: [null],
      corPreferida: [null],
      signo: [null],
      animalPreferido: [null],
    });
  }

  onSlideChange(): void {
    this.index = this.swiperContainer.swiper.activeIndex;
  }
}
