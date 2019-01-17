(function(exports) {
	function Transaction(amount, balance, date = new Date()) {
		this.TransactionHistory = [];
		this.amount = amount;
		this.balance = balance;
		this.date = date;
		this.saveIt();
	}

	Transaction.prototype.saveIt = function() {
		this.TransactionHistory.push(this.amount, this.balance, this.date);
	};
	exports.Transaction = Transaction;

})(this);
