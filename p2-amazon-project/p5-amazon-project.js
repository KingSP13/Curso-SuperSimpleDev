let calculateButton = document.querySelector('.calculate');
calculateButton.addEventListener("click", calculateShip);

let jsInput = document.querySelector('.js-cost-input');
jsInput.addEventListener("keydown", handleCostKeydown)


let jsInfoParagraph = document.querySelector('.js-info-paragraph');

function handleCostKeydown(event) {
    if (event.key === 'Enter') {
        calculateShip();
    }
}

function calculateShip() {
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);
    if (cost < 40) {
        cost += 10;
        cost = cost.toFixed(2);
        jsInfoParagraph.innerHTML = `Your order is a total of $${cost}`;
    } else {
        jsInfoParagraph.innerHTML = `Your order is a total of $${cost}, with FREE shipping!`;
    }
}
