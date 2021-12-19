
/*Criando função com JavaScript*/
function nome_funcao(){
    alert("Login ou senha incorreta");
}

/* Cria função com parâmetro*/
function somar(a, b){
    var total = a + b;
    alert("Valor da soma " + total);
}

function desconto(a, b){
    var totalDesc = a - b;
    return totalDesc;
    // document.write("O valor final com desconto é " + totalDesc);
}

var resultTotalDesc = desconto(7, 5);
document.write("O valor final com desconto " + resultTotalDesc);