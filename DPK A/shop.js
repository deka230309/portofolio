function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    cartItemsList.innerHTML = ''; 

    let total = 0;
    let index = 0;

   
    while (index < cart.length) {
        const item = cart[index];
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - IDR ${item.price}`;
        cartItemsList.appendChild(listItem);
        total += item.price;
        index++;
    }

    totalElement.textContent = `Total: IDR ${total}`;

    let isCartEmpty = true;
    let checkIndex = 0;
    while (checkIndex < cart.length) { //untuk mengakses setiap item dalam array cart
        if (cart[checkIndex]) {
            isCartEmpty = false;
            break;
        }
        checkIndex++;
    }

    if (isCartEmpty) {
        totalElement.textContent = `Total: IDR 0`;
        cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
    }
}