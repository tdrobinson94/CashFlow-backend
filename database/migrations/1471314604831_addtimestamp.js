'use strict'

const Schema = use('Schema')

class AddtimestampSchema extends Schema {

  up () {
    this.table('accounts', (table) => {
      // table.dropColumn('created_at')
    })
  }

  down () {
    this.table('addtimestamp', (table) => {
      // opposite of up goes here
    })
  }

}

module.exports = AddtimestampSchema
