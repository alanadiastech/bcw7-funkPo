
// FUNÇÃO PARA ANIMAÇÃO DO MENU DO HEADER
// $("#btn").click(function(){
//   $("#menu > ul").slideToggle(800)
//   $("#menu > ul").css("display", "block")
// })

// FUNÇAÕ PARA ANIMAÇÃO DO BOTÃO MENU (Djou)
$("#menu").click(function(){
  $("#menu ul").animate({
    height: 'toggle'
  })
})
// FIM DA FUNÇÃO DE ANIMAÇÃO (Djou)


// BLUR E FOCUS PARA APAGAR/ESCREVER O VALUE "BUSCAR..." DA BARRA DE BUSCA DO HEADER (Djou)
$("input#barraBusca").focus(function(){
    this.value = " ";
})

$("input#barraBusca").blur(function(){
    this.value = " Buscar...";
})
// FIM DO BLUR E FOCUS DA BUSCA (Djou)



// ACESSIBILIDADE / ZOOM (Alana)
function fonte(e){
  var elemento = $(".acessibilidade");
  var fonte = elemento.css('fontSize');

  if(e == 'a') {
    elemento.css("fontSize", parseInt(fonte) + 1);
  
  } else if('d'){
    elemento.css("fontSize", parseInt(fonte) - 1);
  }
}




//ASIDE  HUGO

$("#promocao").hide();
$("#historia").hide();
$("#marvel").hide();
$("#starwars").hide();
$("#naruto").hide();
$("#kratos").hide();
$("#chaves").hide();
$("#icecube").hide();


$(".botaoaside1").click(function(){
  $("#promocao").toggle();

})


$(".botaoaside2").click(function(){
  $("#historia").toggle();
})

$(".botaoaside3").click(function(){
  $("#marvel").toggle();
})


$(".botaoaside4").click(function(){
  $("#starwars").toggle();
})

$(".botaoaside5").click(function(){
  $("#naruto").toggle();
})

$(".botaoaside6").click(function(){
  $("#kratos").toggle();
})

$(".botaoaside7").click(function(){
  $("#chaves").toggle();
})

$(".botaoaside8").click(function(){
  $("#icecube").toggle();
})


//FIM DO ASIDE HUGO
