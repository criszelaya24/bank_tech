(function(exports){
	function Account(balance = 0, transaction = new Transaction(), statement = new Statement()) {
		this.balance = 0;
		this.transaction = transaction;
		this.statement = statement;
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