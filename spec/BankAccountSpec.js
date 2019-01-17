'use strict'

describe("Account", function(){
	var account;
	var amount = 100;
	var withdraw = 50;
	beforeEach(function(){
		account = new Account();
		spyOn(Transaction.prototype, 'add');
	});

	it("Verify account be a instance of Account", function(){
		expect(account instanceof(Account)).toBe(true);
	});

	it("Verify instance from Transaction", function(){
		expect(account.transaction instanceof(Transaction)).toBe(true);
	});

	it("Check if display function is an instance of statment", function(){
		expect(account.statement instanceof(Statement)).toBe(true);
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
			account.deposit(amount);
			expect(account.transaction.add).toHaveBeenCalled();
		});
	});

	describe("Withdraw", function(){
		it("Check if withdrwaw affect balance", function(){
			account.deposit(amount);
			account.withdraw(withdraw);
			expect(account.balance).toEqual(amount - withdraw);
		});

		it("Should add this transaction", function(){
			account.deposit(amount);
			account.withdraw(withdraw);
			expect(account.transaction.add).toHaveBeenCalled();
		});
	});

	describe("Display", function(){
		it("Check if display function is an instance of statment", function(){
		
		});
	});
});
