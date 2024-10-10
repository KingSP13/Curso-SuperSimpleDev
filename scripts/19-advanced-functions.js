/*
funções também são valores, sendo assim podemos armazena-las em variáveis. HOISTING !!!
Pelo que entendi, podemos chamar uma função antes mesmo de cria-la

function greeting () {
    console.log('Hello')
}

greeting()


//FUNÇÃO ANÔNIMA
const num = 2;
const function1 = function () {
    console.log('Hello 2')
};

const obj1 = {
    num: 2,
    fun: function() {
        console.log('Hello 3')
    }
};
console.log(function1);
console.log(typeof function1);
//Tipo: Função.

obj1.fun();

function display(param) {
    console.log(param)
}

display(2);

//Basicamente voce pode criar uma função para executar uma tarefa ou processar algum dado de determinada forma, quando voce cria ela já com PARÂMETROS FORMAIS, que é o que fica entre os parentesis, voce pode só jogar o valor dentro da função quando vai chama-la, como fizemos no doc18 de exercicios ou nesse priemiro exemplo também.

function display(param) {
    console.log(param)
}

display(2);

function run(param) {
    param()
}
run(function() {
    console.log('Hello 4')
})

*/
//setTimeOut recebe dois parametros, onde o primeiro é uma função que iremos usar no futuro. Já o segundo é o tempo que deve esperar antes do disparo, dado em milissegundos, 'ms, neste exemplo '3000' é 3s. Aqui começa o aprendizado de Asynchronous Code
setTimeout( function() {
    alert('timeout');
}, 3000);

console.log('next line');
