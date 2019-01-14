"use strict"

describe("Account", function(){
  var account;
  beforeEach(function(){
    account = new Account();
  });
  it("Start with 0 the account's balance",function(){
    expect(account.balance).toEqual(0);
  });

  it("Start with none details", function(){
    expect(account.details).toEqual([]);
  });
  it("A client make a deposit of 1000", function(){
    account.deposit(1000);
    expect(account.getBalance()).toEqual(1000);
  });

  it("Making a double deposit", function(){
     account.deposit(1000);
     account.deposit(2000);
    expect(account.getBalance()).toEqual(3000);
  });

  it("Now the client after making a deposit make a withdrawal", function(){
    account.deposit(1000);
    account.deposit(2000);
    account.makeWithdrawal(500);
    expect(account.getBalance()).toEqual(2500);
  });

  it("Raising error when user want to withdrawal not having enough founds", function(){
    expect(account.makeWithdrawal(500)).toEqual("You don't have enough founds!")
  });

  it("Has a structure for every transaction made by the client", function(){
    account.deposit(1000);
    expect(account.details).toEqual([{
      deposit: 1000,
      date: '14-Jan-2019',
      balance: 1000
    }]);
  });

  it("Has several records saved for every transaction", function(){
    account.deposit(1000);
    account.deposit(1000);
    account.makeWithdrawal(500);
    expect(account.details.length).toEqual(3)
  })
});
