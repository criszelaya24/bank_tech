(function(exports) {
	function Transaction(history = []) {
		this.details = history;
	}

	Transaction.prototype.add = function(amount, balance, date = new Date()) {
		this.details.push([amount, balance, date]);
	};
	exports.Transaction = Transaction;

})(this);
