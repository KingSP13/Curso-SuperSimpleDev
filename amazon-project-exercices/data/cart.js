const cart = [];

document.querySelectorAll('.add-to-cart-button')
.forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId
        let matchingItem;
        let quantitySelector = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

        cart.forEach((item) => {
            if(productId === item.productId) {
                matchingItem = item
            }
        })

        if(matchingItem) {
           matchingItem.quantity += quantitySelector
        } else {
            cart.push({
                productId: productId,
                quantity: quantitySelector
            });
        }
        let cartQuantity = 0

        cart.forEach((item) => {
            cartQuantity += item.quantity
        });
        document.querySelector('.cart-quantity').innerHTML = cartQuantity
    });
});