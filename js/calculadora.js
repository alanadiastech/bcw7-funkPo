// Hugo

var valor1, valor2, op;


// MOSTRA OS VALORES NO CAMPO DO RESULTADO
$(function(){
    
    //INICIA COM VALORES OCULTOS
    $(".container").hide();
    $("input[name=raiz]").hide();
    $("input[name=elevado2]").hide();
    $("input[name=elevado3]").hide();
    $("#normal").hide();
    $("#cientifica").hide();


    //ABRIR CALCULADORA
        $("#mostrar").click(function(){

            $(".container").toggle(500);
            $("#normal").toggle(500);
            $("#cientifica").toggle(500);
            // $("input[name=raiz]").hide();
            // $("input[name=elevado2]").hide();
            // $("input[name=elevado3]").hide();
        })

        // FUNÇÃO PARA ALTERAR VALOR DO BOTÃO. (FECHAR/ABRIR)
        $("#mostrar").click(function(){
            if($("#mostrar").val() == "Fechar"){
                $("#mostrar").val("Abrir");
                $("#textCalc").show(500);
            
            } else{
                $("#mostrar").val("Fechar");
                $("#textCalc").hide(500);
            }
        })



//CALCULADORA NORMAL
    $("#normal").click(function(){
        $(".container").show(500);
        $("input[name=raiz]").hide(500);
        $("input[name=elevado2]").hide(500);
        $("input[name=elevado3]").hide(500);
        

    })

    //CALCULADORA CIENTÍFICA
    $("#cientifica").click(function(){
        $(".container").show(500);
        $("input[name=raiz]").show(500);
        $("input[name=elevado2]").show(500);
        $("input[name=elevado3]").show(500);
        

    })




//CAMPO RESULTADO RECEBE VALORES JUNTOS
 $("input[name=btn]").click( function(){
     $("#result").val($("#result").val() + $(this).val());
 })


// ***************** CE
$(function(){

    $("input[name=C]").click(function(){
        $("#result").val(" ");
        $("#result").text(" ");
        $("#op").val(" ");
        $("#op").text(" ");
    })


})

// ***************** CE
$(function(){

    $("input[name=CE]").click(function(){
        $("#result").val(" ");
        $("#result").text(" ");
        $("#op").val(" ");
        $("#op").text(" ");
    })


})


// *********************** SOMAR
// Após clicar no input soma , se o campo result que é o que armazena valores
// estiver preenchido , o valor é convertido em float , e limpa o campo ,
//variável op recebe soma e armazena,
//"op" recebe o value definido no html que é o sinal de + para indicar a soma
//se tentarmos somar sem valor definido , chama o alerta para inserir um valor
// Mesma linha de raciocínio para as próximas operações matemáticas.


$("input[name=soma]").click(function(){
    if($("#result").val() != ""){
        valor1 = parseFloat($("#result").val());
        $("#result").val(" ");
      
        op = "soma";
        $("#op").text($(this).val());
     
     

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }
})


// *********************** SOMAR

//Quando chamamos o botão igual , pegamos o segundo valor colocado no campo result
//convertemos em float , se confirmamos no if que a operação escolhida foi soma 
//então chamamos o sinal = e fazemos a operação de somar
//Se não for colocado nenhum valor , chamará um alert pedindo um valor
$("input[name=igual]").click(function(){
    if($("#result").val() != ""){
        valor2 = parseFloat($("#result").val());

        if(op == "soma"){
        $("#op").text("=");    
        $("#result").val(valor1+valor2);    
        }
        
             

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }


})




// *********************** SUBTRAIR
$("input[name=subtrair]").click(function(){
    if($("#result").val() != ""){
        valor1 = parseFloat($("#result").val());
        $("#result").val(" ");
      
        op = "subtrair";
        $("#op").text($(this).val());
     
     

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }
})


// *********************** SUBTRAIR
$("input[name=igual]").click(function(){
    if($("#result").val() != ""){
        valor2 = parseFloat($("#result").val());

        if(op == "subtrair"){
        $("#op").text("=");    
        $("#result").val(valor1-valor2);    
        }
        
             

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }


})


// *********************** DIVIDIR
$("input[name=dividir]").click(function(){
    if($("#result").val() != ""){
        valor1 = parseFloat($("#result").val());
        $("#result").val(" ");
      
        op = "dividir";
        $("#op").text($(this).val());
     
     

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }
})


// *********************** DIVIDIR
$("input[name=igual]").click(function(){
    if($("#result").val() != ""){
        valor2 = parseFloat($("#result").val());

        if(op == "dividir"){
        $("#op").text("=");    
        $("#result").val(valor1/valor2);    
        }
        
             

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }


})


// *********************** MULTIPLICAR
$("input[name=multiplicar]").click(function(){
    if($("#result").val() != ""){
        valor1 = parseFloat($("#result").val());
        $("#result").val(" ");
      
        op = "multiplicar";
        $("#op").text($(this).val());
     
     

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }
})


// *********************** MULTIPLICAR
$("input[name=igual]").click(function(){
    if($("#result").val() != ""){
        valor2 = parseFloat($("#result").val());

        if(op == "multiplicar"){
        $("#op").text("=");    
        $("#result").val((valor1)*(valor2));    
        }
        
             

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }


})



//RAIZ QUADRADA
$("input[name=raiz]").click(function(){
    if($("#result").val() != ""){
        valor1 = parseFloat($("#result").val());
        $("#result").val(" ");
      
        op = "raiz";
        $("#op").text($(this).val());
     
     

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }
})




// *********************** RAIZ QUADRADA
$("input[name=igual]").click(function(){
    if($("#result").val() != ""){
        valor2 = parseFloat($("#result").val());

        if(op == "raiz"){
        $("#op").text("=");    
        $("#result").val(Math.sqrt(valor1));    
        }
        
             

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }


})



//ELEVADO A ² POTÊNCIA
$("input[name=elevado2]").click(function(){
    if($("#result").val() != ""){
        valor1 = parseFloat($("#result").val());
        $("#result").val(" ");
      
        op = "elevado2";
        $("#op").text($(this).val());
     
     

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }
})

//ELEVADO A ² POTÊNCIA
$("input[name=igual]").click(function(){
    if($("#result").val() != ""){
        valor2 = parseFloat($("#result").val());

        if(op == "elevado2"){
        $("#op").text("=");    
        $("#result").val(Math.pow(valor1,2));    
        }
        
             

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }


})






//ELEVADO A ³ POTÊNCIA
$("input[name=elevado3]").click(function(){
    if($("#result").val() != ""){
        valor1 = parseFloat($("#result").val());
        $("#result").val(" ");
      
        op = "elevado3";
        $("#op").text($(this).val());
     
     

    } else {
        // alert("Insira um valor");
        $("#result").val("NaN")
    }
})

//ELEVADO A ³ POTÊNCIA
$("input[name=igual]").click(function(){
    if($("#result").val() != ""){
        valor2 = parseFloat($("#result").val());

        if(op == "elevado3"){
        $("#op").text("=");    
        $("#result").val(Math.pow(valor1,3));    
        }
        
             

    } else {
        $("#result").val("NaN")
        // alert("Insira um valor");
    }


})

});



 //AO CLICAR PARA ADICIONAR PRODUTO CHAMA A CALCULADORA JÁ COM O VALOR DO PRODUTO
 $("input[name=adicionar]").click( function(){
    $(".container").show(500);
    $("#normal").show(500);
    $("#cientifica").show(500);
    $("#result").val($("#result").val() + $(this).val());
    $("#mostrar").val("Fechar");
 })

//  AO CLICAR NO BOTÃO MENOS IRA REMOVER O VALOR DO PRODUTO
 $("input[name=remover]").click(function(){
    $("#result").val("");
    $("#result").text("");
    
 })