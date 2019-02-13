'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceNotExistException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle (error, { response }) {
    return response.status(400).json({
      error: 'The resource doesn\'t exists'
    })
  }
}

module.exports = ResourceNotExistException
