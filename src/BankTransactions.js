(function(exports) {
	function Transaction(array = []) {
		this.details = array;
	}

	Transaction.prototype.add = function(amount, balance, date = new Date()) {
		this.details.push({amount: amount, balance: balance, date: date});
	};
	exports.Transaction = Transaction;

})(this);
