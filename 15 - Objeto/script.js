
/**Criando objetos */
var cadeira = {
    cor: "preta",
    altura: 118,
    largura: 74,
    profundidade: 64
}
/**Imprimindo objetos */
document.write("Cor da cadeira " + cadeira.cor + "<br>");
document.write("Altura da cadeira " + cadeira.altura + "<br><hr>");

/**Alterando caracteristicas  */
cadeira.cor = "Branca";
document.write("Cor da cadeira " + cadeira.cor + "<br><hr>");

/**Inserindo caracteristicas */
cadeira.peso = 17,
document.write("Peso da cadeira " + cadeira.peso + "<br><hr>");

/** Imprime // Apaga // Imprime sem as informações  */
document.write("Profundidade da cadeira " + cadeira.profundidade + "<br>");
delete cadeira.profundidade;
Profundidade

var mesa = new Object();
mesa.altura = 55;
mesa.cor = "Azul";
document.write("altura da mensa " + mesa.altura);
