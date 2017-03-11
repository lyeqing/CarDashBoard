   function render(d, e){
$("svg").css("background-color","rgba(48, 119, 206, 0.72)");
$("#rpmText").text(d + " rpm");
$("#speedText").text(45 + " m/s");
var errorFlagsRun = d3.select("#rpm").select("svg"). select("rect").attr("x", 0).attr("y", 0).attr("width", 130)
                            .attr("height", e).style("fill", "rgb(244, 245, 247)");
}

function start(){
$.getJSON( "jsonfile.json", function( data ) {
   
   
    $.each( data, function(key, val) {
  $.each (val, function(key1, val1, ) {
      // console.log( "key1: " + key1 + ", val1: " + val1.timestamp );
     
     var motor = +val1.rpm;
      var speed = +val1.speed;
      speed =Math.floor(speed);
    setTimeout(function(){render(speed, 10);}, 2000);  
 


     
      



});

    
});



});


}



