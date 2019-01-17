'use strict'

describe("Statement", function(){
	var account;
	var statement;
	var headers;
	var amount;
	beforeEach(function(){
		account = new Account();
		statement = new Statement();
		headers    = "Date || Credit || Debit || Balance"
      	amount     = 1000;
      	account.deposit(amount)
	});

	it("Check if is intance", function(){
		expect(statement instanceof(Statement)).toBe(true);
	});

	it("Check to instance be defined", function(){
		expect(statement.all).toBeDefined();
	});

	it("Check if is reading correctly the details from transactions", function(){
		expect(statement.all instanceof(Transaction)).toBe(true)
	});

	it("check header from the transactions made", function(){
		expect(statement.displayStatment()).toContain(headers);
	});
});