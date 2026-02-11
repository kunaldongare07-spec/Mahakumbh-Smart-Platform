if(!localStorage.places){
  localStorage.places = JSON.stringify([]);
}

function getPlaces(){
  return JSON.parse(localStorage.places);
}

function savePlaces(d){
  localStorage.places = JSON.stringify(d);
}
