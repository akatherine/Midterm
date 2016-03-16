function addmypopup(feature, layer){
 html = feature.properties.Site_Name + '<br>' + feature.properties.State + ", " + feature.properties.Country +  ", " +feature.properties.Time_perio + '<br>' +'<img src = "'+ feature.properties.ImagePath +'"></div>';
layer.bindPopup(html);
}

var map = L.map('map').setView([19,-89], 6);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var satellite = L.tileLayer( 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.{ext}', {
	type: 'sat',
	ext: 'jpg',
	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
	subdomains: '1234'
});



$.getJSON( "https://raw.githubusercontent.com/akatherine/Midterm/gh-pages/Midterm/VisitedSites.geojson",
function( geojsonFeature ) {
  // code to do something with geojsonFeatures goes here, such as the L.geoJson function with the onEachFeature option

  L.geoJson(geojsonFeature, {
  onEachFeature: addmypopup



}).addTo(map);


});
