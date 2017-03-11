$(function () {
    var speedColor = '#474337';
    var rpmColor = '#BBB59C';
    var kmhArr = [ 0, 20, 40, 60, 90, 120, 150, 180, 210 ];
    var hiRef = '#A41E09';
    var dialColor = '#FA3421';
    var currentRpm = 0;
    var rpmAccel = [ 0, 0.1, 0.2, 0.3, 0.6, 0.7, 0.85, 0.9, 0.9, 1.1, 1.2, 1.3, 1.3, 1.35, 1.4, 1.46, 1.51, 1.53, 1.54, 1.55, 1.58, 1.6, 1.63, 1.67, 1.67, 1.68, 1.7, 1.6, 1.58, 1.54, 1.53, 1.52, 1.51, 1.64, 1.78, 1.83, 1.91, 2.2, 2.1, 2.24, 2.33, 2.43, 2.41, 2.4, 2.2, 2.1, 1.9, 1.8, 2.2, 2.4, 2.5, 2.7, 2.8, 2.9, 3.0, 3.3, 3.5, 3.8, 4.3, 4.4, 4.5, 4.6, 4.7, 4.96, 5.3, 5.4, 5.64, 5.7, 5.74, 5.82, 5.88,  5.91, 6.1, 6.18, 6.23, 6.3, 6.6, 6.5, 6.4, 6.44, 6.3, 6.35, 6.32, 6.31, 6.2, 6.12, 5.9, 5.8, 5.65, 5.5, 5.3, 5.36, 5.31, 5.24, 5.2, 5.0, 4.91, 4.8, 4.6, 4.6, 4.55, 4.43, 4.32, 4.2, 4.21, 4.24, 4.28, 4.3, 4.33, 4.34, 4.47, 4.53, 4.56, 4.55, 4.71, 4.74, 4.77, 4.85, 4.80, 4.9, 4.92, 4.95, 5.06, 5.12, 5.13, 5.20, 5.23, 5.25, 5.28, 5.29, 5.4, 5.41, 5.44, 5.6, 5.55, 5.58, 5.65, 5.69, 5.74, 5.79, 5.83, 5.88, 5.87, 5.93, 5.96, 5.99, 5.95, 6.2, 6.3, 6.3, 6.1, 6.15, 6.2, 6.18, 6.08, 6.01, 5.8, 5.88, 5.6, 5.4, 5.56, 5.4, 5.55, 5.34, 5.4, 5.34, 5.26, 5.21, 5.20, 5.17, 5.12, 5.08, 4.98, 4.83, 4.81, 4.77, 4.54, 4.65, 4.66, 4.44, 4.41, 4.3, 4.34, 4.28, 4.29, 4.25, 4.24, 4.22, 4.21, 4.19, 4.08, 4.03, 4.12, 4.03, 4.03, 4.05, 4.06, 4.07, 3.99, 3.96, 3.81, 3.81, 3.76, 3.7, 3.5, 3.55, 3.49, 3.41, 3.35, 3.31, 3.28, 3.21, 3.19, 3.14, 3.06, 3.01, 2.96, 2.90, 2.85, 2.81, 2.71, 2.65, 2.60, 2.54, 2.51, 2.43, 2.39, 2.33, 2.21, 2.18, 2.11, 2.07, 2.01, 1.99, 1.95, 1.84, 1.81, 1.78, 1.71, 1.65, 1.61, 1.55, 1.51, 1.44, 1.39, 1.31, 1.28, 1.21, 1.14, 1.06, 0.99, 0.98, 0.91, 0.93, 0.95, 0.91, 0.88, 0.81, 0.76, 0.71, 0.65, 0.59, 0.51, 0.44, 0.43, 0.31, 0.22, 0.20, 0.21, 0.20, 0.10, 0.9, 0.9, 0.8, 0.8, 0.7, 0.7, 0.6, 0.6, 0.5, 0.5, 0.4, 0.4, 0.3, 0.3, 0.2, 0.2, 0.1, 0.1, 0  ];
    var speedAccel = [ 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 4, 5, 6, 7.1, 8, 9.1, 10, 11, 11.5, 11.7, 12, 12.4, 12.8, 13.8, 14.7, 15, 15.5, 16.2, 17, 17.8, 18.34, 19.34, 20, 20.2, 20.8, 20.5, 20.9, 21.2, 21.8, 22.9, 23.2, 23.9, 24.8, 24.9, 25.2, 25.5, 25.8, 26.3, 26.6, 27.1, 27.6, 27.9, 28.1, 28.7, 27,7, 28.3, 29.6, 29.4, 30.2, 30.9, 29.9, 30.1, 30.6, 29.9, 30.2, 31.3, 32.0, 31.8, 32, 32.3, 32.9, 33.3, 33.7, 32.9, 33.6, 34, 34.5, 35.1, 36.2, 36.3, 36.6, 36.9, 37.2, 37.3, 37.6, 37.8, 38.4, 38.6, 38.9, 39.2, 39.5, 39.8, 39.9, 40.2, 40.5, 40.7, 41.4, 41.8, 42.3, 42.6, 42.8, 43.1, 43.3, 43.5, 44.5, 45.1, 45.2, 45.7, 45.4, 45.8, 46.3, 46.1, 46.4, 46.7, 48.2, 48.3, 48, 48.4, 48.7, 49.3, 49.4, 49.5, 49.7, 49.7, 49.8, 49.9, 50.2, 50.23, 50.1, 50.6, 50.6, 51.2, 51.5, 51.7, 51.8, 52.9, 52.5, 53.4, 53.6, 54.2, 54.4, 54.9, 55.3, 55.6, 56.4, 56.6, 57.5, 58.3, 58.4, 58.9, 60.1, 60.3, 60.5, 60.9, 61.4, 61.3, 61.9, 62.3, 62.9, 63.3, 63.4, 63.9, 64.2, 64.5, 64.8, 65.2, 65.6, 65.9, 66.4, 66.7, 66.9, 67.1, 67.3, 67.8, 68.3, 68.7, 68.9, 69.3, 69.4, 69.6, 70.2, 71.3, 70.8, 71.4, 71.5, 71.8, 72.4, 73.3, 74.4, 73.1, 73.6, 73.9, 74.1, 74.5, 74.6, 74.7, 72.1, 70.1, 70.5, 70.0, 69.9, 69.1, 68.5, 66.3, 64.1, 63.4, 62.8, 62.6, 62.1, 61.8, 61.1, 60.54, 60.12, 59.3, 59.0, 58.5, 58.3, 57.53, 56.32, 55.43, 54.43, 54.67, 54.1, 53.32, 52.654, 51.54, 50.543, 49.54, 48.654, 47.43, 46, 45.2, 44.64, 43.54, 42.654, 41.54, 40.65, 39.543, 38.54, 37.543, 36.5, 35.432, 34.42, 33.543, 32.43, 31.43, 30.43, 29.432, 28.432, 27.43, 26.23, 26.42, 25.42, 25.242, 24.56, 24.65, 23.53, 23.53, 22.345, 22.34, 21.65, 21.78, 20.23, 20.12, 19.423, 19.54, 18.34, 18.56, 17.42, 17.42, 16.53, 16.765, 15.42, 15.52, 14.53, 14.534, 13.53, 13.65, 12.321, 12.42, 11.42, 11.65, 10.654, 10.53, 10.53, 9.53, 9.53, 9.65, 8.645, 9.64, 8.654, 8.23, 7.53, 7.23, 7.46, 6.3, 6.65, 6.231, 5.42, 5.75, 5.42, 4.31, 4.42, 4.31, 4.654, 3.32, 3.312, 3.42, 3.423, 3.53, 2.4, 2.543, 2.43, 2.534, 1.543, 1.543, 1.53, 1.65, 0.64, 0.645, 0.62, 0.64, 0.234, 0.324, 0  ];
    var spCounter = 0, valCounter = 0;

    $(document).ready(function() {
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'gauge',
                alignTicks: false,
                events: {
                    redraw: function() {
                       this.ledBox && this.ledBox.destroy();

                       // 2nd pane center
                       var pane = this.panes[1].center; 
                       this.ledBox = this.renderer.rect(pane[0]-50, pane[1], 120, 80, 3).attr({
                           fill: 'rgba(229,137,100, 0.1)',
                           zIndex: 0 
                       }).add();
                    }
                }
            },
            title: {
                text: 'Fiat 500 Speedometer'
            },
            pane: [{
                startAngle: -120,
                endAngle: 120,
                size: 300,
                background: [{
                    // BG color for rpm
                    backgroundColor: '#1A1815',
                    outerRadius: '68%',
                    innerRadius: '48%'
                }, {
                    // BG color in between speed and rpm
                    backgroundColor: '#38392F',
                    outerRadius: '72%',
                    innerRadius: '67%'
                }, {
                    // BG color for speed
                    //  backgroundColor: '#E4E3DF',
                    backgroundColor: { 
                       radialGradient: {
                          cx: 0.5,
                          cy: 0.6,
                          r: 1.0 
                        },
                       stops: [
                           [0.3, '#A7A9A4'],
                           //[0.6, '#FF04FF'],
                           [0.45, '#DDD'],
                           [0.7, '#EBEDEA'],
                           //[0.7, '#FFFF04'],
                       ]
                    },
                    innerRadius: '72%',
                    outerRadius: '105%'
                }, {
                    // Below rpm bg color
                    // backgroundColor: '#909090',
                    zIndex: 1,
                    backgroundColor: { 
                       radialGradient: {
                          cx: 0.5,
                          cy: 0.55,
                          r: 0.5 
                        },
                       stops: [
                           [0.6, '#48443B' ],
                           [0.8, '#909090'],
                           [1, '#FFFFF6']
                       ]
                    },
                    outerRadius: '48%',
                    innerRadius: '40%',
                }, {
                    backgroundColor: '#35382E',
                    zIndex: 1,
                    outerRadius: '40%',
                    innerRadius: '39%'
                }, {
                    backgroundColor: '#16160E',
                    outerRadius: '39%'

                }]
            }, {
                startAngle: -120,
                endAngle: 120,
                size: 200
            }],
            yAxis: [{
                title: {
                    text: 'mph km/h',
                    y: 178,
                    x: -86,
                    style: {
                        color: speedColor,
                        fontFamily: 'Squada One',
                        fontStyle: 'italic'
                    }
                },
                min: 0,
                max: 140,
                tickInterval: 10,
                tickLength: 6,
                lineWidth: 2,
                lineColor: speedColor,
                tickColor: speedColor,
                minorTickInterval: 5,
                minorTickLength: 3,
                minorTickWidth: 2,
                minorTickColor: speedColor,
                endOnTick: false,
                labels: {
                   rotation: 'auto',
                   step: 2,
                   style: {
                       fontFamily: 'Squada One',
                       fontSize: '28px',
                       color: speedColor,
                   }
                },
                pane: 0
            }, {
                min: 0,
                max: 220,
                tickLength: 2,
                minorTickLength: 2,
                minorTickInterval: 10,
                tickInterval: 10,
                tickPosition: 'outside',
                lineColor: speedColor,
                tickColor: speedColor,
                minorTickPosition: 'outside',
                minorTickColor: speedColor,
                labels: {
                   distance: 5,
                   rotation: 'auto',
                   style: {
                       color: speedColor ,
                       zIndex: 0
                   },
                   formatter: function() {
                       var val = null;
                       var label = this.value;
                       $.each(kmhArr, function(idx, kmh) {
                           if (label == kmh) {
                              val = label;
                              return false;
                           } 
                       }); 
                       return val;
                   }
                },
                endOnTick: false,
                offset: -40,
                pane: 0
            }, {
                title: {
                    text: 'rpm x1000',
                    y: 128,
                    x: -38,
                    style: {
                        color: rpmColor,
                        fontFamily: 'Squada One',
                        fontSize: '9px',
                        fontStyle: 'italic'
                    }
                },
                min: 0,
                max: 8,
                //offset: -50,
                minorTickInterval: 0.5,
                tickInterval: 1,
                tickLength: 3,
                minorTickLength: 6,
                lineColor: rpmColor,
                tickWidth: 2,
                minorTickWidth: 2,
                lineWidth: 2,
                labels: {
                   rotation: 'auto',
                   style: {
                       fontFamily: 'Squada One',
                       fontSize: '22px',
                       color: rpmColor 
                   },
                   formatter: function() {
                       if (this.value >=6) {
                          return '<span style="color:' + hiRef +'">' + this.value + "</span>";
                       }
                       return this.value;
                   }
                },
                pane: 1,
                plotBands: [{
                    from: 6,
                    to: 8,
                    color: hiRef,
                    innerRadius: '94%'
                }]
            }],
            tooltip: { enabled: false },
            credits: {
               enabled: false 
            },
            series: [{
                name: 'Speed',
                yAxis: 0,
                data: [ 0 ],
                dataLabels: {
                    color: '#E58964',
                    borderWidth: 0,
                    y: 24,
                    x: 0,
                    style: {
                        fontSize: '40px',
                        fontFamily: 'digital',
                        fontStyle: 'italic'
                    },
                    formatter: function() {
                        return this.y.toFixed(1);
                    }
                },
                dial: {
                    backgroundColor: dialColor,
                    baseLength: '90%',
                    baseWidth: 7,
                    radius: '100%',
                    topWidth: 3,
                    rearLength: '-74%',
                    borderColor: '#B17964',
                    borderWidth: 1
                },
                zIndex: 1,
                pivot: {
                    radius: '0'
                }
            }, {
                name: 'RPM',
                data: [ 0 ],
                yAxis: 2,                
                dataLabels: {
                    color: '#E58964',
                    borderWidth: 0,
                    y: -20,
                    x: 0,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'digital',
                        fontStyle: 'italic'
                    },
                    formatter: function() {
                        return (this.y * 1000).toFixed(0) + " rpm"
                    }
                },
                dial: {
                    backgroundColor: dialColor,
                    baseLength: '90%',
                    baseWidth: 7,
                    radius: '100%',
                    topWidth: 3,
                    rearLength: '-74%',
                    borderColor: '#631210',
                    borderWidth: 1
                },
                pivot: {
                    radius: '0'
                }
            }]
        }, function(chart) {

              // 2nd pane center
              var pane = chart.panes[1].center; 
              chart.ledBox = chart.renderer.rect(pane[0]-50, pane[1], 120, 80, 3).attr({
                    fill: 'rgba(229,137,100, 0)',
              }).add();

              var timer = setInterval(function () {
                   var val = (rpmAccel[valCounter] === undefined) ? null : rpmAccel[valCounter];
                   var speed = (speedAccel[spCounter] === undefined) ? null : speedAccel[spCounter];
                   if (val !== null) {
                       chart.series[1].points[0].update(val);
                       valCounter++;
                   }
                   if (speed !== null) {
                       chart.series[0].points[0].update(speed);
                       spCounter++;
                   }
                   if (speed === null && val === null) {
                       clearInterval(timer);
                   }
              }, 200);
        });
    });
    
});
    
  function Gauge(placeholderName, configuration)
{
  this.placeholderName = placeholderName;
  
  var self = this; // for internal d3 functions
  
  this.configure = function(configuration)
  {
    this.config = configuration;
    
    this.config.size = this.config.size * 0.9;
    
    this.config.raduis = this.config.size * 0.97 / 2;
    this.config.cx = this.config.size / 2;
    this.config.cy = this.config.size / 2;
    
    this.config.min = undefined != configuration.min ? configuration.min : 0; 
    this.config.max = undefined != configuration.max ? configuration.max : 100; 
    this.config.range = this.config.max - this.config.min;
    
    this.config.majorTicks = configuration.majorTicks || 5;
    this.config.minorTicks = configuration.minorTicks || 2;
    
    this.config.greenColor  = configuration.greenColor || "#109618";
    this.config.yellowColor = configuration.yellowColor || "#FF9900";
    this.config.redColor  = configuration.redColor || "#DC3912";
    
    this.config.transitionDuration = configuration.transitionDuration || 500;
  }

  this.render = function()
  {
    this.body = d3.select("#" + this.placeholderName)
              .append("svg:svg")
              .attr("class", "gauge")
              .attr("width", this.config.size)
              .attr("height", this.config.size);
    
    this.body.append("svg:circle")
          .attr("cx", this.config.cx)
          .attr("cy", this.config.cy)
          .attr("r", this.config.raduis)
          .style("fill", "#ccc")
          .style("stroke", "#000")
          .style("stroke-width", "0.5px");
          
    this.body.append("svg:circle")
          .attr("cx", this.config.cx)
          .attr("cy", this.config.cy)
          .attr("r", 0.9 * this.config.raduis)
          .style("fill", "#fff")
          .style("stroke", "#e0e0e0")
          .style("stroke-width", "2px");
          
    for (var index in this.config.greenZones)
    {
      this.drawBand(this.config.greenZones[index].from, this.config.greenZones[index].to, self.config.greenColor);
    }
    
    for (var index in this.config.yellowZones)
    {
      this.drawBand(this.config.yellowZones[index].from, this.config.yellowZones[index].to, self.config.yellowColor);
    }
    
    for (var index in this.config.redZones)
    {
      this.drawBand(this.config.redZones[index].from, this.config.redZones[index].to, self.config.redColor);
    }
    
    if (undefined != this.config.label)
    {
      var fontSize = Math.round(this.config.size / 9);
      this.body.append("svg:text")
            .attr("x", this.config.cx)
            .attr("y", this.config.cy / 2 + fontSize / 2)
            .attr("dy", fontSize / 2)
            .attr("text-anchor", "middle")
            .text(this.config.label)
            .style("font-size", fontSize + "px")
            .style("fill", "#333")
            .style("stroke-width", "0px");
    }
    
    var fontSize = Math.round(this.config.size / 16);
    var majorDelta = this.config.range / (this.config.majorTicks - 1);
    for (var major = this.config.min; major <= this.config.max; major += majorDelta)
    {
      var minorDelta = majorDelta / this.config.minorTicks;
      for (var minor = major + minorDelta; minor < Math.min(major + majorDelta, this.config.max); minor += minorDelta)
      {
        var point1 = this.valueToPoint(minor, 0.75);
        var point2 = this.valueToPoint(minor, 0.85);
        
        this.body.append("svg:line")
              .attr("x1", point1.x)
              .attr("y1", point1.y)
              .attr("x2", point2.x)
              .attr("y2", point2.y)
              .style("stroke", "#666")
              .style("stroke-width", "1px");
      }
      
      var point1 = this.valueToPoint(major, 0.7);
      var point2 = this.valueToPoint(major, 0.85);  
      
      this.body.append("svg:line")
            .attr("x1", point1.x)
            .attr("y1", point1.y)
            .attr("x2", point2.x)
            .attr("y2", point2.y)
            .style("stroke", "#333")
            .style("stroke-width", "2px");
      
      if (major == this.config.min || major == this.config.max)
      {
        var point = this.valueToPoint(major, 0.63);
        
        this.body.append("svg:text")
              .attr("x", point.x)
              .attr("y", point.y)
              .attr("dy", fontSize / 3)
              .attr("text-anchor", major == this.config.min ? "start" : "end")
              .text(major)
              .style("font-size", fontSize + "px")
              .style("fill", "#333")
              .style("stroke-width", "0px");
      }
    }
    
    var pointerContainer = this.body.append("svg:g").attr("class", "pointerContainer");
    
    var midValue = (this.config.min + this.config.max) / 2;
    
    var pointerPath = this.buildPointerPath(midValue);
    
    var pointerLine = d3.svg.line()
                  .x(function(d) { return d.x })
                  .y(function(d) { return d.y })
                  .interpolate("basis");
    
    pointerContainer.selectAll("path")
              .data([pointerPath])
              .enter()
                .append("svg:path")
                  .attr("d", pointerLine)
                  .style("fill", "#dc3912")
                  .style("stroke", "#c63310")
                  .style("fill-opacity", 0.7)
          
    pointerContainer.append("svg:circle")
              .attr("cx", this.config.cx)
              .attr("cy", this.config.cy)
              .attr("r", 0.12 * this.config.raduis)
              .style("fill", "#4684EE")
              .style("stroke", "#666")
              .style("opacity", 1);
    
    var fontSize = Math.round(this.config.size / 10);
    pointerContainer.selectAll("text")
              .data([midValue])
              .enter()
                .append("svg:text")
                  .attr("x", this.config.cx)
                  .attr("y", this.config.size - this.config.cy / 4 - fontSize)
                  .attr("dy", fontSize / 2)
                  .attr("text-anchor", "middle")
                  .style("font-size", fontSize + "px")
                  .style("fill", "#000")
                  .style("stroke-width", "0px");
    
    this.redraw(this.config.min, 0);
  }
  
  this.buildPointerPath = function(value)
  {
    var delta = this.config.range / 13;
    
    var head = valueToPoint(value, 0.85);
    var head1 = valueToPoint(value - delta, 0.12);
    var head2 = valueToPoint(value + delta, 0.12);
    
    var tailValue = value - (this.config.range * (1/(270/360)) / 2);
    var tail = valueToPoint(tailValue, 0.28);
    var tail1 = valueToPoint(tailValue - delta, 0.12);
    var tail2 = valueToPoint(tailValue + delta, 0.12);
    
    return [head, head1, tail2, tail, tail1, head2, head];
    
    function valueToPoint(value, factor)
    {
      var point = self.valueToPoint(value, factor);
      point.x -= self.config.cx;
      point.y -= self.config.cy;
      return point;
    }
  }
  
  this.drawBand = function(start, end, color)
  {
    if (0 >= end - start) return;
    
    this.body.append("svg:path")
          .style("fill", color)
          .attr("d", d3.svg.arc()
            .startAngle(this.valueToRadians(start))
            .endAngle(this.valueToRadians(end))
            .innerRadius(0.65 * this.config.raduis)
            .outerRadius(0.85 * this.config.raduis))
          .attr("transform", function() { return "translate(" + self.config.cx + ", " + self.config.cy + ") rotate(270)" });
  }
  
  this.redraw = function(value, transitionDuration)
  {
    var pointerContainer = this.body.select(".pointerContainer");
    
    pointerContainer.selectAll("text").text(Math.round(value));
    
    var pointer = pointerContainer.selectAll("path");
    pointer.transition()
          .duration(undefined != transitionDuration ? transitionDuration : this.config.transitionDuration)
          //.delay(0)
          //.ease("linear")
          //.attr("transform", function(d) 
          .attrTween("transform", function()
          {
            var pointerValue = value;
            if (value > self.config.max) pointerValue = self.config.max + 0.02*self.config.range;
            else if (value < self.config.min) pointerValue = self.config.min - 0.02*self.config.range;
            var targetRotation = (self.valueToDegrees(pointerValue) - 90);
            var currentRotation = self._currentRotation || targetRotation;
            self._currentRotation = targetRotation;
            
            return function(step) 
            {
              var rotation = currentRotation + (targetRotation-currentRotation)*step;
              return "translate(" + self.config.cx + ", " + self.config.cy + ") rotate(" + rotation + ")"; 
            }
          });
  }
  
  this.valueToDegrees = function(value)
  {
    // thanks @closealert
    //return value / this.config.range * 270 - 45;
    return value / this.config.range * 270 - (this.config.min / this.config.range * 270 + 45);
  }
  
  this.valueToRadians = function(value)
  {
    return this.valueToDegrees(value) * Math.PI / 180;
  }
  
  this.valueToPoint = function(value, factor)
  {
    return {  x: this.config.cx - this.config.raduis * factor * Math.cos(this.valueToRadians(value)),
          y: this.config.cy - this.config.raduis * factor * Math.sin(this.valueToRadians(value))    };
  }
  
  // initialization
  this.configure(configuration);  
}
