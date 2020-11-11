import { Selector, t } from "testcafe";
export default class paciente {
  constructor() {
    this.TypeDocument = Selector('body > app-home > app-patients > mat-card > mat-grid-list > div > mat-grid-tile:nth-child(1) > figure > mat-form-field');
    this.TypeDocumentTI = Selector('#mat-option-2');
    this.NumberDocument = Selector('#mat-input-0')
    this.NamePatient = Selector('#mat-input-1');
    this.DireccionPatient = Selector('#mat-input-2');
    this.DepartamentPatient = Selector('body > app-home > app-patients > mat-card > mat-grid-list > div > mat-grid-tile:nth-child(5) > figure > mat-form-field');
    this.DepartamentPatientAnt = Selector('#mat-option-5');
    this.MunicipioPatient = Selector('body > app-home > app-patients > mat-card > mat-grid-list > div > mat-grid-tile:nth-child(6)');
    this.MunicipioPatientMedellin = Selector('#mat-option-38');
    this.EmailPatients = Selector('#mat-input-3');
    this.CelularPatients = Selector('#mat-input-4');
    this.DatePatients = Selector('#mat-input-5');
    this.SubmitPatientes = Selector('body > app-home > app-patients > mat-card > button');
    this.ExpectPrueba = Selector('body > app-home > app-patients > mat-card > button > div.mat-ripple.mat-button-ripple')
    this.BtnIrGrapi = Selector('#btn-irgraficas')

    //SELECTORES DE LAS GRAFICAS
    this.ExpectPruebaGrafica = Selector('#canva_pxedades')
  }
}