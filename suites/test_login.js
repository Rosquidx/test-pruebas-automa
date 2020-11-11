import login from "../page_model/login";
import menu from "../page_model/menu";
import paciente from "../page_model/paciente"
const pagelogin = new login();
const selecmenu = new menu();
const pagepaciente = new paciente();

//Funcionando perfectamente.
fixture`Ejemplo page Object Model`
.page`http://localhost:9090`;
test.skip("Login", async (t) => {

  //Login usuario
  await t
  .click(selecmenu.displayMenu) // Ingresar al Menu
  .click(selecmenu.clickLogin) // Ingresar al  login
  .typeText(pagelogin.userName, "andresQuintero@gmail.com") // Ingresar Usuario
  .wait(10)
  .typeText(pagelogin.password, "5464164976") // Ingresar contraseña
  .wait(100)
  .click(pagelogin.submit) // click en Submit
  .wait(1000)
  .expect(pagelogin.GoGrafi.id).eql('btn-irgraficas')
  .wait(500)
});


  //Login usuario y estadisticas
  fixture`Ejemplo page Object Model`
  .page`http://localhost:9090`;
  test("Login de usuario y verificacion de estadisticas", async (t) => {
    await t
    .click(selecmenu.displayMenu) // Ingresar al Menu
    .click(selecmenu.clickLogin) // Ingresar al  login
    .typeText(pagelogin.userName, "andresQuintero@gmail.com") // Ingresar Usuario
    .wait(10)
    .typeText(pagelogin.password, "5464164976") // Ingresar contraseña
    .wait(100)
    .click(pagelogin.submit) // click en Submit

    .click(pagelogin.GoGrafi)
    .expect(pagepaciente.ExpectPruebaGrafica.id).eql('canva_pxedades')
  });



