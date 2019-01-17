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
			show += dateFormater(this.all.details[i]["date"]);
			show += HeaderPilar;
			if (this.all.details[i]["amount"] > 0) {
				show += this.all.details[i]["amount"];
				show += HeaderPilar;
			}else {
				show += HeaderPilar;
				show += this.all.details[i]["amount"];
			}
			show += HeaderPilar
			show += this.all.details[i]["balance"];
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