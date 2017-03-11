function start(){
	var i = 0;
motors = [1, 3, 4, 6];
while (i<4)
{
  var motor = motors[i];
  //alert(motor);
//var speed = +speed[i];
	console.log(motors[i]);
 setInterval(function(){document.getElementById("rpmText").innerHTML=motor + " rpm";}, 2000);
//$("#speedText").text(motors.length + " m/s"););
   // var motor = +motors[i];
    i++;
}

}