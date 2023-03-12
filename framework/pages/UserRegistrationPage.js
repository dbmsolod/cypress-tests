import * as app from '../index';

export default {

  visit () {
    cy.visit('https://try.vikunja.io/register')
    cy.get('[class="title"]').contains('Создать аккаунт')
  },

  clearFieldForGetErrorText(fieldSelector, text) {
      const field = cy.get(fieldSelector)
      field.type(text)
      field.clear()
      // cy.get('[id="email"]').focus()
      cy.get(fieldSelector).blur()
  },

  getErrorText () {
    return cy.get('[class="help is-danger"]')
  }

  //   return this;
  // },
  //
  // submit () {
  //   cy.get('.button').contains('Отправить ссылку на сброс пароля').click()
  // },
}
