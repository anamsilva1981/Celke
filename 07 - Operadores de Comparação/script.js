var valorUm = 9;
var valorDois = 8;

document.write("<h2>Operador de comparação: Igual</h2>");
if(valorUm == valorDois){
    document.write(valorUm + " é igual a " + valorDois);
}else{
    document.write(valorUm + " é diferente de " + valorDois);
}

document.write("<h2>Operador de comparação: Diferente</h2>");
if(valorUm != valorDois){
    document.write(valorUm + " é diferente a " + valorDois);
}else{
    document.write(valorUm + " é igual a " + valorDois);
}

document.write("<h2>Operador de comparação: Menor que</h2>");
if(valorUm < valorDois){
    document.write(valorUm + " é Menor a " + valorDois);
}else{
    document.write(valorUm + " é não é menor a " + valorDois);
}

document.write("<h2>Operador de comparação: Menor que</h2>");
if(valorUm > valorDois){
    document.write(valorUm + " é Maior a " + valorDois);
}else{
    document.write(valorUm + " é não é Maior a " + valorDois);
}

document.write("<h2>Operador de comparação: Menor ou igual</h2>");
if(valorUm <= valorDois){
    document.write(valorUm + " é menor ou igual a " + valorDois);
}else{
    document.write(valorUm + " é não é menor ou igual a " + valorDois);
}

document.write("<h2>Operador de comparação: maior ou igual</h2>");
if(valorUm >= valorDois){
    document.write(valorUm + " é maior ou igual a " + valorDois);
}else{
    document.write(valorUm + " é não é maior ou igual a " + valorDois);
}