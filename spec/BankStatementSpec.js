'use strict'

describe("Statement", function(){
	var statement;
	var headers;
	var amount;
	beforeEach(function(){
		
		statement = new Statement();
		headers    = "Date || Credit || Debit || Balance \n"
      	amount     = "1000";
      	statement.transaction.add(1000, 1000)
	});

	it("Check if is intance", function(){
		expect(statement instanceof(Statement)).toBe(true);
	});


	it("Verify instance from Transaction", function(){
		expect(statement.transaction instanceof(Transaction)).toBe(true);
	});

	it("Check to instance be defined", function(){
		expect(statement.transaction).toBeDefined();
	});

	it("check header from the transactions made", function(){
		expect(statement.displayStatment()).toContain(headers);
	});

	it("verifying that the transaction can contain details", function(){
		 expect(statement.displayStatment()).toContain(amount);
	});
});