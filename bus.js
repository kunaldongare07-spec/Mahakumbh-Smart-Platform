var busRoute = L.polyline([
  [20.0052,73.7876],
  [20.0100,73.7800],
  [20.0150,73.7750]
], {color:"green"});

var visible = false;

busToggle.onclick = ()=>{
  visible = !visible;
  visible ? busRoute.addTo(map) : map.removeLayer(busRoute);
};
