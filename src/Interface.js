$(document).ready(function(){
	$("#transactionForm").hide();
	var account = new Account();
	var x = 0
	var amount = 0
	$("#balance").text(account.getBalance());
	$('#makeDeposit').click(function(){
		x = $('#amountDeposit').val();
		if (x === "") {
			$('#message').append(alerError());
			$("#amountDeposit").focus();
		}else{
			amount = parseInt(x); // convert string into integer
			account.deposit(amount);
			$("#balance").text(account.getBalance());
			$("#amountDeposit").val("")
			$("#amountDeposit").focus();
		}
	});
	$("#makeWithdrawal").click(function(){
		x = $('#amountWithdrawal').val();
		if (x === "") {
			$('#message').append(alerError());
			$("#amountWithdrawal").focus();
		}else{
			amount = parseInt(x);
			alert("Actual balance: " + account.makeWithdrawal(amount))
			$("#balance").text(account.getBalance());
			$("#amountWithdrawal").val("")
			$("#amountDeposit").focus();
		}
	});
	$("#showTransaction").click(function(){
		$("#transactionForm").toggle( "drop" );

		getDetails();
	})

	function getDetails() {
		$("#details").empty();
		var transaction = []
	for (var i = 0; i < account.details.length; i++) {
		transaction.push(Object.keys(account.details[i]))
		$("#details").append("<tr>"+
				      "<th scope='row'>"+ account.details[i]["date"]+"</th>"+
				      "<td>"+ transaction[i][0] +"</td>"+
				      "<td>"+ account.details[i]["deposit"] +"</td>"+
				      "<td>"+ account.details[i]["balance"] +"</td>"+
				    "</tr>")
	}
}
});

function alerError() {
	return '<div class="alert">' +
            '<button type="button" class="close" data-dismiss="alert">' +
            '&times;</button>' + "Empty field not permitted" + '</div>'
}
