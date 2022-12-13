const input=document.getElementById("input")
const grid=document.getElementsByClassName("grid")[0]

window.addEventListener('load', dayNightMode)
input.addEventListener('keydown', function(event){
  console.log("event object", event);
  if(event.key==='Enter')
  loadImg()
})

function loadImg(){
  removeImages();

  const url = `https://api.unsplash.com/search/photos/?query=${input.value}&per_page=9&client_id=iHSC-INyec940aWjUAjJ_76Yp0X4LY77xwwHdMj_mls`;

  fetch(url)
  .then(response => {
    if(response.ok)
    return response.json();
    else
    alert(response.status)
  })
  .then(data=>{
    const imageNotes=[]
    for(let i=0; i<data.results.length;i++){
      imageNotes[i]=document.createElement("div")
      imageNotes[i].className="img";
      imageNotes[i].style.backgroundImage='url('+data.results[i].urls.raw+')'
      imageNotes[i].addEventListener("dblclick",()=>{
        window.open(data.results[i].links.download,'_blank')
      })
      grid.appendChild(imageNotes[i])
    }
  })
}

function removeImages(){
  grid.innerHTML="";
}

function dayNightMode(){
  const date= new Date();
  const hour=date.getHours()
  if(hour>=7 && hour<=19){
    document.body.style.backgroundColor="whitesmoke";
    document.body.style.color="black";
  }
  else{
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
  }
}
