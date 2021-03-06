'use strict'

const Schema = use('Schema')

class CategorySchema extends Schema {

  up () {
    this.create('category', (table) => {
      table.increments()
      table.string('category', 80)
    })
  }

  down () {
    this.drop('category')
  }

}

module.exports = CategorySchema
