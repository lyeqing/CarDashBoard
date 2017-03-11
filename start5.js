function start(){

function render(d, e){
$("svg").css("background-color","rgba(48, 119, 206, 0.72)");
$("#rpmText").text(d + " rpm");
$("#speedText").text(45 + " m/s");
var errorFlagsRun = d3.select("#rpm").select("svg"). select("rect").attr("x", 0).attr("y", 0).attr("width", 130)
                            .attr("height", e).style("fill", "rgb(244, 245, 247)");
}


$.getJSON( "jsonfile.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
	$.each (val, function( key1, val1) {
	    // console.log( "key1: " + key1 + ", val1: " + val1.timestamp );
var speed = +val1.speed;


	setTimeout(function(){render(40, 10);}, 1000);
 // setTimeout(function(){render(50, 30);}, 3000);
 // setTimeout(function(){render(60, 70);}, 5000);
//	setTimeout(function(){render(70, 150);}, 11000);
  });
    });
    });


}