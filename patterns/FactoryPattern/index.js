// index.js
const transactionFactory = require('./transactionFactory')

const BUY = 'buy'
const SELL = 'sell'
const SPOILED = 'spoiled'

// Cocacola
const buyCocacola = transactionFactory('cocacola', 100, BUY)
const sellCocacola = transactionFactory('cocacola', 90, SELL)

// Milk
const buyMilk = transactionFactory('Milk', 100, BUY)
const sellMilk = transactionFactory('Milk', 70, SELL)
const milkExpired = transactionFactory('Milk', 10, SPOILED, 'Milk has expired')

console.log(buyCocacola)