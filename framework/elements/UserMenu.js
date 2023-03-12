export default {
  get () {
    return cy.get('[class="username"]')
  },

  openMenu () {
    const menu = this.get();
    menu.click();
  },

  menuItemClick (item, title) {
    cy.get(item).contains(title).click()
  }
}
