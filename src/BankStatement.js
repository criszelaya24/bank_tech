(function(exports){
	var HeaderDate = "Date";
	var HeaderCredit = "Credit";
	var HeaderDebit = "Debit";
	var HeaderBalance = "Balance ";
	var HeaderPilar = " || ";

	function Statement(transaction = new Transaction()) {
		this.transaction = transaction;
	}

	Statement.prototype.addTransaction = function(amount, balance) {
		this.transaction.add(amount, balance);
	};

	Statement.prototype.displayStatment = function() {
		var show = HeaderDate + HeaderPilar + HeaderCredit + HeaderPilar + HeaderDebit + HeaderPilar + HeaderBalance + "\n";
		for (var i = 0; i < this.transaction.details.length; i++) {
			show += dateFormater(this.transaction.details[i]["date"]);
			show += HeaderPilar;
			if (this.transaction.details[i]["amount"] > 0) {
				show += this.transaction.details[i]["amount"];
				show += HeaderPilar;
			}else {
				show += HeaderPilar;
				show += this.transaction.details[i]["amount"];
			}
			show += HeaderPilar;
			show += this.transaction.details[i]["balance"];
			show += "\n";
		}
		return show;
	};

	function dateFormater(date) {
		var day   = (date.getDate()).toString();
		var month = (date.getMonth() + 1).toString();
		var year  = (date.getFullYear()).toString();

		return day + "/" + month + "/" + year;
	}

	exports.Statement = Statement;
})(this);