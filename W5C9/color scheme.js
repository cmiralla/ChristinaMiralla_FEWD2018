document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('orangeButton').onclick = switchOrange;

function switchGray() {
	document.body.style.backgroundColor = 'gray';
	document.body.style.color = 'white';
}

function switchWhite() {
	document.body.style.backgroundColor = 'white';
	document.body.style.color = 'black';
}

function switchOrange() {
	document.body.style.backgroundColor = 'purple';
	document.body.style.color = 'black';
}

$('#grayButton').click(switchGray);
$('whiteButton').click(switchWhite);

function switchGray(){
	$('body').css('background', 'gray');
	$('body').css('color', 'white');	
}

function switchWhite(){
	$('body').css('background', 'white');
	$('body').css('color', 'black');	
}