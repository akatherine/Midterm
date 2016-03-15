require(["esri/map", "dojo/domReady!"], function(Map) {
  var map = new Map("map", {
    center: [-117, -90],
    zoom: 7,
    basemap: "topo"
  });


        require([
          "dojo/parser",
          "dojo/ready",
          "dijit/layout/BorderContainer",
          "dijit/layout/ContentPane",
          "dojo/dom",
          "esri/map",
          "esri/urlUtils",
          "esri/arcgis/utils",
          "esri/dijit/Legend",
          "esri/dijit/Scalebar",
          "dojo/domReady!"
        ], function(
          parser,
          ready,
          BorderContainer,
          ContentPane,
          dom,
          Map,
          urlUtils,
          arcgisUtils,
          Legend,
          Scalebar
        ) {
          ready(function(){

          parser.parse();

  //if accessing webmap from a portal outside of ArcGIS Online, uncomment and replace path with portal URL
         //arcgisUtils.arcgisUrl = "https://pathto/portal/sharing/content/items";
          arcgisUtils.createMap("39d2ab6fced74396b6a6a03011bc8ec0","map").then(function(response){
            //update the app
            dom.byId("title").innerHTML = response.itemInfo.item.title;
            dom.byId("subtitle").innerHTML = response.itemInfo.item.snippet;

            var map = response.map;



            //add the scalebar
            var scalebar = new Scalebar({
              map: map,
              scalebarUnit: "english"
            });

            //add the legend. Note that we use the utility method getLegendLayers to get
            //the layers to display in the legend from the createMap response.
            var legendLayers = arcgisUtils.getLegendLayers(response);
            var legendDijit = new Legend({
              map: map,
              layerInfos: legendLayers
            },"legend");
            legendDijit.startup();


          });


          });

        });























  //this will be the last line
});
