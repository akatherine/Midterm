/*
 * Create a basic map.
 * documentation: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */

var map;
function initMap() {
  map = new google.maps.Map( document.getElementById( 'map' ), {
    center: { lat: 17.483418, lng: -90.340576 },
    zoom: 6
  });

  var MayaSites = new google.maps.KmlLayer({
   url: 'http://mayagis.smv.org/MayaSites.kmz',
   preserveViewport: true // setting to true will prevent the map from zooming to this layer
  });
  MayaSites.setMap( map );

}
