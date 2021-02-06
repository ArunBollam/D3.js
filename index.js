//selecting and manipulating dom elements
d3.select('h1').style('color', 'Orange');
d3.select('body').append('p').text('First Paragraph, created and changed color using d3');
d3.select('body').append('p').text('Second Paragraph');
d3.selectAll('p').style('color', 'blue');

//bar chart
var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = svgWidth /dataset.length;
var svg = d3.select('svg')
            .attr("width", svgWidth)
            .attr("height", svgHeight);

var barChart = svg.selectAll('rect')
                    .data(dataset)
                    .enter()
                    .append('rect')
                    .attr("y", function(d){
                        return svgHeight - d;
                    })
                    .attr("height", function(d){
                        return d
                    })
                    .attr("width", barWidth - barPadding)
                    .attr("class", "bar")
                    .attr("transform", function(d, i){
                        var translate = [barWidth * i, 0];
                        return "translate("+translate + ")";
                    });

var xScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, svgWidth]);

var yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])