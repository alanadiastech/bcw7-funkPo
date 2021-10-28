//BOTÃO DE LOGIN

//Trocando value do input login
$("#login").on("click",function(){
    $(this).val($(this).val() == "Login" ? "Sair" : "Login")
    });

//MODAL
$(document).ready(function() {

    //seleciona os elementos a com atributo name="modal"
    $('a[name=modal]').click(function(e) {
    //cancela o comportamento padrão do link
    e.preventDefault();
    
    //armazena o atributo href do link
    var id = $(this).attr('href');
    
    //armazena a largura e a altura da tela
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    
    //Define largura e altura do div#mask iguais ás dimensões da tela
    $('#mask').css({'width':maskWidth,'height':maskHeight});
    
    //efeito de transição
    $('#mask').fadeIn(1000);
    $('#mask').fadeTo("slow",0.8);
    
    //armazena a largura e a altura da janela
    var winH = $(window).height();
    var winW = $(window).width();
    //centraliza na tela a janela popup
    $(id).css('top',  winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
    //efeito de transição
    $(id).fadeIn(2000);
    });
    
    //se o botãoo fechar for clicado
    $('.window .close').click(function (e) {
    //cancela o comportamento padrão do link
    e.preventDefault();
    $('#mask, .window').hide();
    });
    
    //se div#mask for clicado
    $('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
    });
    });

// ACESSIBILIDADE/ZOOM

//Ao clikar no elemento a, aumente as fontes dos elementos identificados com a classe .acessiilidade
//Ao clikar no elemento d, diminua as fontes dos elementos identificados com a classe .acessiilidade
function fonte(e){
	var elemento = $(".acessibilidade");
	var fonte = elemento.css('font-size');
	if (e == 'a') {
		elemento.css("fontSize", parseInt(fonte) + 1);
	} else if('d'){
		elemento.css("fontSize", parseInt(fonte) - 1);
	}
}

// CADASTRO DE PRODUTOS
//Declaração de uma classe com o nome produtos
class produtos{
    //Definição dos atributos da classe
    constructor(){          //Atributos
        this.id = 1;
        this.arrayProdutos = [];
        //Testa qual método vai ser executado pelo btn1
        this.testeBtn = 0;

        //Tratar imagem recebida pelo input file
        let foto = document.getElementById("imgFoto");
        let file= document.getElementById("flImage");

        file.addEventListener("change", (e)=>{
            let leitor = new FileReader();

            leitor.onload = () =>{
                foto.src = leitor.result;
            }

            leitor.readAsDataURL(file.files[0]);
        });       
    }

    //Salvar o produto digitado pelo usuário no objeto produto
        salvar(){  //Métodos
        
        let produto = this.lerDados();
        
        //Chamamos o método para validar o conteúdo dos inputs (somente verifica inputs vazios)
        if(this.validarCampos(produto)){
            if(this.testeBtn == 0){
                this.adicionar(produto);
            }else{
                this.atualizar(this.testeBtn);
            }
            this.listaDados();
            this.cancelar();
        }
    }

    //Método para alimentar a tabela com os produtos
    listaDados(){
        //Declaração de uma variável para referenciar o tbody da tabela
        let tbody = document.getElementById("tbody");
         //Limpar a tabela antes de ser mostrada
         tbody.innerText = "";
        //Loop para pecorrer o array de produtos
        for(let i = 0; i < this.arrayProdutos.length; i++){
            //Insere uma nova linha no tbody
            let novaLinha = tbody.insertRow();
            //Criar cada coluna(célula) de cada linha
            let td_id = novaLinha.insertCell();
            let td_nomeProduto = novaLinha.insertCell();
            let td_lote = novaLinha.insertCell();
            let td_quantidadeProduto = novaLinha.insertCell();
            let td_valor = novaLinha.insertCell();
            let td_acoes = novaLinha.insertCell();

            //Alimentar as células
            td_id.innerText = this.arrayProdutos[i].id;
            td_nomeProduto.innerText = this.arrayProdutos[i].nomeProduto;
            td_lote.innerText = this.arrayProdutos[i].lote;
            td_quantidadeProduto.innerText = this.arrayProdutos[i].quantidadeProduto;
            td_valor.innerText = this.arrayProdutos[i].valor;

            //Adicionou a classe center as colunas
            td_id.classList.add("center");
            td_nomeProduto.classList.add("center");
            td_lote.classList.add("center");
            td_quantidadeProduto.classList.add("center");
            td_valor.classList.add("center");
            td_acoes.classList.add("center");

            //Criando um elemento de imagem para ser colocado na quarta coluna da linha
            let imgEdit = document.createElement("img");
            //Atribuindo o caminho a esse elemento
            imgEdit.src = "/img/edit.png";
            //Adicionando um filho para a quarta coluna
            td_acoes.appendChild(imgEdit);

            //Criando um elemento de imagem para ser colocado na quarta coluna da linha
            let imgDelete= document.createElement("img");
            //Atribuindo o caminho a esse elemento
            imgDelete.src = "/img/delete.png";
            //Adicionando um filho para a quarta coluna
            td_acoes.appendChild(imgDelete);

            //Atribuir um método para imgDelete através do setAttribute como os parâmetros: ("evento", método)
            imgDelete.setAttribute("onclick", "produto.deletar("+this.arrayProdutos[i].id+")");

            //Atribuir um método para imgEdit através do setAttribute como os parâmetros: ("evento", método)
            imgEdit.setAttribute("onclick", "produto.editar("+this.arrayProdutos[i].id+")");

            //Atribuir um método para mostrar os dados do produto selecionado para posterior edição (evento, método)
            imgEdit.setAttribute("onclick", "produto.mostrarDados(" + JSON.stringify(this.arrayProdutos[i]) + ")");          
        }
    }

