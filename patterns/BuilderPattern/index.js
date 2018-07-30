const PlayerBuilder = require('./PlayerBuilder')

const CristianoRonaldo = new PlayerBuilder('Cristiano Ronaldo')
  .setTeam('Juventus')
  .setShirtNumber(7)
  .build()

const LionelMessi = new PlayerBuilder('Cristiano Ronaldo')
  .setTeam('Barcelona')
  .setShirtNumber(10)
  .build()

const SergioRamos = new PlayerBuilder('Sergio Ramos')
  .setTeam('Real Madrid')
  .setShirtNumber(5)
  .makeCaptain()
  .build()

console.log(CristianoRonaldo)
console.log(LionelMessi)
console.log(SergioRamos)