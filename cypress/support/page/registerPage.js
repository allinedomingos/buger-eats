class registerPage{

    
    accessForm(){
        cy.get('[href="/deliver"]').click();
        cy.get('form h1').should('be.visible');
    }

    validForm(){
        cy.get('form h1').should('be.visible').contains('Cadastre-se para fazer entregas');
        cy.screenshot();

    }

    backHome(){
        cy.get('[href="/"]').click();
        cy.get('[alt="Buger Eats"]').should('be.visible');
    }

    fillForm(person){

        cy.get('[name="fullName"]').type(person.name);
        cy.get('[name="cpf"]').type(person.document);
        cy.get('[name="email"]').type(person.email);
        cy.get('[name="whatsapp"]').type(person.phone);

        cy.get('[name="postalcode"]').type(person.address.code)
        cy.get('[value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(person.address.number)
        cy.get('input[name="address-details"]').type(person.address.details)

        cy.get('input[name="address"]').should('have.value', person.address.street)
        cy.get('input[name="district"]').should('have.value', person.address.city)
        cy.get('input[name="city-uf"]').should('have.value', person.address.state)

        cy.contains('.delivery-method li', person.delivery_type).click()
        cy.get('input[accept^="image"]').attachFile('/images/' + person.cnh)
    }


    submitForm() {
        cy.get('[type="submit"]').click()
    }

    successMessage() {
        cy.get('[class="swal2-html-container"]').should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.');
        cy.screenshot();
    }

    alertMessage() {
        cy.get('.alert-error').should('be.visible').invoke('text').then((errText => {
            expect(errText).to.be.oneOf([
                'Oops! CPF inválido',
                'Oops! Email com formato inválido.',
                'É necessário informar o nome',
                'É necessário informar o CPF',
                'É necessário informar o email',
                'É necessário informar o CEP',
                'É necessário informar o número do endereço',
                'Selecione o método de entrega',
                'Adicione uma foto da sua CNH'
                
            ]);
        }));

        cy.screenshot();

    }




} export default new registerPage;