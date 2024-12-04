import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
import {loadProducts} from '../data/products.js'
// import '../data/cart-class.js'; utilizado para teste
// import '../data/backend-practice.js';

//Meu primeiro pensamento aqui era de passar ambas as funções como parâmetro, mais simples que a função anônima, porém nos parentesis vai o parâmetro formal, e como na declaração da função definimos 'fun', só pode receber um parâmetro e não faria muito sentido, a solução de função anônima foi perfeita por que uma função é um código reutilizável, aqui ela está sendo aplicada para executar o render da order page e da product page quando os produtos forem carregados da API.
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
})