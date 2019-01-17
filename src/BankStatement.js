(function(exports){
	var HeaderDate = "Date";
	var HeaderCredit = "Credit";
	var HeaderDebit = "Debit";
	var HeaderBalance = "Balance ";
	var HeaderPilar = " || ";
	function Statement(all = new Transaction()) {
		this.all = all;
	}

	Statement.prototype.displayStatment = function() {
		var show = HeaderDate + HeaderPilar + HeaderCredit + HeaderPilar + HeaderDebit + HeaderPilar + HeaderBalance + '\n';
		for (var i = 0; i < this.all.details.length; i++) {
			show += dateFormater(element.date);
			show += HeaderPilar;
			if (element.amount > 0) {
				show += element.amount;
			}else {
				show += HeaderPilar;
				show += element.amount;
			}
			show += element.balance;
			show += '\n'
		}
		return show;
	};

	function dateFormater(date) {
		var day   = (date.getDate()).toString();
	    var month = (date.getMonth() + 1).toString();
	    var year  = (date.getFullYear()).toString();

	    return day + '/' + month + '/' + year;
	}

	exports.Statement = Statement;
})(this);