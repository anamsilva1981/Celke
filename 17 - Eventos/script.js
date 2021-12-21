//Criando evento botão de carregar conteúdo
function carConteudo(){
    document.getElementById("conteudo").innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime architecto, error, illum neque, facere esse odio nihil sequi alias tempore quis. Assumenda aspernatur quasi vel libero minus dicta eveniet at?";
}

// Criando função Retire o mouse
function mouseOver(){
    document.getElementById("mouseAlt").innerHTML = "Retire o mouse";
}

// Criando função passe o mouse
function mouseOut(){
    document.getElementById("mouseAlt").innerHTML = "Passe o mouse";
}

function converTexto(){
    var nome = document.getElementById("nome");
    nome.value = nome.value.toUpperCase();
}

function validarSenha(){
    var senha = document.getElementById("senha").value;

    if(senha == "" || senha.length <= 5){
        document.getElementById("erroSenha").innerHTML = "Preencha com 6 caracteres";
    }
}