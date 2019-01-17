'use strict'
describe("Transaction", function(){
	var transaction;
	var today = new Date(2019, 2, 17)
	beforeEach(function(){
		transaction = new Transaction(1000, 1000, today);
	})
	it("transaction, should be an instance", function(){
		expect(transaction instanceof(Transaction)).toBe(true);
	});

	it("Should be defined amount", function(){
		expect(transaction.amount).toBeDefined();
	});

	it("Should be defined balance", function(){
		expect(transaction.balance).toBeDefined();
	});

	it("Should be defined date", function(){
		expect(transaction.date).toBeDefined();
	});

	it("Should pass correctly the value from amount", function(){
		expect(transaction.amount).toEqual(1000)
	});

	it("Should pass correctly the value from balance", function(){
		expect(transaction.balance).toEqual(1000)
	});

	it("Should pass correctly the value from date", function(){
		expect(transaction.date).toEqual(today)
	});
})