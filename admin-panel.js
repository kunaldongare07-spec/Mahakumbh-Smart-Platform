function render(){
  list.innerHTML="";
  getPlaces().forEach(p=>{
    var div=document.createElement("div");
    div.innerHTML=`
      <b>${p.name}</b> (${p.category})<br>
      <button onclick="removePlace(${p.id})">Delete</button>
      <hr>`;
    list.appendChild(div);
  });
}

saveBtn.onclick=()=>{
  var data=getPlaces();
  data.push({
    id:Date.now(),
    name:name.value,
    category:category.value,
    lat:+lat.value,
    lng:+lng.value,
    approved:true,
    reviews:[]
  });
  savePlaces(data);
  render();
};

function removePlace(id){
  savePlaces(getPlaces().filter(p=>p.id!=id));
  render();
}

render();
