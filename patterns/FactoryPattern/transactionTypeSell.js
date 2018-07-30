class TransactionSell {
  constructor (itemName, amount) {
    this._itemName = itemName
    this._amount = amount
    this._type = 'sell'
  }
}

module.exports = TransactionSell
