var trace1 = {
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    y: [1000, 1250, 600, 750, 1500, 1250, 1400, 800, 1325, 735],
    text: ['Bonfire', 'Heartbeat', 'Shadows', 'Firefly', 'Freaks & Geeks', 'One Up', '3005','Telegraph Ave.', 'Sober', 'The Worst Guys'],
    mode: 'markers',
    marker: {
        color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)', 'rgb(93, 164, 214)', 'rgb(255, 144, 14)',],
        size: [100, 125, 60, 75, 150, 125, 140, 80, 132.5, 73.5],
    }
};

var data = [trace1];

var layout = {
    title: 'Your Current Favorite Songs',
    showlegend: false,
    modebar: false,
};

Plotly.newPlot('myDiv', data, layout);
