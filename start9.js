function start(){
var odemeter = 0; 
getSpeed();
getBattery();
getOdeometer();
getTemp();
//getSpeed
function getSpeed(){
$.getJSON( "jsonfile.json", function(data) {

 
	var i =document.getElementById("time").value;
	
	i = +i;

	var motors = [];
	var speeds = [];
  var timestamps = [];
   
    $.each( data, function( key, val ) {
	$.each (val, function( key1, val1) {
	   
var speed = +val1.speed;
var timestamp = val1.Timestamp;

var motor = +val1.rpm;
motor = Math.round(motor);
motors.push(motor);
timestamps.push(timestamp);
speeds.push(speed);
});
});

$("svg").css("background-color","hsla(212, 70%, 51%, 0.74)");



   document.getElementById("rpmGaugeContainer1").innerHTML= motors[i]+ " (RPM)";     
      
     slider1.value(motors[i]); 
  // alert(timestamps[i], speeds[i]);
if (timestamps[i] != timestamps[i+1]){

$("#errorFlagsColor").css("background-color","hsla(114, 100%, 66%, 1)");
document.getElementById("errorFlagsText").innerHTML= "Error Flags Green";
document.getElementById("warningText").innerHTML= "Error Warning Light";
$("#warningColor").css("background-color","hsla(114, 100%, 66%, 1)");
}
if (timestamps[i] == timestamps[i+1]){

$("#errorFlagsColor").css("background-color","hsla(0, 77%, 63%, 0.94)");
document.getElementById("errorFlagsText").innerHTML= "Time Feeding Error!!";
document.getElementById("warningText").innerHTML= "Error Warning!";
$("#warningColor").css("background-color","hsla(0, 77%, 63%, 0.94)");
}
    

     // odemeter = odemeter + speeds[i];
      //odemeter = Math.round(odemeter);



//odemeter change here
  //       segDisplay.value(odemeter);
//speed meter change here
        gauge1.value(3.6*speeds[i]);
      //  i++;
//document.getElementById("time").value = i;

var c = document.getElementById("control").value;
var t = 1000/c;

	setTimeout(function(){getSpeed()}, t);
  
  });
}
//getSpeed end

/*
{
   "DCBus": "Ahr",
   "PackV": "V",
   "PackAhr": "Ahr",
   "packCharge": "%",
   "BatteryTemp": "degC",
   "Status": "Condition"
 },
*/

//getBattery

function getBattery(){
$.getJSON( "battery.json", function(data) {


  var i =document.getElementById("time").value;
  
  i = +i;

  var ahrDCs = [];
  var voltages = [];
  var ahrPacks = [];
  var charges = [];
  var batteryTs =[];
  
  //var batteryTemps = [];
  //var statuss = [];
   
    $.each( data, function( key, val ) {
  $.each (val, function( key1, val1) {
      // console.log( "key1: " + key1 + ", val1: " + val1.timestamp );


var ahrDC = val1.DCBus;
  var voltage = +val1.PackV;
  var ahrPack = +val1.PackAhr;
  var charge = +val1.packCharge;
  batteryT = +val1.BatteryTemp;

ahrDC = Math.round(ahrDC);
voltage = Math.round(voltage);
ahrPack = Math.round(ahrPack);
charge = Math.round(charge);

ahrDCs.push(ahrDC);
voltages.push(voltage);
ahrPacks.push(ahrPack);
charges.push(charge);
batteryTs.push(batteryT);



});
});


$("svg").css("background-color","rgba(48, 119, 206, 0.72)");
document.getElementById("ahrDCGaugeContainer1").innerHTML= ahrDCs[i] +" AHR (DC BUS)";
document.getElementById("voltageGaugeContaine1").innerHTML= voltages[i] +" V (PACK VOLTAGE)";
document.getElementById("ahrPackGaugeContainer1").innerHTML= ahrPacks[i] +" AHR (PACK AHR)";
document.getElementById("chargeGaugeContainer1").innerHTML= charges[i] +" % (PACK CHARGE)";

   //document.getElementById("rpmGaugeContainer1").innerHTML= motors[i]+ " (RPM)";     
      
     slider2.value(ahrDCs[i]); 
     slider3.value(voltages[i]); 
     slider8.value(ahrPacks[i]);
     slider4.value(charges[i]); 
    


var c = document.getElementById("control").value;
var t = 1000/c;


//limit light
/*if (ahrDCs[i]<9000){

$("#limitFlagsColor").css("background-color","hsla(114, 100%, 66%, 1)");
document.getElementById("limitFlagsText").innerHTML= "Limit Flags Green";
document.getElementById("warningTextL").innerHTML= "Limit Warning Light";
$("#warningColorL").css("background-color","hsla(114, 100%, 66%, 1)");
}*/
if (ahrDCs[i]>10000){

$("#limitFlagsColor").css("background-color","hsla(0, 77%, 63%, 0.94)");
document.getElementById("limitFlagsText").innerHTML= "Over Limit! DC Bus AHR!";
document.getElementById("warningTextL").innerHTML= "Limit Warning!";
$("#warningColorL").css("background-color","hsla(0, 77%, 63%, 0.94)");
}
//limit light
if (ahrPacks[i]<9000){

$("#limitFlagsColor").css("background-color","hsla(114, 100%, 66%, 1)");
document.getElementById("limitFlagsText").innerHTML= "Limit Flags Green";
document.getElementById("warningTextL").innerHTML= "Limit Warning Light";
$("#warningColorL").css("background-color","hsla(114, 100%, 66%, 1)");
}
if (ahrPacks[i]>10000){

$("#limitFlagsColor").css("background-color","hsla(0, 77%, 63%, 0.94)");
document.getElementById("limitFlagsText").innerHTML= "Over Limit! Pack AHR!";
document.getElementById("warningTextL").innerHTML= "Limit Warning!";
$("#warningColorL").css("background-color","hsla(0, 77%, 63%, 0.94)");
}

if (Math.abs(batteryTs[i]-batteryTs[i+1])>10){

$("#errorFlagsColor").css("background-color","hsla(0, 77%, 63%, 0.94)");
document.getElementById("errorFlagsText").innerHTML= "Temperature Feeding Error!!";
document.getElementById("warningText").innerHTML= "Error Warning!";
$("#warningColor").css("background-color","hsla(0, 77%, 63%, 0.94)");
}  
  setTimeout(function(){getBattery()}, t);
  
  });
}

//end getBattery


//getOdeometer
function getOdeometer(){
$.getJSON( "gps.json", function(data) {
  var lons = [];
  var lats = [];
  var eles = [];
   var i =document.getElementById("time").value;
  
  i = +i;

      $.each( data, function( key, val ) {
  $.each (val, function(key1, val1) {
      // console.log( "key1: " + key1 + ", val1: " + val1.timestamp );
var lon = +val1.lon;
var lat = +val1.lat;
var ele = +val1.ele;
//alert(lon);
lons.push(lon);
lats.push(lat);
eles.push(ele);



});
});


      

    //  odemeter = odemeter + speeds[i];
  //    odemeter = Math.round(odemeter);
if (i>0){
  odemeter = odemeter + Math.sqrt(Math.pow((lons[i] - lons[i-1]), 2)*85390*85390+ Math.pow((lats[i]-lats[i-1]), 2)*111030*111030+Math.pow(eles[i]-eles[i-1], 2));
}
odemeterK = odemeter/1000;
segDisplay.value(odemeterK.toFixed(2));
var c = document.getElementById("control").value;
var t = 1000/c;

  setTimeout(function(){getOdeometer()}, t);

  
  });
}
//getOdeometer end

/*
{
   "FIELD1": "Timestamp",
   "FIELD2": "Motor controler temp",
   "FIELD3": "Motor temp",
   "FIELD4": "Battery Heatsink Temp"
 },
*/


function getTemp(){
$.getJSON( "convertcsv.json", function(data) {


	var i =document.getElementById("time").value;
	
	i = +i;

	var motorTs = [];
	var motorCTs = [];
	var batteryTs = [];
   
    $.each( data, function( key, val ) {
	$.each (val, function( key1, val1) {
	    // console.log( "key1: " + key1 + ", val1: " + val1.timestamp );
var motorT = +val1.FIELD3;
var motorCT = +val1.FIELD2;
var batteryT = +val1.FIELD4;



motorT = Math.round(motorT);
motorCT = Math.round(motorCT);
batteryT = Math.round(batteryT);
motorTs.push(motorT);
motorCTs.push(motorCT);
batteryTs.push(batteryT);


});
});

$("svg").css("background-color","rgba(48, 119, 206, 0.72)");
document.getElementById("cMotorGaugeContainer1").innerHTML= motorTs[i] +" C (MOTOR)";
document.getElementById("cHeatsinkGaugeContainer1").innerHTML= motorCTs[i] +" C (MOTOR HEATSINK)";
document.getElementById("cBatteryGaugeContainer1").innerHTML= batteryTs[i] +" C (BATTERY HEATSINK)";

      
      
     slider5.value(motorTs[i]); 
     slider6.value(motorCTs[i]); 
     slider7.value(batteryTs[i]); 
   

//setTempError

if (Math.abs(motorTs[i]-motorTs[i+1])>10 || Math.abs(motorCTs[i]-motorCTs[i+1])>10 || Math.abs(batteryTs[i]-batteryTs[i+1])>10){

$("#errorFlagsColor").css("background-color","hsla(0, 77%, 63%, 0.94)");
document.getElementById("errorFlagsText").innerHTML= "Temperature Feeding Error!!";
document.getElementById("warningText").innerHTML= "Error Warning!";
$("#warningColor").css("background-color","hsla(0, 77%, 63%, 0.94)");
}     

        
      




i++;
document.getElementById("time").value = i;
var c = document.getElementById("control").value;
var t = 1000/c;

	setTimeout(function(){getTemp()}, t);
  
  });
}
}

