var locations = [
  {name:"Nashik Bus Stand", lat:20.0052, lng:73.7876},
  {name:"Nashik Railway Station", lat:20.0033, lng:73.7868},
  {name:"Ram Kund", lat:20.0065, lng:73.7920}
];

locations.forEach(p=>{
  L.marker([p.lat,p.lng]).addTo(map)
   .bindPopup(`<b>${p.name}</b>`);
});
