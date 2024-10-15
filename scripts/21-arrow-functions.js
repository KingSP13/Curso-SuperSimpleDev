/*

//Introducing, arrow functions
//Funcionam do mesmo jeito que as funções comuns em sua essência. Citaremos as diferenças ao final da apresnetação inicial.

const regularFunction = function(param1, param2) {
    console.log('hello');
    return 5;
}
regularFunction()

const arrowFunction = () => {
    console.log('hello');
    return 5;
}
arrowFunction()

const oneParam = param => {
    console.log(param+1)
};
oneParam(2)
//Quando a arrow function tem apenas um parametro, os parentesis são opcionais.

const oneLine = () => 2 + 3;

console.log(oneLine())
//Oneliner, função oneliner é quando tem apenas uma linha, fazendo assim o uso dos colchetes, opcional.



[
    'wash dishes',
    'watch youtube',
    'cook dinner'
].forEach((value, index) => {
    if (value === 'wash dishes') {
        return;
}
console.log(index)
console.log(value)
})


// Passando funções para dentro de objetos.
// Temos estas tres formas de passar funções para dentro de objetos, sendo a última, a recomendada pois se trata da forma padrão que objetos tem de receber arrow functions:

const object1 = {
    fun: function() {
        console.log('hello 1')
    },
    function1: () =>
        {
       console.log('hello 2')
    },
    function2() {
        console.log('hello 3')
    },

}

//podemos chamar as funções armazenadas nos objetos da seguinte maneira:
 
object1["fun"]()
object1.function1()
object1.function2()

*/

//Shortcuts para arrow functions:
//Como dado o código abaixo, estudado na seção de funções avancadas:

console.log([1, 1, 3].map((value, index) => {
    return value * 2
}));

//Podemos simplificar o código acima o escrevendo da seguinte forma:

console.log([1, 1, 3].map(value => value * 2));

//Assim o deixando muito mais compacto e limpo, como não utilizamos o eleento 'index', pudemos remove-lo, então apenas usando um parâmetro os parentesis se tornam opcionais, o valor return não precisa ser escrito já que temos um único valor ao fim da função, então podemos remover os colchetes também e mante-lo numa linha só

