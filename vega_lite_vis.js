// Load Malaysia Choropleth Map
var mapSpec = "malaysia_income_map.vg.json";
vegaEmbed('#vis_map', mapSpec, {actions: false}).catch(console.error);

// Load Median Income Area Chart
var areaSpec = "area_chart.json";
vegaEmbed('#vis_area', areaSpec, {actions: false}).catch(console.error);

