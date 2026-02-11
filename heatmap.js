var heat=L.heatLayer([
  [20.0065,73.7920,0.9],
  [20.0120,73.7880,0.7]
],{radius:35});

var h=false;

heatBtn.onclick=()=>{
  h=!h;
  h?heat.addTo(map):map.removeLayer(heat);
};
