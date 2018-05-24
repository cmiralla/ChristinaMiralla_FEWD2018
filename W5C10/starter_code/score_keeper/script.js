$(document).ready(function(){
	var total = 0;
	$('#zero').click(zero);
	$('#add5').click(add5);
	$('#add10').click(add10);
	$('sub1').click(sub1);

	var total = 0;
	function add5(){
		total = total + 5;
		$('#result').html(total);
	}
	function sub1(){

	}
});