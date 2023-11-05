import { FormControl } from '@angular/forms';

export interface IEnderecoFormGroup {
  rua: FormControl;
  bairro: FormControl;
  numero: FormControl;
  cidade: FormControl;
  logradouro: FormControl;
  estado: FormControl;
  cep: FormControl;
  pontoReferencia: FormControl;
}
