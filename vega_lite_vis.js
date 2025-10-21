// Load Malaysia Choropleth Map
vegaEmbed('#vis_map', 'malaysia_income_map.vg.json', { actions: false })
  .then(function(result) {
    const view = result.view;
    const infoCard = document.querySelector('.map-info-card');

    if (infoCard) {
      //  Detect region change
      view.addSignalListener('map_region', function(name, value) {
        if (value === 'Malaysia') {
          infoCard.style.opacity = '1';  // show when full map
          infoCard.style.visibility = 'visible';
        } else {
          infoCard.style.opacity = '0';  // hide when zoomed
          infoCard.style.visibility = 'hidden';
        }
      });
    }
  })
  .catch(console.error);



// Load Median Income Area Chart
var areaSpec = "area_chart.json";
vegaEmbed('#vis_area', areaSpec, {actions: false}).catch(console.error);

// Load Dumbbell Chart
vegaEmbed('#vis_dumbbell', 'dumbbell_chart.json', {actions: false})
  .then(function(result) {})
  .catch(console.error);

// Load Scatter Plot (Median Income vs Poverty Rate)
vegaEmbed('#vis_scatter', 'scatterplot.json', {actions: false})
  .then(function(result) {})
  .catch(console.error);

// Load Cost of Living Lollipop Chart
vegaEmbed('#vis_lollipop', 'lollipop_chart.json', {actions: false})
  .then(function(result) {})
  .catch(console.error);

// Load Dual-Axis Chart (Purchasing Power vs Quality of Life)
vegaEmbed('#vis_dualaxis', 'dual_axis_chart.json', {actions: false})
  .then(function(result) {})
  .catch(console.error);

// Load Butterfly Chart (Male vs Female Salary Comparison)
vegaEmbed('#vis_butterfly', 'butterfly_chart.json', {actions: false})
  .then(function(result) {})
  .catch(console.error);
