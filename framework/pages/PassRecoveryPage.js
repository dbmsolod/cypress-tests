import * as app from '../index';

export default {

  visit () {
    cy.visit('https://try.vikunja.io/get-password-reset')
  },

  fillEmail (email) {
    const field = cy.get('[id="email"]')
    field.clear()
    field.type(email)

    return this;
  },

  submit () {
    cy.get('.button').contains('Отправить ссылку на сброс пароля').click()
  },

  getErrorText () {
    return cy.get('[class="message danger"]')
  }
}
