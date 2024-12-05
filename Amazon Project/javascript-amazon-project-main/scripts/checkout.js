import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProductsFetch, loadProducts} from '../data/products.js'
import {loadCart} from '../data/cart.js';

//Introdução a 'async await', async faz a função retornar uma promise, é um shortcut para este código:
/*
function loadPage() {
    return new Promise ((resolve) => {
        console.log('load page');
        resolve();
    });
};
*/

//Basicamente envolve o código da função e o retorna numa Promise
async function loadPage() {

//O await aguarda a função ser finalizada, para seguir para o próximo passo, e só pode ser usado dentro de uma função async
    await loadProductsFetch();

    await new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

    renderOrderSummary();
    renderPaymentSummary();
};

//Como é uma Promise, podemos adicionar um próximo passo com o '.then', o mesmo sobre o parâmetro do 'resolve' se aplica aqui, se retornarmos algo, ele é como se estivesse dentro do resolve, e vai ser passado pra dentro do '.then' como parâmetro também no próximo passo

loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/