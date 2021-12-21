/**Criando listas */
var frutas = ["Abacate", " Limão", " Laranja", " Maçã", " Abacaxi", " Laranja", ]

/**.lenght determina a quantidade de que existe dentro do array */
console.log("Quantidade de tipos de frutas: " + frutas.length);

//Primeiro item do array
console.log("Primeiro item do array " + frutas[0]);

//Acessar ultimo item do array
console.log("Ultimo item do array " + frutas[frutas.length-1]);

// Adicionando um item ao final do array
frutas.push("Maçã");

// Adicionando um item ao inicio do array
frutas.unshift("Amora");

//Remover um item ao final do Array
frutas.pop();

// Remover o primeiro item do Array
frutas.shift();

// Remover um item pela posição do item "frutas.splice(pos, n);"
// A partir da posição (pos) em direção ao fim da Array (n) define o numero de itens a se remover
frutas.splice(2, 3);

//Ler um Array
frutas.forEach(function(item, indice, array){
    console.log(item, indice);
})