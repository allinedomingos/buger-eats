
import register from "../page/registerPage";
import generatePerson from "../factories/GeneratorPerson";

var person = generatePerson.person();

Given("I'm on the start screen", () => {
	cy.openBrowser();
});

When("I click on register button", () => {
	register.accessForm();
});

Then("I'm directed to the registration form", () => {
	register.validForm();
    register.backHome();
});

Given("I'm on to the registration form", () => {
    register.accessForm();
	
});

When("I fill out a form with valid data", () => {
    register.fillForm(person);
	register.submitForm();
});

Then("I have my registration successfully completed.", () => {
	register.successMessage();
});
