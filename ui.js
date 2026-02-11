var markers=[];

// ================= LOAD APPROVED PLACES =================
function refreshMap(){
  markers.forEach(m=>map.removeLayer(m));
  markers=[];

  getPlaces().filter(p=>p.approved).forEach(p=>{
    var m = L.marker(
      [p.lat,p.lng],
      { icon: icons[p.type] }
    ).addTo(map);

    m.bindPopup(`<b>${p.name}</b><br>${p.type}`);
    markers.push(m);
  });
}
refreshMap();

// ================= SEARCH SUGGESTION =================
searchBox.oninput = () => {
  var q = searchBox.value.toLowerCase();
  if(!q) return;

  var match = getPlaces().filter(p =>
    p.approved && p.name.toLowerCase().includes(q)
  );

  if(match.length>0){
    map.setView([match[0].lat, match[0].lng], 16);
  }
};
