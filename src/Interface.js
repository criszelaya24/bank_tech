$(document).ready(function(){
	var account = new Account();
	$('#makeDeposit').click(function(){
		var x = $('#amountDeposit').val();
		if (x === "") {
			$('#message').append(
				'<div class="alert">' +
            '<button type="button" class="close" data-dismiss="alert">' +
            '&times;</button>' + "Empty field not permitted" + '</div>'
				);
		}else{
			var amount = parseInt(x); // convert string into integer
			account.deposit(amount);
			$("#balance").text(account.getBalance());
			$("#amountDeposit").val("")
			$("#amountDeposit").focus();
		}
	})
});
