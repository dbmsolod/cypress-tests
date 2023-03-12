import * as app from '../index';

export default {

  visit () {
    cy.visit('https://try.vikunja.io/login')
  },

  fillEmail (email) {
    const field = cy.get('[id="username"]')
    field.clear();
    field.type(email);

    return this;
  },

  fillPassword (password) {
    const field = cy.get('[id="password"]')
    field.clear();
    field.type(password);

    return this;
  },

  submit () {
    cy.get('.button').contains('Войти').click();
  },

  login (email, password) {
    this.visit()
    this.fillEmail(email)
    this.fillPassword(password)
    this.submit()
  }
}
