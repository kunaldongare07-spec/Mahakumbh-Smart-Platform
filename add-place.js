var modal=document.getElementById("modal");
var addBtn=document.getElementById("addBtn");
var mapPickBtn=document.getElementById("mapPickBtn");
var gpsBtn=document.getElementById("gpsBtn");
var closeBtn=document.getElementById("closeBtn");

var selectedLatLng=null;
var addMode=false;

addBtn.onclick=()=>modal.style.display="flex";
closeBtn.onclick=()=>modal.style.display="none";

mapPickBtn.onclick=()=>{
  addMode=true;
  alert("Click on map to select location");
};

gpsBtn.onclick=()=>{
  navigator.geolocation.getCurrentPosition(pos=>{
    selectedLatLng={
      lat:pos.coords.latitude,
      lng:pos.coords.longitude
    };
    savePlace();
  });
};

map.on("click",e=>{
  if(!addMode) return;
  selectedLatLng=e.latlng;
  savePlace();
});

function savePlace(){
  var name=placeName.value;
  var type=placeType.value;
  var photo=photoInput.files[0];

  if(!name||!selectedLatLng){
    alert("Missing data");
    return;
  }

  var reader=new FileReader();
  reader.onload=function(){
    var d=getPlaces();
    d.push({
      id:Date.now(),
      name,
      type,
      lat:selectedLatLng.lat,
      lng:selectedLatLng.lng,
      photo:reader.result,
      approved:false,
      reviews:[]
    });
    savePlaces(d);
    alert("Sent for admin approval!");
    modal.style.display="none";
    addMode=false;
  };
  if(photo) reader.readAsDataURL(photo);
  else reader.onload();
}
