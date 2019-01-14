"use strict"

function Account(){
	this.balance = 0;
	this.amount = 0;
	this.details = []
}

Account.prototype.deposit = function(amount) {
	this.details.push({deposit: amount, date: dateToday()});
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
	this.details.push({withdrawal: amount, date: dateToday()});
};
function dateToday() {
	var date = new Date();
	var formattedDate = date.toLocaleDateString('en-GB', {
		day: 'numeric', month: 'short', year: 'numeric'
	}).replace(/ /g, '-');
	return formattedDate;
}