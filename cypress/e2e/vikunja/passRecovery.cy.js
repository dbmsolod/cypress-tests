import * as app from '../../../framework'

describe('Password recovery', () => {
  it('User does not exist', () => {
    app.page.PassRecoveryPage.visit()

    cy.wait(1000)

    app.page.PassRecoveryPage
        .fillEmail(app.config.credentials.recoveryEmail)
        .submit()

    app.page.PassRecoveryPage.getErrorText().contains('The user does not exist.')
  })

  it('Empty email error', () => {
    app.page.PassRecoveryPage.visit()

    app.page.PassRecoveryPage
        .submit()

    app.page.PassRecoveryPage.getErrorText().contains('Please specify a username and a password.')
  })
})
