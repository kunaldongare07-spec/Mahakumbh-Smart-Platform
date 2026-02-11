var kumbhBounds = [
  [20.012,73.785],
  [20.012,73.800],
  [19.995,73.805],
  [19.995,73.780]
];

var map = L.map("map").setView([20.0059,73.7910],14);
map.setMaxBounds(kumbhBounds);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// Category Icons
var icons = {
  Temple: L.icon({ iconUrl:"https://cdn-icons-png.flaticon.com/512/3448/3448339.png", iconSize:[32,32]}),
  Ghat: L.icon({ iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684908.png", iconSize:[32,32]}),
  Bus: L.icon({ iconUrl:"https://cdn-icons-png.flaticon.com/512/61/61212.png", iconSize:[32,32]}),
  Toilet: L.icon({ iconUrl:"https://cdn-icons-png.flaticon.com/512/2965/2965567.png", iconSize:[32,32]}),
  Shop: L.icon({ iconUrl:"https://cdn-icons-png.flaticon.com/512/34/34627.png", iconSize:[32,32]}),
  Tent: L.icon({ iconUrl:"https://cdn-icons-png.flaticon.com/512/854/854894.png", iconSize:[32,32]}),
  Hospital: L.icon({ iconUrl:"https://cdn-icons-png.flaticon.com/512/2967/2967350.png", iconSize:[32,32]}),
  Parking: L.icon({ iconUrl:"https://cdn-icons-png.flaticon.com/512/684/684831.png", iconSize:[32,32]})
};
