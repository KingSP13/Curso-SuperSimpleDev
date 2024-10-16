const cart = [];

document.querySelectorAll('.add-to-cart-button')
.forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId
        let matchingItem;
        cart.forEach((item) => {
            if(productId === item.productId) {
                matchingItem = item
            }
        })

        if(matchingItem) {
           matchingItem.quantity++ 
        } else {
            cart.push({
                productId: productId,
                quantity: 1
            });
        }
        let cartQuantity = 0

        cart.forEach((item) => {
            cartQuantity += item.quantity
        });
        document.querySelector('.cart-quantity').innerHTML = cartQuantity
    });
});