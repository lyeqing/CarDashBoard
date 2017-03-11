function start(){
$.getJSON( "jsonfile.json", function( data ) {
   
    $.each( data, function( key, val ) {
	$.each (val, function( key1, val1) {
	    // console.log( "key1: " + key1 + ", val1: " + val1.timestamp );
var speed = +val1.speed;


$("#rpmText").text(speed + " rpm");


	    
	});
    });
    });







}