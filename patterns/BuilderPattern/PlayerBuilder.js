// PlayerBuilder.js
const Player = require('./Player')

class PlayerBuilder {
  constructor (name) {
    this.name = name
  }

  setTeam (team) {
    this.team = team
    return this
  }

  setShirtNumber (number) {
    this.number = number
    return this
  }

  makeCaptain (bool=true) {
    this.captain = bool
    return this
  }

  build () {
    return new Player(this)
  }
}

module.exports = PlayerBuilder