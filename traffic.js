var trafficLayer=L.polyline([
  [20.0059,73.7910],
  [20.0100,73.7850],
  [20.0150,73.7800]
],{color:"red",weight:6});

var traffic=false;

trafficBtn.onclick=()=>{
  traffic=!traffic;
  traffic?trafficLayer.addTo(map):map.removeLayer(trafficLayer);
};
