
// BANNER CARROSSEL (Djou)
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img  img");

let idx = 0;

function carrossel(){
  idx++;

  if(idx > img.length - 1){
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 94}em)`;
}

setInterval(carrossel, 4000);


// FIM DO BANNER CARROSSEL (Djou)


