$("#modal").ready(function(){
    $("#abrirModal").click(function(){
        $("#modal").animate({top: "0"});
    });  

    $("#fecharModal").click(function(){
        $("#modal").animate({top: "-200%"});

    });
});



$("#btnSub").click(function(i){

    // RECUSA O SUBMIT DO BOTÃO 
    i.preventDefault()
    const btnSub = $("#fundoPopUp").animate({top: "150%"});
    const nome = $("#nome").val();
    const email = $("#email").val();
    const cpf = $("#cpf").val();
      
    $("#div").append("<p> Olá " + nome + "<br />" + " Seu login é: " + email + "<br />" + " Sua senha é: " + cpf + "</p>");
       
   });

   
   $("#ok").click(function(){
       const ok = $("#fundoPopUp").animate({top: "-100%"});
   })

 

  //INÍCIO DAS VALIDAÇÕES DO FORMULÁRIO DE INSCRIÇÃO ALANA E BERNARDO
  
  /*VALIDAÇÃO NOME, MENSAGEM, EMAIL - OS CAMPOS REQUERIDOS*/
  function enviarFormulario() {
    // If para verificar se o campo nome do formulário fale está vazio ou com menos de dois caracteres.
    
    if (document.insira.nome.value.length < 3) {
        //Caixa trazendo a informação de que o campo não foi preenchido corretamente
        alert("Preencha o nome corretamente!");
        //Focus para setar para a caica de texto que não foi preenchida corretamente
        document.insira.nome.focus();
        //Sem o return false, entra numa repetição de caixa de alert e perde a função do focus.
        return false;
    }
  
    if (document.insira.email.value == "" || document.insira.email.value.length < 3) {
        alert("Preencha o e-mail corretamente!");
        document.insira.email.focus();
        return false;
    }
  
    if (document.insira.mensagem.value =="" || document.insira.mensagem.value.length < 10){
        alert("Prencha o campo menssagem. Mínimo de Caracters = 10.");
        document.insira.mensagem.focus();
        return false;
    }
  
  }
  
  /*CONSULTA CEP*/
  
  const apresentaDados = (resultado) =>{
    for(let campo in resultado){
        if(document.querySelector("#"+campo)){
            // console.log(campo);
            document.querySelector("#"+campo).value = resultado[campo];
        }
    }
  }
  function consultaCep(){
    let cepDigitado = document.getElementById("cep");
    
    if(cepDigitado.value == "") {
        cepDigitado.style.border = "1px solid red";
    }else{
        let cepProcurado = cepDigitado.value.replace("-","");
      
        fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
        .then(response => {response.json()
        .then(data => console.log(apresentaDados(data)))
        })
        .catch(x => alert("CEP não encontrado!"))
    }
    }
    
  /*VALIDAÇÃO DE IDADE - MAIOR DE 18, MENOR DE 131*/
  function verificaIdade(data) {
    
        let dataAtual = new Date();
        let anoAtual = dataAtual.getUTCFullYear(); //getUTCFullYear - ANO INTEIRO ATUAL
  
        data = new Date(data);
        let anoEscolhido = data.getUTCFullYear();
  
        let idade = anoAtual - anoEscolhido;
  
        if (idade < 0 || idade <=18) {
            alert("Idade inferior ao permitido, 18 anos.");
            return false;
        }if(idade > 130){
            alert("Idade superior ao permitido, 130 anos.");
            return false;
        }else {
            return false;
        }
    }
  
  /*VERIFICAÇÃO DE CPF*/
  function verificaCPF() {
    if (vercpf(document.insira.cpf.value)) {
         document.insira.submit(); 
    } else {
        errors = "1"; 
    if (errors) alert('CPF INVÁLIDO!');
        document.retorno = (errors == '');
    }
  
  }
  function vercpf(cpf) {
    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
         return true;
  }
  
  
  //FINAL DAS VALIDAÇÕES DO FORMULÁRIO DE INSCRIÇÃO ALANA E BERNARDO
  
  
  