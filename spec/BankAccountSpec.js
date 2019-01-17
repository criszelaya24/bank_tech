'use strict'

describe("Account", function(){
	var account;
	var amount = 100;
	beforeEach(function(){
		account = new Account();
	});

	it("Verify account be a instance of Account", function(){
		expect(account instanceof(Account)).toBe(true);
	});

	it("Verify instance from Transaction", function(){
		expect(account.transaction instanceof(Transaction)).toBe(true);
	});

	it("Check if balance is defined", function(){
		expect(account.balance).toBeDefined();
	});

	it("Check if deposit is defined", function(){
		expect(account.deposit).toBeDefined();
	});

	describe("Deposit", function(){
		it("Verify deposit affect balance", function(){
			for (var i = 0; i < 10; i++) {
				account.deposit(amount);
			}
			expect(account.balance).toEqual(amount*10);
	});

		it("verify the instance of transaction been called", function(){
			spyOn(Transaction.prototype, 'add');
			account.deposit(amount);
			expect(account.transaction.add).toHaveBeenCalled();
		});
	});
});
