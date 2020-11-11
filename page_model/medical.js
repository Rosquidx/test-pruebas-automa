import { Selector, t } from "testcafe";
export default class medical {
  constructor() {
    this.clickButtonNew = Selector('body > app-home > app-medical > div > button > span');
    this.sendNumberMedical = Selector('#mat-input-3')
    this.sendFullName = Selector('#mat-input-4')
    this.sendEmail = Selector('#mat-input-5')
    this.sendState = Selector('body > app-home > app-medical > div > div > mat-grid-list > div > mat-grid-tile:nth-child(4) > figure > mat-form-field')
    this.sendStateActivo = Selector('#mat-option-0 > span')
    this.sendPhone = Selector('#mat-input-6')
    this.sendDocumentType = Selector ('body > app-home > app-medical > div > div > mat-grid-list > div > mat-grid-tile:nth-child(6) > figure > mat-form-field')
    this.sendDocumentCedula = Selector('#mat-option-4 > span')

    //Editar el usuario de un medico
    this.ClickEditUserMedical = Selector('body > app-home > app-medical > div > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-user.mat-column-user.ng-star-inserted > button')
    this.sendPasswordMedical = Selector('#mat-input-4')
    this.sendConfirmPassMedical = Selector('#mat-input-5')
    this.ClickSaveEditMedical = Selector ('body > app-home > app-medical > div > div > button:nth-child(2)')
    this.BtnEsperado = Selector('#btn-prueba')
    
    //Medico hace un tracing a un paciente
    this.BtnSeeTracing = Selector('body > app-home > app-tracing > div > table > tbody > tr > td.mat-cell.cdk-cell.cdk-column-action.mat-column-action.ng-star-inserted > button')
    this.DetailTracing = Selector('#mat-expansion-panel-header-1')
    this.DataPatientTracing = Selector('#mat-expansion-panel-header-0')
    this.BtnNewTracing = Selector('#cdk-accordion-child-1 > div > button')
    this.CheckTracing = Selector('#mat-input-10')
    this.MedicationTracing = Selector('#mat-input-11')
    this.EvolutionTracing = Selector('#mat-input-12')
    this.BtnSaveDetailTracing = Selector('#cdk-accordion-child-1 > div > button:nth-child(4)')
    this.StateTracing = Selector('#cdk-accordion-child-0 > div > mat-grid-list > div > mat-grid-tile:nth-child(9) > figure > mat-form-field')
    this.StateDieTracing = Selector('#mat-option-5')
    this.BtnSaveDataTracing = Selector('#cdk-accordion-child-0 > div > button')
    this.SeePruebaExpect = Selector('#btn-see')
    this.BtnClosedTracing = Selector('body > app-home > app-tracing > div > mat-accordion > button')
  }
}