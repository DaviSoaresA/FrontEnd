let display = document.querySelector('.display');

function adicionarAoDisplay(valor){
    display.value += valor;
}

let botoesNum = document.querySelectorAll('.num');
let botoesOp = document.querySelectorAll('.op');


botoesNum.forEach(function(botao){
    botao.addEventListener('click', function() {
        adicionarAoDisplay(botao.value);
    });
});

botoesOp.forEach(function(botao) {
    botao.addEventListener('click', function() {
        adicionarAoDisplay(botao.value);
    });
});



document.getElementById('igual').addEventListener('click', function(){
    try {
        let expressao = display.value;
        if (expressao.includes('%')) {
            let numeros = expressao.split('%');
            let porcentagem = parseFloat(numeros[0]);
            let numeroPrinc = parseFloat(numeros[1]);

            display.value = (numeroPrinc * (porcentagem/100));
        }
        else{
            display.value = eval(display.value.replace('x', '*').replace('÷','/').replace('Mod','%'));
        }
    } catch (e) {
        display.value = 'Erro';
    }
});

document.getElementById('limpar').addEventListener('click', function(){
    display.value = '';
});