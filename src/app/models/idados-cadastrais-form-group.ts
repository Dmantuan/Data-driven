import { FormControl } from '@angular/forms';

export interface IDadosCadastraisFormGroup {
  nomeUsuario: FormControl;
  nomePai: FormControl;
  email: FormControl;
  senha: FormControl;
  ddd: FormControl;
  celular: FormControl;
}
