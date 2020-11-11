import { Selector, t } from "testcafe";
export default class testt {
  constructor() {
    this.RadioYes = Selector('#mat-radio-2 > label > div.mat-radio-container > div.mat-radio-outer-circle');
    this.RadioNot = Selector('#mat-radio-3 > label > div.mat-radio-container > div.mat-radio-outer-circle');
    this.submit = Selector('body > app-home > app-test > mat-card > mat-card-actions > button');
    this.resultado = Selector('body > app-home > app-test > mat-card > button')
    this.BtnRegistro = Selector('body > app-home > app-test > mat-card > div.ng-star-inserted > button')
  }
}