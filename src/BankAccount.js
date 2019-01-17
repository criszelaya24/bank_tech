(function(exports){
	function Account(balance = 0, statement = new Statement()) {
		this.balance = balance;
		this.statement = statement;
	}

	Account.prototype.deposit = function(amount) {
		this.balance += amount;
		this.statement.addTransaction(amount, this.balance) 
	};

	Account.prototype.withdraw = function(amount) {
		this.balance -= amount;
		this.statement.addTransaction(-amount, this.balance)
	};

	Account.prototype.getStatement = function() {
		return this.statement.displayStatment();
	};
	exports.Account = Account;
})(this);