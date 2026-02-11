var map = L.map("map").setView([20.0059,73.7910],13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

var previewMarker=null;

previewBtn.onclick=()=>{
  if(previewMarker) map.removeLayer(previewMarker);

  previewMarker = L.marker([+lat.value,+lng.value]).addTo(map)
    .bindPopup(name.value).openPopup();
};
