function toggle(id,type){
  document.getElementById(id).addEventListener("change",e=>{
    e.target.checked ? map.addLayer(layers[type]) : map.removeLayer(layers[type]);
  });
}

toggle("ghatToggle","Ghat");
toggle("templeToggle","Temple");
toggle("parkingToggle","Parking");
toggle("hospitalToggle","Hospital");

document.getElementById("searchBox").addEventListener("input",e=>{
  var val = e.target.value.toLowerCase();

  allMarkers.forEach(o=>{
    if(o.loc.name.toLowerCase().includes(val)){
      o.marker.addTo(map);
    } else {
      map.removeLayer(o.marker);
    }
  });
});
