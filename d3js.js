/*var rpm = d3.select("#rpm").append("svg").attr("width", 110).attr("height", 120).append("rect").attr("x", 0).attr("y", 0).attr("width", 110)
                            .attr("height", 120).style("fill", "rgb(244, 245, 247)");
                         
 /*var speed = d3.select("#speed").append("svg").attr("width", 200).attr("height", 120).append("rect").attr("x", 0).attr("y", 0).attr("width", 200)
                          .attr("height", 120).style("fill", "rgba(48, 119, 206, 0.72)");





var dcBusahr = d3.select("#dcBusahr").append("svg").attr("width", 70).attr("height", 120).append("rect").attr("x", 0).attr("y", 0).attr("width", 70)
                            .attr("height", 120).style("fill", "rgba(48, 119, 206, 0.72)");

var packVoltage = d3.select("#packVoltage").append("svg").attr("width", 70).attr("height", 120).append("rect").attr("x", 0).attr("y", 0).attr("width", 70)
                            .attr("height", 120).style("fill", "rgba(48, 119, 206, 0.72)");



var charge = d3.select("#packahr").append("svg").attr("width", 70).attr("height", 120).append("rect").attr("x", 0).attr("y", 0).attr("width", 70)
                            .attr("height", 120).style("fill", "rgba(48, 119, 206, 0.72)");

var charge = d3.select("#batteryTemp").append("svg").attr("width", 70).attr("height", 120).append("rect").attr("x", 0).attr("y", 0).attr("width", 70)
                            .attr("height", 120).style("fill", "rgba(48, 119, 206, 0.72)");*/

                            //speed gauge start

var svg = d3.select("#speedometer")
                .append("svg:svg")
                .attr("width", 413)
                .attr("height", 401);


        var gauge1 = iopctrl.arcslider()
                .radius(167)
                .events(false)
                .indicator(iopctrl.defaultGaugeIndicator);
        gauge1.axis().orient("in")
                .normalize(true)
                .ticks(12)
                .tickSubdivide(3)
                .tickSize(10, 8, 10)
                .tickPadding(5)
                .scale(d3.scale.linear()
                        .domain([0, 160])
                        .range([-3*Math.PI/4, 3*Math.PI/4]));

        var segDisplay = iopctrl.segdisplay()
                .width(100)
                .digitCount(6)
                .negative(false)
                .decimals(2);

        svg.append("g")
                .attr("class", "segdisplay")
                .attr("transform", "translate(160, 280)")
                .call(segDisplay);

        svg.append("g")
                .attr("class", "gauge1")
                .call(gauge1);
//speed gauge end
//slide gauges
//slide1
   var svg1 = d3.select("#rpmGaugeContainer")
                .append("svg:svg")
                .attr("width", 417)
                .attr("height", 76);
        
        var slider1 = iopctrl.slider()
                .width(50)
                .events(false)
                .bands([
                    {"domain": [900, 1000], "span":[0.05, 0.12] , "class": "fault"},
                    {"domain": [750, 900], "span": [0.05, 0.12] , "class": "warning"},
                    {"domain": [0, 750], "span": [0.05, 0.12] , "class": "ok"}
                ])
                .indicator(iopctrl.defaultSliderIndicator)
                .ease("elastic");
        slider1.axis().orient("top")
                .tickSubdivide(4)
                .tickSize(10, 8, 10)
                .scale(d3.scale.linear()
                        .domain([0,1000])
                        .range([0, 359]));
        
        svg1.append("g")
                .attr("transform", "translate(0, 20)")
                .attr("class", "lineargauge")
                .call(slider1);
               
//slide1 end

//slide2
   var svg2 = d3.select("#ahrDCGaugeContainer")
                .append("svg:svg")
                .attr("width", 413)
                .attr("height", 76);
        
        var slider2 = iopctrl.slider()
                .width(50)
                .events(false)
                .bands([
                    {"domain": [9000, 10000], "span":[0.05, 0.12] , "class": "fault"},
                    {"domain": [7500, 9000], "span": [0.05, 0.12] , "class": "warning"},
                    {"domain": [0, 7500], "span": [0.05, 0.12] , "class": "ok"}
                ])
                .indicator(iopctrl.defaultSliderIndicator)
                .ease("elastic");
        slider2.axis().orient("top")
                .tickSubdivide(4)
                .tickSize(10, 8, 10)
                .scale(d3.scale.linear()
                        .domain([0,10000])
                        .range([0, 359]));
        
        svg2.append("g")
                .attr("transform", "translate(0, 20)")
                .attr("class", "lineargauge")
                .call(slider2);
               
//slide2 end
//slide3
   var svg3 = d3.select("#voltageGaugeContaine")
                .append("svg:svg")
                .attr("width", 413)
                .attr("height", 76);
        
        var slider3 = iopctrl.slider()
                .width(50)
                .events(false)
                .bands([
                    {"domain": [450, 500], "span":[0.05, 0.12] , "class": "fault"},
                    {"domain": [375, 450], "span": [0.05, 0.12] , "class": "warning"},
                    {"domain": [0, 375], "span": [0.05, 0.12] , "class": "ok"}
                ])
                .indicator(iopctrl.defaultSliderIndicator)
                .ease("elastic");
        slider3.axis().orient("top")
                .tickSubdivide(4)
                .tickSize(10, 8, 10)
                .scale(d3.scale.linear()
                        .domain([0,500])
                        .range([0, 359]));
        
        svg3.append("g")
                .attr("transform", "translate(0, 20)")
                .attr("class", "lineargauge")
                .call(slider3);
               
