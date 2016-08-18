// FLY ME TO THE MOON //

if ( $(window).width() > 768) { 
$(document).ready(function(){
    $("#sinatra").click(function(){
	event.preventDefault();
    $("#sinatra").hide(0);
	$("#rocketman").css("background-image", "url(img/walk.gif)");
	$("#rocketman").animate({left: '0px'}, {duration: 2500, easing: "linear"} );
    $("#rocketman").animate({opacity: '0.0'}, "fast", function() {
$("#rocket").css("background-image", "url(img/rocket.gif)");
$("#rocket").animate({bottom: '60%', width: '0%'}, {duration: 2500});
$("#rocket").animate({opacity: '0.0'});
$("#moon").delay( 2700 ).animate({width: '37vw',height: '37vw',position:'relative',top:'50%',pylonansform:'pylonanslateY(-50%)'});
$("#space").delay( 2700 ).animate({height: '100%'});
$("#supermario").delay( 2900 ).hide(0);
$("#stereomc").delay( 2900 ).show(0);
$("#pylon").delay( 2900 ).show(0);
$("#R2D2").delay( 2900 ).show(0);
$("#UO").delay( 2900 ).show(0);
$("#sleepingsatellite").delay( 2900 ).show(0);
$("#moonrocket").delay( 2900 ).show(0);
$("#moonman").delay( 2900 ).show(0);
$("#flag").delay( 2900 ).show(0);
});
});
});
}
else {
	$(document).ready(function(){
    $("#sinatra").click(function(){
    $("#sinatra").hide(0);
	$("#rocketman").css("background-image", "url(img/walk.gif)");
	$("#rocketman").animate({left: '0px'}, {duration: 1500, easing: "linear"} );
    $("#rocketman").animate({opacity: '0.0'}, "fast", function() {
$("#rocket").css("background-image", "url(img/rocket.gif)");
$("#rocket").animate({bottom: '60%', width: '0%'}, {duration: 2500});
$("#rocket").animate({opacity: '0.0'});
$("#moon").delay( 2700 ).animate({width: '68vw',height: '68vw',position:'relative',top:'50%',transform:'translateY(-50%)'});
$("#space").delay( 2700 ).animate({height: '100%', padding:'5%'});
$("#supermario").delay( 2900 ).hide(0);
$("#stereomc").delay( 2900 ).show(0);
$("#pylon").delay( 2900 ).show(0);
$("#R2D2").delay( 2900 ).show(0);
$("#UO").delay( 2900 ).show(0);
$("#sleepingsatellite").delay( 2900 ).show(0);
$("#moonrocket").delay( 2900 ).show(0);
$("#moonman").delay( 2900 ).show(0);
$("#flag").delay( 2900 ).show(0);
});
});
});
}
//

// ROCKET SHORTCUT //
if ( $(window).width() > 768) { 
$(document).ready(function(){
$("#rocket").click(function(){
event.preventDefault();
$("#sinatra").hide(0);
$("#rocketman").hide(0);
$("#rocket").hide(0);
$("#moon").animate({width: '37vw',height: '37vw',position:'relative',top:'50%',transform:'translateY(-50%)'});
$("#space").animate({height: '100%'});
$("#supermario").hide(0);
$("#stereomc").show(0);
$("#pylon").show(0);
$("#R2D2").show(0);
$("#UO").show(0);
$("#sleepingsatellite").show(0);
$("#moonrocket").show(0);
$("#moonman").show(0);
$("#flag").show(0);
});
});
}
else {
$(document).ready(function(){
$("#rocket").click(function(){
event.preventDefault();
$("#sinatra").hide(0);
$("#rocketman").hide(0);
$("#rocket").hide(0);	
$("#moon").animate({width: '68vw',height: '68vw',position:'relative',top:'50%',transform:'translateY(-50%)'});
$("#space").animate({height: '100%'});
$("#supermario").hide(0);
$("#stereomc").show(0);
$("#pylon").show(0);
$("#R2D2").show(0);
$("#UO").show(0);
$("#sleepingsatellite").show(0);
$("#moonrocket").show(0);
$("#moonman").show(0);
$("#flag").show(0);
});
});
}
//

// INFO Moonman // 


// SHOW //
$(document).ready(function(){
    $("#moonman").click(function(){
		event.preventDefault();
        $("#info").fadeIn(1000);
    });
});
// HIDE //
$(document).ready(function(){
    $("#x").click(function(){
		event.preventDefault();
        $("#info").hide(0);
    });
});

