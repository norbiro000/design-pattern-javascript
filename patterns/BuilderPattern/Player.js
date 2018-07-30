// Player.js
class Player {
  constructor (builder) {
    this.name = builder.name
    this.team = builder.team
    this.number = builder.number || 0
    this.captain = builder.captain || false
  }
}

module.exports = Player