    adicionar(produto){
        //Adiciona o novo produto no arrayProdutos
        this.arrayProdutos.push(produto);
        this.limpar();
        this.id++;
       
    }

    limpar(){
        //Limpar o value do input file
        $("#flImage").val("");
        //Substituir a última imagem carregada pela imagem inicial que representa as fotos
        let imagem = document.getElementById("imgFoto");
        imagem.src = "img/camera.png";
    }

    //Método para limpar os inputs
    cancelar(){
        document.getElementById("nomeProduto").value = "";
        document.getElementById("loteProduto").value = "";
        document.getElementById("quantidadeProduto").value = "";
        document.getElementById("valorProduto").value = "";
        this.limpar();
    }

    //Captura o que foi digitado pelo usuário nos inputs
    lerDados(){
        let produto = {}; //Variável temporária para armazenar os dados dos inputs
        produto.nomeProduto = document.getElementById("nomeProduto").value;
        produto.lote = document.getElementById("loteProduto").value;
        produto.quantidadeProduto = document.getElementById("quantidadeProduto").value;
        produto.valor = document.getElementById("valorProduto").value;
        produto.id = this.id;


        //Verificar se foi escolhido uma foto para o produto
        if($("#flImage").val() != ""){
            let nomeProduto = $("#flImage")[0].files[0].name;
            produto.foto = "img/" + nomeProduto;
        }
        
       

        return produto;
    }

    //Validação dos conteúdos dos inputs (impedindo input vazio)
    validarCampos(produto){
        let msg = "";
        if(produto.nomeProduto == ""){
            msg += "- informe o nome do produto" + "\n";
        }
        if(produto.lote == ""){
            msg += "- informe o lote do produto" + "\n";
        }
        if(produto.valor == ""){
            msg += "- informe o valor do produto" + "\n";
        }  
        if(produto.quantidadeProduto == ""){
            msg += "- informe a quantidade produto";
        }  
        if(msg != ""){
            alert(msg);
            return false
        }
        return true
    }

    //Método deletar que recebeu o parâmetro idProcurado
    deletar(idProcurado){
        if(confirm("Deseja realmente excluir o produto" + idProcurado + " ?")){
            for(let i = 0; i < this.arrayProdutos.length; i++){
                if(this.arrayProdutos[i].id == idProcurado){
                    this.arrayProdutos.splice(i,1);
                    tbody.deleteRow(i);
                }
            }
        }
    }

    //Método para editar
    mostrarDados(dados){ 
        //Mostrar as propriedades dos inputs
        document.getElementById("nomeProduto").value = dados.nomeProduto;
        document.getElementById("loteProduto").value = dados.lote;
        document.getElementById("quantidadeProduto").value = dados.quantidadeProduto;
        document.getElementById("valorProduto").value = dados.valor;

        let imagem = document.getElementById("imgFoto");
        imagem.src = dados.foto;
        
        //Modificar texto do botão salvar
        document.getElementById("btn1").innerText = "Atualizar";

        this.testeBtn = dados.id;

    }    
    
     //Método para atualizar
    atualizar(id){
        for(let i=0; i < this.arrayProdutos.length; i++){
            if(id == this.arrayProdutos[i].id){
                this.arrayProdutos[i].nomeProduto = document.getElementById("nomeProduto").value;
                this.arrayProdutos[i].lote = document.getElementById("loteProduto").value;
                this.arrayProdutos[i].quantidadeProduto = document.getElementById("quantidadeProduto").value;
                this.arrayProdutos[i].valor = document.getElementById("valorProduto").value;
            
            //Verificar se foi escolhido uma foto para o produto
            if ($("#flImage").val() != "") {
                let nomeProduto = $("#flImage")[0].files[0].name;
                produto.foto = "img/" + nomeProduto;
            }
     
            
            
            
            }


             




        }
        document.getElementById("btn1").innerText = "Salvar";
        this.testeBtn =0;
    }
}
var produto = new produtos();  //Instanciando


// CALCULADORA

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
        $(".container").toggle(2000);
        $("#normal").toggle(2000);
        $("#cientifica").toggle(2000);
        $("input[name=raiz]").hide();
        $("input[name=elevado2]").hide();
        $("input[name=elevado3]").hide();
        $(this).text($(this).text() == "FECHAR" ? "ABRIR" : "FECHAR");      
    })

//CALCULADORA NORMAL
    $("#normal").click(function(){
        $(".container").show(2000);
        $("input[name=raiz]").hide(2000);
        $("input[name=elevado2]").hide(2000);
        $("input[name=elevado3]").hide(2000);
    })

    //CALCULADORA CIENTÍFICA
    $("#cientifica").click(function(){
        $(".container").show(2000);
        $("input[name=raiz]").show(1000);
        $("input[name=elevado2]").show(1000);
        $("input[name=elevado3]").show(1000);
        
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
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
        alert("Insira um valor");
    }
})

});

//Alternando as cores dos botões da calculadora - CIENTÍFICA E NORMAL

$("#normal").click(function(){
    $("#normal").css({
    'backgroundColor': '#5C7AEA'
    })
    $("#cientifica").css({
    'backgroundColor': '#14279B'
    });
});

$("#cientifica").click(function(){
    $("#cientifica").css({
        'backgroundColor': '#5C7AEA'
    })
    $("#normal").css({
        'backgroundColor': '#14279B'
    });
});

$("#mostrar").click(function(){
    $("#cientifica").css({
        'backgroundColor': '#14279B'
    })
    $("#normal").css({
        'backgroundColor': '#3D56B2'
    });
});

$("input[name=remover]").click(function(){
    $("#result").val("");
    $("#result").text("");
    
 })