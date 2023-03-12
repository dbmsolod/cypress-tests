import * as app from '../../../framework'
import UserMenu from "../../../framework/elements/UserMenu";


describe('Logout from account', () => {
  it('Logout via user name', () => {
    app.page.SignIn.visit()
    app.page.SignIn.login(app.config.credentials.email, app.config.credentials.password)
    cy.url().should('eq', 'https://try.vikunja.io/')
    cy.wait(1000)

    UserMenu.openMenu()
    cy.wait(1000)
    UserMenu.menuItemClick('span','Выйти')

    cy.url().should('eq', 'https://try.vikunja.io/login')
  })
})