function start(){

function render(d, e){
$.getJSON( "jsonfile.json", function( data ) {
   
    $.each( data, function( key, val ) {
	$.each (val, function( key1, val1) {
	    // console.log( "key1: " + key1 + ", val1: " + val1.timestamp );
var speed = +val1.speed;
var timestamp = val1.timestamp;
$("svg").css("background-color","rgba(48, 119, 206, 0.72)");
$("#rpmText").text(d + " rpm");
$("#speedText").text(45 + " m/s");
var errorFlagsRun = d3.select("#rpm").select("svg"). select("rect").attr("x", 0).attr("y", 0).attr("width", 130)
                            .attr("height", e).style("fill", "rgb(244, 245, 247)");
}

	setInterval(function(){render(40, 10);}, 1000);
  
  

}