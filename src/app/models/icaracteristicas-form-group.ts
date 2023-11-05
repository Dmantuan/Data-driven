import { FormControl } from '@angular/forms';

export interface ICaracteristicasFormGroup {
  altura: FormControl;
  peso: FormControl;
  tipoSanguineo: FormControl;
  corPreferida: FormControl;
  signo: FormControl;
  animalPreferido: FormControl;
}
