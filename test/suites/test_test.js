import testt from "../page_model/testt"
const pagetest = new testt();
import paciente from "../page_model/paciente"
const pagepaciente = new paciente();



//Da correcto pero no es así no registra el usuario ya que no permite tomar la ubicacion del usuario.
fixture`Ejemplo page Object Model`
.page`http://localhost:9090/test`;
test.skip("Test", async (t) => {
  await t
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioNot)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioNot)
    .click(pagetest.submit)
    .click(pagetest.RadioNot)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioNot)
    .click(pagetest.submit)
    .click(pagetest.RadioNot)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .wait(100)
    .click(pagetest.RadioYes)
    .click(pagetest.submit)
    .click(pagetest.resultado)
    .wait(500)
    .click(pagetest.BtnRegistro)
    .wait(500)
    .click(pagepaciente.TypeDocument)
    .click(pagepaciente.TypeDocumentTI)
    .typeText(pagepaciente.NumberDocument, "3006369634")
    .typeText(pagepaciente.NamePatient, "Felipe Andrés")
    .typeText(pagepaciente.DireccionPatient, "Cal2le 52")
    .click(pagepaciente.DepartamentPatient)
    .click(pagepaciente.DepartamentPatientAnt)
    .click(pagepaciente.MunicipioPatient)
    .click(pagepaciente.MunicipioPatientMedellin)
    .typeText(pagepaciente.EmailPatients, "prueb96b@ccc.om")
    .typeText(pagepaciente.CelularPatients, "321263696")
    .typeText(pagepaciente.DatePatients, "2/21/1990")
    .click('body > app-home > app-patients > mat-card > agm-map > div.agm-map-container-inner.sebm-google-map-container-inner > div > div > div:nth-child(1) > div:nth-child(3)')
    .wait(100)
    .click(pagepaciente.SubmitPatientes)
    .wait(1000)
  /*  .expect(pagepaciente.ExpectPrueba.ng-reflect-disabled).eql('true')*/
});
