function getMinusculo(){

    return String.fromCharCode(Math.floor(Math.random()*26) + 97);

}

function getMaiusculo(){

    return String.fromCharCode(Math.floor(Math.random()*26) + 65);

}

function getNumero(){

    return String.fromCharCode(Math.floor(Math.random()*10) + 48);

}

function getSimbolo(){

    return String.fromCharCode(Math.floor(Math.random()*14) + 33);

}

function addSelecionados(arraySelecionados, selec1, selec2, selec3, selec4){

    if(selec1){

        arraySelecionados.push(1);

    }

    if(selec2){

        arraySelecionados.push(2);
    
    }

    if(selec3){

        arraySelecionados.push(3);

    }

    if(selec4){

        arraySelecionados.push(4);

    }
    
    if(!selec1 && !selec2 && !selec3 && !selec4){
        
        return alert("Nenhum campo foi selecionado!");

    }

    return arraySelecionados;

}

function copiarSenha(){

    const pCopiar = document.querySelector('#p-senha').textContent;

    return navigator.clipboard.writeText(pCopiar);

}

function gerarSenha(){
    
    const tamSenha = parseInt(document.querySelector('#input-tamanho-senha').value);

    const checkLetrasMa = document.querySelector('#checkLetrasMa').checked;
    const checkLetrasMi = document.querySelector('#checkLetrasMi').checked;
    const checkIncluirNum = document.querySelector('#checkIncluirNum').checked;
    const checkIncluirSim = document.querySelector('#checkIncluirSim').checked;

    const pSenha = document.querySelector('#p-senha');

    var senha = '';

    var selecionados = [];
    var ordemAleatoria = [];

    addSelecionados(selecionados, checkLetrasMa, checkLetrasMi, checkIncluirNum, checkIncluirSim);

    if(selecionados.length == 0){

        return pSenha.innerHTML = 'Preencha os campos abaixo!';

    }

    while(ordemAleatoria.length < tamSenha){

        let numAleatorio = (Math.floor(Math.random() * 5) + 1);

        if(selecionados.includes(numAleatorio)){

            ordemAleatoria.push(numAleatorio);

        }

    }
   
   if(tamSenha<=20 && tamSenha>=0){
    for(let i = 0; i < tamSenha; i++){
        
        switch (ordemAleatoria[i]){

            case 1:
                senha += getMaiusculo();
                break;

            case 2:
                senha += getMinusculo();
                break;

            case 3:
                senha += getNumero();
                break;

            case 4:
                senha += getSimbolo();
                break;

    }}

    return pSenha.innerHTML = senha;

    }else{

        alert('Informe um tamanho de senha entre 0 e 20!');

    }

}

