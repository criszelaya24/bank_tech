"use strict"

function Account(){
	this.balance = 0;
	this.details = []
}

Account.prototype.deposit = function(amount) {
	this.getBalance();
	if (this.details.length === 0) {
		this.details.push({deposit: amount, date: dateToday(), balance: amount});
	}else{
		this.details.push({deposit: amount, date: dateToday(), balance: this.balance + amount});
	}
};

Account.prototype.getBalance = function() {
	this.balance = 0;
	this.withdrawal = 0;
	this.total = 0;
	for (var i = 0; i < this.details.length; i++) {
		if (this.details[i]["deposit"]) {
			this.total += this.details[i]["deposit"]
		}
		if (this.details[i]["withdrawal"]) {
			this.withdrawal += this.details[i]["withdrawal"]
		}
	}
	this.balance = this.total - this.withdrawal;
	return this.balance;
};

Account.prototype.makeWithdrawal = function(amount) {
	this.getBalance();
	if (this.balance < amount) {
		return "You don't have enough founds!"
	}else{
		this.details.push({withdrawal: amount, date: dateToday(), balance: this.balance - amount});
	}
};
function dateToday() {
	var date = new Date();
	var formattedDate = date.toLocaleDateString('en-GB', {
		day: 'numeric', month: 'short', year: 'numeric'
	}).replace(/ /g, '-');
	return formattedDate;
}