
class PageObject {

     FirstName = '[id="customer.firstName"]'
     LastName = '[id="customer.lastName"]'
     Address = '[id="customer.address.street"]'
     City = '[id="customer.address.city"]'
     State = '[id="customer.address.state"]'
     Zipcode = '[id="customer.address.zipCode"]'
     PhoneNumber = '[id="customer.phoneNumber"]'
     SSN = '[id="customer.ssn"]'
    UserName = ' [id="customer.username"]'
    Password = '[id="customer.password"]'
    RepeatPassword = '[id = "repeatedPassword"]'
    Register = '[value="Register"]'
    randomNum = Math.round(Math.random()*100)

    // creating methods for the class 

    visitbaseURL() {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('p > a').contains('Register'). click()

    }

    formFill(data) 
    {
        cy.get(this.FirstName).clear().type(data.FirstName);
        cy.get(this.LastName).clear().type(data.LastName);
        cy.get(this.Address).clear().type(data.Address);
        cy.get(this.City).clear().type(data.City);
        cy.get(this.State).clear().type(data.State);
        cy.get(this.Zipcode).clear().type(data.ZipCode);
        cy.get(this.PhoneNumber).clear().type(data.Phoneno);
        cy.get(this.SSN).clear().type(data.SSN); 
        cy.get(this.UserName).clear().type(data.Username + this.randomNum);
        cy.get(this.Password).clear().type(data.Password);
        cy.get(this.RepeatPassword).clear().type(data.Confirm);
    }

    register(data) {

        cy.get(this.Register).click()
        cy.get('.title').should('be.visible').should('have.text', `Welcome ${data.Username + this.randomNum}`)
    }


}

export const formregister = new PageObject()