//

// FLY ME BACK //
$(document).ready(function(){
$('#moonrocket').click(function() {
	$("#moonman").animate({opacity: '0.0'}, "slow");
	$("#moonrocket").delay(500).css("background-image", "url(img/rocket.gif)");
	$("#moonrocket").animate({right: '150%',width:'0%'}, {duration: 1000});
	window.setTimeout(function(){location.reload()},1500);
	});});
//

// R2D2 TABS //

// SHOW //
$(document).ready(function(){
$('#R2D2').click(function() {
	event.preventDefault();
	document.getElementById('audio1').play();
	$("#moon").delay(300).hide(0);
	$("#overlay").delay(100).fadeIn(700);
	$("#behindthescene").fadeIn(2000)
	;});});
// HIDE //
$(document).ready(function(){
$('#B2D2').click(function() {
	event.preventDefault();
	document.getElementById('audio2').play();
	$("#behindthescene").delay(600).hide(0);
		$("#sidious").delay(1000).hide(0);
	$("#moon").delay(600).fadeIn(1000)
	;});});


// CHOOSE TABS //
function openTab(evt, tabName) {
	$("#choice").hide(0);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
//

// GET CONNECTED//

// SHOW //
$(document).ready(function(){
$('#stereomc').click(function() {
	event.preventDefault();
	document.getElementById('audio3').play();
	$("#moon").delay(300).hide(0);
	$("#major-tom").fadeIn(2000)
	;});});
// HIDE //
$(document).ready(function(){
$('#groundcontrol').click(function() {
	event.preventDefault();
	document.getElementById('audio3').play();
	$("#major-tom").delay(600).hide(0);
	$("#moon").delay(600).fadeIn(1000)
	;});});
//

// FORM POP //

function validateForm(url,w,h){

	var left = (screen.width/2)-(w/2);

	var top = (screen.height/4)-(h/4);

	newwindow=  window.open (url, 'title', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);

	if (window.focus) {newwindow.focus()}

	return false;

}
//
// DARK SIDE OF THE MOON //

// SHOW //
$(document).ready(function(){
$('#sleepingsatellite').click(function() {
	event.preventDefault();
	$("#moon").delay(300).hide(0);
	$("#greatgiginthesky").fadeIn(2000)
	;});});
// HIDE //
$(document).ready(function(){
$('#semisonic').click(function() {
	event.preventDefault();
	$("#greatgiginthesky").delay(300).hide(0);
	$("#moon").delay(300).fadeIn(1000)
	;});});
//

// LORDS OF THE UNDERGROUND //

// SHOW //
$(document).ready(function(){
$('#pylon').click(function() {
	event.preventDefault();
	$("#moon").delay(300).hide(0);
	$("#maddskillz").fadeIn(2000);});});
// HIDE //
$(document).ready(function(){
$('#cashaley').click(function() {
	event.preventDefault();
	$("#maddskillz").delay(300).hide(0);
	$("#moon").delay(300).fadeIn(1000);});});
//
// DARK SIDE //
$(document).ready(function(){
    $("#darkside").click(function(){
	event.preventDefault();
	$("#stereomc").animate({opacity: '0.0'}, "slow");
	$("#pylon").animate({opacity: '0.0'}, "slow");
	$("#R2D2").animate({opacity: '0.0'}, "slow");
	$("#UO").animate({opacity: '0.0'}, "slow");
	$("#sleepingsatellite").animate({opacity: '0.0'}, "slow");
	$("#moonrocket").animate({opacity: '0.0'}, "slow");
	$("#moonman").animate({opacity: '0.0'}, "slow");
	$("#flag").animate({opacity: '0.0'}, "slow");
	$("#moon").delay(2500).css("background-image", "url(img/ds.png)");
	$("#stereomc").delay(2500).animate({opacity: '1.0'});
	$("#pylon").delay(2500).animate({opacity: '1.0'});
	$("#R2D2").delay(2500).animate({opacity: '1.0'});
	$("#UO").delay(2500).animate({opacity: '1.0'});
	$("#sleepingsatellite").delay(2500).animate({opacity: '1.0'});
	$("#moonrocket").delay(2500).animate({opacity: '1.0'});
	$("#moonman").delay(2500).animate({opacity: '1.0'});
	$("#flag").delay(2500).animate({opacity: '1.0'}, function() {
	$("#moon").delay(2500).css("background-image", "url(img/moon.png)");
	});
});
});
//
