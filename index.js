//selecting and manipulating dom elements
d3.select('h1').style('color', 'Orange');
d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.selectAll('p').style('color', 'blue');