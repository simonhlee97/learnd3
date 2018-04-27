var svgWidth = 600, svgHeight = 500;

var svg = d3.select(".shapes")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("class", "svg-container");
	
// Create an svg line
var line = svg.append("line")
    .attr("x1", 100)
    .attr("x2", 500)
    .attr("y1", 50)
    .attr("y2", 50)
	.attr("stroke", "red")
	.attr("stroke-width", 5);

	// create svg rectangle
var rect = svg.append("rect")
    .attr("x", 100)
    .attr("y", 100)
    .attr("width", 200)
    .attr("height", 100)
	.attr("fill", "#9B95FF");
	
	// create svg circle
var circle = svg.append("circle")
    .attr("cx", 200)
    .attr("cy", 300)
    .attr("r", 80)
    .attr("fill", "#7CE8D5");