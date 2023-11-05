import { FormControl } from '@angular/forms';

export interface IDadosPessoaisFormGroup {
  nome: FormControl;
  sobrenome: FormControl;
  idade: FormControl;
  dataNascimento: FormControl;
  nomeMae: FormControl;
  nomePai: FormControl;
  cpf: FormControl;
  rg: FormControl;
}
