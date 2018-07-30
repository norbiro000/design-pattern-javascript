// transactionFactory.js

const TransactionTypeBuy = require('./transactionTypeBuy')
const TransactionTypeSell = require('./transactionTypeSell')
const TransactionTypeSpoiled = require('./transactionTypeSpoiled')

const transactionFactory = (itemName, amount=0, type, remark='') => {
  if (type === 'buy') {
    return new TransactionTypeBuy(itemName, amount)
  } else if (type === 'sell') {
    return new TransactionTypeSell(itemName, amount)
  } else if (type === 'spolied') {
    return  new TransactionTypeSpoiled(itemName, amount ,remark)
  } else {
    // Throw something.
  }
}

module.exports = transactionFactory
