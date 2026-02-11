var routeControl;

document.getElementById("routeBtn").onclick = ()=>{
  var s = startPoint.value.split(",");
  var e = endPoint.value.split(",");

  if(s.length!=2||e.length!=2) return alert("lat,lng format");

  if(routeControl) map.removeControl(routeControl);

  routeControl = L.Routing.control({
    waypoints:[
      L.latLng(+s[0],+s[1]),
      L.latLng(+e[0],+e[1])
    ]
  }).addTo(map);
};

clearRouteBtn.onclick = ()=>{
  if(routeControl) map.removeControl(routeControl);
};
