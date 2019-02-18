'use strict'
const Logger = use('Logger')
const User = use('App/Models/User')

class UserController {
  async login ({ request, auth }) {
    Logger.info('LOGIN----', request.all())
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return token
  }
  async register({ request }) {
    const {email, password } = request.all()
    Logger.info('REGISTER-------', request.all())
    const user = await User.create({
      email,
      password,
      username: email
    })
    return this.login(...arguments)
  }
}

module.exports = UserController
