import * as app from '../../../framework'


describe('Проверка авторизации', () => {
  it('Успешно авторизовались', () => {
    app.page.SignIn.visit()

    cy.wait(1000)

    app.page.SignIn
        .fillEmail(app.config.credentials.email)
        .fillPassword(app.config.credentials.password)
        .submit()

    cy.url().should('eq', 'https://try.vikunja.io/')
  })
})
