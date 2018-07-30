class TransactionBuy {
  constructor (itemName, amount) {
    this._itemName = itemName
    this._amount = amount
    this._type = 'buy'
  }
}

module.exports = TransactionBuy
