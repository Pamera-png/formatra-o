function carregar() {
    alert("Página carregada. Seja muito bem vindo");
  }
  
function numeroCpf(campoCpf){
    var cpf = campoCpf.value;
    if(cpf.length == 3){
        cpf = cpf + '.';
document.forms[0].cpf.value = cpf;
return true;
}
if(cpf.length == 7 ){
    cpf =cpf  + '.';
document.forms[0].cpf.value = cpf;
return true; 
}
if(cpf.length == 11){
    cpf = cpf + '-';
    document.forms[0].cpf.value = cpf;
    return true; 
}
}

function numeroRg(campoRg){
    var rg = campoRg.value;
    if(rg.length == 2){
        rg = rg + '.';
document.forms[0].rg.value = rg;
return true;
}
if(rg.length == 6 ){
    rg =rg  + '.';
document.forms[0].rg.value = rg;
return true; 
}
if(rg.length == 10){
    rg = rg + '-';
    document.forms[0].rg.value = rg;
    return true; 
}
}

function numeroCep(campoCep){
    var cep = campoCep.value;
    if(cep.length == 5){
        cep = cep + '-';
document.forms[0].cep.value = cep;
return true;
}
}

function numeroTelefone(campoTelefone){
    var telefone = campoTelefone.value;
    if(telefone.length == 0){
        telefone = telefone + '('; 
               document.forms[0].telefone.value = telefone;
        return true;
    }
if(telefone.length == 3){
        telefone = telefone + ') '; 
               document.forms[0].telefone.value = telefone;
        return true;
    }
    if(telefone.length == 9){
        telefone = telefone + '-'; 
               document.forms[0].telefone.value = telefone;
        return true;
    }
}

function numeroCelular(campoCelular){
    var celular = campoCelular.value;
    if(celular.length == 0 ){
        celular = celular + '(';
        document.forms[0].celular.value = celular;
        return true; 
    }
    if(celular.length == 3){
        celular = celular +') ';
    document.forms[0].celular.value = celular;
    return true;
}
if(celular.length == 10){
    celular = celular +'-';
document.forms[0].celular.value = celular;
return true;
}
}

function limpar(){
    if(confirm("apagar formulário? Todos os dados já preenchidos serão perdidos.")){
    document.getElementById ("nome").value = "";
    document.getElementById ("cpf").value = "";
    document.getElementById ("rg").value = "";
    document.getElementById ("formato").value = "";
    document.getElementById ("cep").value = "";
document.getElementById ("rua").value = "";
document.getElementById ("numero").value = "";
document.getElementById ("bairro").value = "";
document.getElementById ("cidade").value = "";
document.getElementById ("estado").value = "";
document.getElementById ("telefone").value = "";
document.getElementById ("celular").value = "";
document.getElementById ("e-mail").value = "";
}
}

function preencher(){
let nome = document.getElementById("nome").value;
let cpf = document.getElementById("cpf").value;
let rg = document.getElementById("rg").value;
let cep = document.getElementById("cep").value;
let rua = document.getElementById("rua").value;
let numero = document.getElementById("numero").value;
let bairro = document.getElementById("bairro").value;
let cidade = document.getElementById("cidade").value;
let estado = document.getElementById("estado").value;
let telefone = document.getElementById("telefone").value;
let celular = document.getElementById("celular").value;
let email = document.getElementById("email").value;

if(nome == ""){
alert ("preencha o campo nome");
}
else if (cpf == ""){
alert ("preencha o campo CPF");
}
else if (rg == ""){
    alert ("preencha o campo RG");
    }
    else if (cep == ""){
        alert ("preencha o campo CEP");
        }
       else if (rua == ""){
alert ("preencha o campo rua");
}
else if (numero == ""){
alert ("preencha o campo número da residência");
}
else if (bairro == ""){
alert ("preencha o campo bairro");
}
else if (cidade == ""){
alert ("preencha o campo cidade");
}
else if (estado == ""){
    alert ("preencha o campo estado");
    }
    else if (telefone == ""){
    alert ("preencha o campo telefone");
}
else if (celular == ""){
alert ("preencha o campo celular");
}
else if (email == ""){
    alert ("preencha o campo e-mail");
    }
    
    else{
    alert("Formulário enviado com sucesso. Em breve entraremos em contato.");
}
}