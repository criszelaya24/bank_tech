(function(exports){
	function Account(balance = 0, transaction = new Transaction()) {
		this.balance = 0;
		this.transaction = transaction;
	}

	Account.prototype.deposit = function(amount) {
		this.balance += amount;
		this.transaction.add(amount, this.balance) 
	};

	Account.prototype.withdraw = function(amount) {
		this.balance -= amount;
		this.transaction.add(-amount, this.balance)
	};
	exports.Account = Account;
})(this);