import login from "../page_model/login";
import menu from "../page_model/menu";
import medical from "../page_model/medical";
const pagelogin = new login();
const selecmenu = new menu();
const pagemedical = new medical();

//Funciona correctamente
fixture`Ejemplo page Object Model`.page`http://localhost:9090/`;
test.skip("Registrar un medico", async (t) => {
  await t
    .click(selecmenu.displayMenu) // Ingresar al Menu
    .click(selecmenu.clickLogin) // Ingresar al  login
    .typeText(pagelogin.userName, "admin@admin") // Ingresar Usuario
    .wait(10)
    .typeText(pagelogin.password, "admin") // Ingresar contraseña
    .wait(10)
    .click(pagelogin.submit) // click en Submit
    .wait(10)
    .click(pagemedical.clickButtonNew) //Click button new
    .typeText(pagemedical.sendNumberMedical, "10063952") // Send Name
    .typeText(pagemedical.sendFullName, "Johan Ferrer")
    .wait(100)
    .typeText(pagemedical.sendEmail, "EnemigoFerrer@gmio.com")
    .click(pagemedical.sendState)
    .click(pagemedical.sendStateActivo)
    .typeText(pagemedical.sendPhone, "362533612")
    .click(pagemedical.sendDocumentType)
    .click(pagemedical.sendDocumentCedula)
    .click("body > app-home > app-medical > div > div > button:nth-child(2)")
    .wait(500)
    .expect(pagemedical.BtnEsperado.id)
    .eql("btn-prueba"); // Comprobar resultado
});

//Funciona correctamente
fixture`Ejemplo page Object Model`.page`http://localhost:9090/`;
test.skip("Editar contraseña de un medico", async (t) => {
  await t
    .click(selecmenu.displayMenu) // Ingresar al Menu
    .click(selecmenu.clickLogin) // Ingresar al  login
    .typeText(pagelogin.userName, "admin@admin") // Ingresar Usuario
    .wait(10)
    .typeText(pagelogin.password, "admin") // Ingresar contraseña
    .wait(10)
    .click(pagelogin.submit) // click en Submit
    .wait(10)
    .click(pagemedical.ClickEditUserMedical) //Click button new
    .typeText(pagemedical.sendPasswordMedical, "juan22233") // Send Name
    .typeText(pagemedical.sendConfirmPassMedical, "juan22233")
    .click(pagemedical.ClickSaveEditMedical)
    .expect(pagemedical.BtnEsperado.id)
    .eql("btn-prueba"); // Comprobar resultado
});

//Funciona perfectamente
fixture`Ejemplo page Object Model`.page`http://localhost:9090/`;
test.skip("Editar estado e info de un paciente desde un perfil medico", async (t) => {
  await t
    .click(selecmenu.displayMenu) // Ingresar al Menu
    .click(selecmenu.clickLogin) // Ingresar al  login
    .typeText(pagelogin.userName, "fvi@gmail.com") // Ingresar Usuario
    .wait(10)
    .typeText(pagelogin.password, "123456789") // Ingresar contraseña
    .wait(10)
    .click(pagelogin.submit) // click en Submit
    .wait(10)
    .click(pagemedical.BtnSeeTracing) //Click boton ver
    .click(pagemedical.DetailTracing)
    .click(pagemedical.BtnNewTracing)
    .typeText(pagemedical.CheckTracing, "Oidos")
    .typeText(pagemedical.MedicationTracing, "Acetaminofen")
    .typeText(pagemedical.EvolutionTracing, "Mejor")
    .click(pagemedical.BtnSaveDetailTracing)
    /*.click(pagemedical.DataPatientTracing)
  .click(pagemedical.StateTracing)
  .click(pagemedical.StateDieTracing)
  .click(pagemedical.BtnSaveDataTracing)*/
    .click(pagemedical.BtnClosedTracing)
    .expect(pagemedical.SeePruebaExpect.id)
    .eql("btn-see"); // Comprobar resultado
});
