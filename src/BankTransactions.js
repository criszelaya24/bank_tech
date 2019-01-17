(function(exports) {
	function Transaction(array = []) {
		this.details = array;
	}

	Transaction.prototype.add = function(amount, balance, date = new Date()) {
		this.details.push([amount, balance, date]);
	};
	exports.Transaction = Transaction;

})(this);
