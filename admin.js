function render(){
  var box=document.getElementById("list");
  box.innerHTML="";

  getPlaces().forEach(p=>{
    var div=document.createElement("div");
    div.innerHTML=`
      <b>${p.name}</b> (${p.type})
      <button onclick="approve(${p.id})">Approve</button>
      <button onclick="removeP(${p.id})">Delete</button>
      <hr>
    `;
    box.appendChild(div);
  });
}

function approve(id){
  var d=getPlaces();
  d.find(p=>p.id==id).approved=true;
  savePlaces(d);
  render();
}

function removeP(id){
  savePlaces(getPlaces().filter(p=>p.id!=id));
  render();
}

render();
