const cart = [];

document.querySelectorAll('.add-to-cart-button')
.forEach((button) => {
    button.addEventListener('click', () => {
        const { productId } = button.dataset;
        let matchingItem;
        let quantitySelector = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
        const elementClicked = document.querySelector(`.new-added-to-cart-${productId}`);
        cart.forEach((item) => {
            if(productId === item.productId) {
                matchingItem = item
            }
        })

        if(matchingItem) {
           matchingItem.quantity += quantitySelector
        } else {
            cart.push({
                productId,
                quantity: quantitySelector
            });
            
        }
        let cartQuantity = 0

        cart.forEach((item) => {
            cartQuantity += item.quantity
        });
        document.querySelector('.cart-quantity').innerHTML = cartQuantity

        let timeoutId;
        elementClicked.classList.add(`showAdded`);

        startTimeout = () => {

            if(timeoutId) {
                clearTimeout(timeoutId);
            }
            timeOutId = setTimeout(() => {
                elementClicked.classList.remove('showAdded')
            }, 2000);
        };
        startTimeout()
        
    });
});