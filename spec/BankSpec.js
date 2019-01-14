"use strict"

describe("Account", function(){
  var account;
  beforeEach(function(){
    account = new Account;
  });
  it("Start with 0 the account's balance",function(){
    expect(account.balance).toEqual(0);
  });
   it("Start with 0 the account's amount",function(){
    expect(account.amount).toEqual(0);
  });
  it("Start with none account", function(){
    expect(account.details).toEqual([]);
  });
});
