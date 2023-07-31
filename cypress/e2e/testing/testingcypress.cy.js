/// <reference types="cypress" />
import userdata from "../../fixtures/datainfo.json"

const randomNum = Math.round(Math.random()*100)

describe('test', () => {
    
    it('registration form', () => {


        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('p > a').contains('Register'). click()
        cy.get('[id="customer.firstName"]').clear().type(userdata.FirstName)
        cy.get('[id="customer.lastName"]').clear().type(userdata.LastName)
        cy.get('[id="customer.address.street"]').clear().type(userdata.Address)
        cy.get('[id="customer.address.city"]').clear().type(userdata.City)
        cy.get('[id="customer.address.state"]').clear().type(userdata.State)
        cy.get('[id="customer.address.zipCode"]').clear().type(userdata.ZipCode)
        cy.get('[id="customer.phoneNumber"]').clear().type(userdata.Phoneno)
        cy.get('[id="customer.ssn"]').clear().type(userdata.SSN)
        cy.get('[id="customer.username"]').clear().type(userdata.Username + randomNum)
        cy.get('[id="customer.password"]').clear().type(userdata.Password)
        cy.get('[id = "repeatedPassword"]').clear().type(userdata.Confirm)
        cy.get('[value="Register"]').click()
        cy.wait(2000)
        cy.get('.title').should('be.visible').should('have.text', `Welcome ${userdata.Username+randomNum}`)


    });
});
