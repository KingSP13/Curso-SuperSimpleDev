/*
//funções também são valores, sendo assim podemos armazena-las em variáveis. HOISTING !!!
//Pelo que entendi, podemos chamar uma função antes mesmo de cria-la

function greeting () {
    console.log('Hello')
}

greeting()


//FUNÇÃO ANÔNIMA
const num = 2;
const function1 = function () {
    console.log('Hello 2')
};
console.log(typeof function1)

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

//Basicamente voce pode criar uma função para executar uma tarefa ou processar algum dado de determinada forma, quando voce cria ela já com PARÂMETROS FORMAIS, que é o que fica entre os parêntesis, voce pode só jogar o valor dentro da função quando vai chama-la, como fizemos no doc18 de exercicios ou nesse priemiro exemplo também.

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

//setTimeOut recebe dois parametros, onde o primeiro é uma função que iremos usar no futuro. Já o segundo é o tempo que deve esperar antes do disparo, dado em milissegundos, 'ms, neste exemplo '3000' é 3s. Aqui começa o aprendizado de Asynchronous Code

// O código assíncrono é disparado depois do tempo estabelecido, porém não ficamos presos aguardando que o comando seja completo, a função setTimeOut() prepara um cronômetro, e ao fim do tempo o código estabelecido é executado, enquanto isso o resto do código que está fora da função é executado normalmente na ordem declarada.

setTimeout( function() {
    alert('timeout');
}, 3000);

console.log('next line');

//A built in funtion setInterval tem um comportamento semelhante a setTimeOut(), porém repete a função dada no intervalo de tempo especificado,, a função setInterval() abaixo vai repetir o console.log() a cada 3 segundos, ou 3 mil ms.

setInterval(function() {
    console.log('Interval'); 
} , 3000)

console.log('next line 2')


// Agora usando o método forEach(), temos outra forma de percorrer um array, como podemos ver no código abaixo, dado um objeto de um conjunto de strings, o método forEach() recebe uma função, que vai se repetir por todo o array que ela for empregada, no caso usamos o placeholder 'value' para simbolizar o elemento do array, o método forEach() inicia o array, pega o primeiro elemento e insere na dda função, executa o código, e retorna para o segundo elemento, repetindo o processo até ter passado por todos os elementos do array especificado. Também é o método preferido para percorrer um array já que é muito mais facil de ler do que o método utilizado previamente com for loop.
[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach(function(value, index) {
    if(value === 'wash dishes') {
        return;
    }
    console.log(index)
    console.log(value)
})

//No caso do uso do for loop temos uma ferramenta que o método forEach não possui, o return, que nos permite pular uma iteração, no forEach ela não existe então é utilizado o 'return' como demonstrado acima, a iteração 'wash dishes' foi pulada e não exibida no console.

//Exemplo prático para o código acima, em todo list project

*/