var nota = 8;
var falta = 27;

/*Retorna TRUE se um ou outro forem verdadeiros*/
if((nota < 4) || (falta > 25)){
    document.write("Reprovado: " + nota + ". Falta: " + falta + "<br>");
}

nota = 2;
falta = 27;
/*Retorna TRUE se os dois forem verdadeiros*/
if((nota < 4) && (falta > 25)){
    document.write("Reprovado: " + nota + ". Falta: " + falta + "<br>");
}

var situacao = !true;
document.write("Situação: " + situacao + "<br>");