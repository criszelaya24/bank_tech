'use strict'

describe("Statement", function(){
	var statement;
	var headers;
	var amount;
	beforeEach(function(){
		statement = new Statement();
		headers    = "Date || Credit || Debit || Balance"
      	amount     = "1000.00"
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

	it("display all the transactions made", function(){
		expect(statement.displayStatment()).toContain(headers);
	});
});