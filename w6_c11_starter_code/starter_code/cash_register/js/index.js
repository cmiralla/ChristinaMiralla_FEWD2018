$(document).ready(function(){

	$('#entry').submit(enter);
	var total = 0;

	function enter(event){
		event.preventDefault();
		var entry = $('#newEntry').val();
		entry = parseFloat(entry);
		total = total + entry;

		entry = currencyFormat(entry);
		$('#entries').append("<tr><td></td><td>"+entry+"</td></tr>");
		$('#total').html(currencyFormat(total));

	}

	function currencyFormat(text){
		text = parseFloat(text);
		text = text.toFixed(2);
		text = "$" + text;
		return text;
	}
});

// Create a function called currencyFormat that will take a piece of text 
// from the user and add a "$" and also round to the nearest 2 decimal places
// then return the converted value into a variable to display on the page