//slide3 end
//slide4
   var svg4 = d3.select("#chargeGaugeContainer")
                .append("svg:svg")
                .attr("width", 413)
                .attr("height", 76);
        
        var slider4 = iopctrl.slider()
                .width(50)
                .events(false)
                .bands([
                    {"domain": [90, 100], "span":[0.05, 0.12] , "class": "fault"},
                    {"domain": [75, 90], "span": [0.05, 0.12] , "class": "warning"},
                    {"domain": [0, 75], "span": [0.05, 0.12] , "class": "ok"}
                ])
                .indicator(iopctrl.defaultSliderIndicator)
                .ease("elastic");
        slider4.axis().orient("top")
                .tickSubdivide(4)
                .tickSize(10, 8, 10)
                .scale(d3.scale.linear()
                        .domain([0,100])
                        .range([0, 359]));
        
        svg4.append("g")
                .attr("transform", "translate(0, 20)")
                .attr("class", "lineargauge")
                .call(slider4);
               
//slide4 end
//slide5
   var svg5 = d3.select("#cMotorGaugeContainer")
                .append("svg:svg")
                .attr("width", 413)
                .attr("height", 76);
        
        var slider5 = iopctrl.slider()
                .width(50)
                .events(false)
                .bands([
                    {"domain": [90, 100], "span":[0.05, 0.12] , "class": "fault"},
                    {"domain": [75, 90], "span": [0.05, 0.12] , "class": "warning"},
                    {"domain": [0, 75], "span": [0.05, 0.12] , "class": "ok"}
                ])
                .indicator(iopctrl.defaultSliderIndicator)
                .ease("elastic");
        slider5.axis().orient("top")
                .tickSubdivide(4)
                .tickSize(10, 8, 10)
                .scale(d3.scale.linear()
                        .domain([0,100])
                        .range([0, 359]));
        
        svg5.append("g")
                .attr("transform", "translate(0, 20)")
                .attr("class", "lineargauge")
                .call(slider5);
               
//slide5 end

//slide6
   var svg6 = d3.select("#cHeatsinkGaugeContainer")
                .append("svg:svg")
                .attr("width", 413)
                .attr("height", 76);
        
        var slider6 = iopctrl.slider()
                .width(50)
                .events(false)
                .bands([
                    {"domain": [90, 100], "span":[0.05, 0.12] , "class": "fault"},
                    {"domain": [75, 90], "span": [0.05, 0.12] , "class": "warning"},
                    {"domain": [0, 75], "span": [0.05, 0.12] , "class": "ok"}
                ])
                .indicator(iopctrl.defaultSliderIndicator)
                .ease("elastic");
        slider6.axis().orient("top")
                .tickSubdivide(4)
                .tickSize(10, 8, 10)
                .scale(d3.scale.linear()
                        .domain([0,100])
                        .range([0, 359]));
        
        svg6.append("g")
                .attr("transform", "translate(0, 20)")
                .attr("class", "lineargauge")
                .call(slider6);
               
//slide6 end
//slide7
   var svg7 = d3.select("#cBatteryGaugeContainer")
                .append("svg:svg")
                .attr("width", 413)
                .attr("height", 76);
        
        var slider7 = iopctrl.slider()
                .width(50)
                .events(false)
                .bands([
                    {"domain": [90, 100], "span":[0.05, 0.12] , "class": "fault"},
                    {"domain": [75, 90], "span": [0.05, 0.12] , "class": "warning"},
                    {"domain": [0, 75], "span": [0.05, 0.12] , "class": "ok"}
                ])
                .indicator(iopctrl.defaultSliderIndicator)
                .ease("elastic");
        slider7.axis().orient("top")
                .tickSubdivide(4)
                .tickSize(10, 8, 10)
                .scale(d3.scale.linear()
                        .domain([0,100])
                        .range([0, 359]));
        
        svg7.append("g")
                .attr("transform", "translate(0, 20)")
                .attr("class", "lineargauge")
                .call(slider7);
               
//slide7 end
//slide8
   var svg8 = d3.select("#ahrPackGaugeContainer")
                .append("svg:svg")
                .attr("width", 413)
                .attr("height", 76);
        
        var slider8 = iopctrl.slider()
                .width(50)
                .events(false)
                .bands([
                    {"domain": [9000, 10000], "span":[0.05, 0.12] , "class": "fault"},
                    {"domain": [7500, 9000], "span": [0.05, 0.12] , "class": "warning"},
                    {"domain": [0, 7500], "span": [0.05, 0.12] , "class": "ok"}
                ])
                .indicator(iopctrl.defaultSliderIndicator)
                .ease("elastic");
        slider8.axis().orient("top")
                .tickSubdivide(4)
                .tickSize(10, 8, 10)
                .scale(d3.scale.linear()
                        .domain([0,10000])
                        .range([0, 359]));
        
        svg8.append("g")
                .attr("transform", "translate(0, 20)")
                .attr("class", "lineargauge")
                .call(slider8);
               
//slide8 end




/*var errorFlags = d3.select("#errorFlags").append("svg").attr("width", 550).attr("height", 50).append("rect").attr("x", 0).attr("y", 0).attr("width", 550)
                            .attr("height", 50).style("fill", "rgba(240, 243, 150, 1)");
               

  
  
   
var limitFlags = d3.select("#limitFlags").append("svg").attr("width", 550).attr("height", 50).append("rect").attr("x", 0).attr("y", 0).attr("width", 550)
                            .attr("height", 50).style("fill", "purple");



var errorFlagsRun = d3.select("#errorFlags").select("svg"). select("rect").attr("x", 0).attr("y", 0).attr("width", 550)
                            .attr("height", 50).style("fill", "red");
var limitFlagsRun = d3.select("#limitFlags").select("svg"). select("rect").attr("x", 0).attr("y", 0).attr("width", 550)
                            .attr("height", 50).style("fill", "red");
$("#errorFlagsText").text('Error');*/