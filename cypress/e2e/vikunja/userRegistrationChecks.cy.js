import * as app from '../../../framework'

describe('User registration errors checks', () => {
  it('User name empty error check', () => {
    app.page.UserRegistrationPage.visit()

    cy.wait(1000)

    app.page.UserRegistrationPage.clearFieldForGetErrorText('[id="username"]', 'some user name')
    app.page.UserRegistrationPage.getErrorText().contains('Введите имя пользователя.')
  })

  it('Email empty error check', () => {
    app.page.UserRegistrationPage.visit()

    cy.wait(1000)

    app.page.UserRegistrationPage.clearFieldForGetErrorText('[id="email"]', 'some email')
    app.page.UserRegistrationPage.getErrorText().contains('Введите корректный email адрес.')
  })

  it('Password empty error check', () => {
    app.page.UserRegistrationPage.visit()

    cy.wait(1000)

    app.page.UserRegistrationPage.clearFieldForGetErrorText('[id="password"]', 'some password')
    app.page.UserRegistrationPage.getErrorText().contains('Введите пароль.')
  })
})
