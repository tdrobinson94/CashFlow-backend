'use strict'

const Schema = use('Schema')

class AccountsSchema extends Schema {

  up () {
    this.table('accounts', (table) => {
      table.increments()
      table.string('bank', 254)
      table.string('account_type', 254)
      table.string('account_title', 254)
      table.bigInteger('account_balance')
    })
  }

  down () {
    this.drop('accounts')
  }

}

module.exports = AccountsSchema
