function addmypopup(feature, layer){
 html = feature.properties.Site_Name + '<br>' + feature.properties.State + ", " + feature.properties.Country + '<br>' + '<img src = "'+ feature.properties.ImagePath +'">';
layer.bindPopup(html);
}

var map = L.map('map').setView([17,-90], 7);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



$.getJSON( "https://raw.githubusercontent.com/akatherine/Midterm/gh-pages/Midterm/VisitedSites.geojson",
function( geojsonFeature ) {
  // code to do something with geojsonFeatures goes here, such as the L.geoJson function with the onEachFeature option

  L.geoJson(geojsonFeature, {
  onEachFeature: addmypopup
}).addTo(map);

});
