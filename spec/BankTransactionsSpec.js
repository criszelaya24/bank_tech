'use strict'
describe("Transaction", function(){
	var transaction;
	var amount = 1000;
	var balance = 1000;
	var date = new Date(2019, 2, 17)
	beforeEach(function(){
		transaction = new Transaction();
		transaction.add(1000, 1000, date);
	})
	it("transaction, should be an instance", function(){
		expect(transaction instanceof(Transaction)).toBe(true);
	});

	it("Should be defined where to save the details", function(){
		expect(transaction.details).toBeDefined();
	});

	it("Should contain the details from the transaction", function(){
		expect(transaction.details[0]).toEqual([amount, balance, date])
	});
})