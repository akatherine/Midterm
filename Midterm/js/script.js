	var map = L.map('map').setView([17.483418, -90.340576], 7);

var streets =	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  }).addTo(map);

var realtime = L.tileLayer.wms ("http://nowcoast.noaa.gov/arcgis/services/nowcoast/obs_meteocean_insitu_sfc_time/MapServer/WMSServer",
{
		layers: '3',
		format: 'image/png',
		transparent: true,
		attribution: "NOAA",
		opacity: 0.50
 }).addTo (map);

 var recentradar = L.tileLayer.wms ("http://nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer",
 {
 		layers: '1',
 		format: 'image/png',
 		transparent: true,
 		attribution: "NOAA",
 		opacity: 0.50
  }).addTo (map);

	var recentsatellite = L.tileLayer.wms ("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_imagery_goes_time/MapServer/WMSServer",
  {
  		layers: '1',
  		format: 'image/png',
  		transparent: true,
  		attribution: "NOAA",
  	  opacity: 0.25
   }).addTo (map);

var baselayers = {
	"streets": streets
};

var overlays = {
	"Surface": realtime,
	"RecentRadar": recentradar,
	"RecentSatellite": recentsatellite
};

L.control.layers(baselayers, overlays).addTo(map);
