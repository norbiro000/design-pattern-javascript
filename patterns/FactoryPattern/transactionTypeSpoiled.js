class TransactionSpoiled {
  constructor (itemName, amount, remark) {
    this._itemName = itemName
    this._amount = amount
    this._remark = remark
    this._type = 'spoiled'
  }
}

module.exports = TransactionSpoiled