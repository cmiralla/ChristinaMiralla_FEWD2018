$(document).ready(function(){


 function switchLights() {
	$('body').toggleClass('dark');
}

$('#light_switch').click(switchLights);
});