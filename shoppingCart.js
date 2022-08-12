const shoppingCartBtn = document.querySelectorAll('.cart-btn');

let shoppingCartList = [];

const addProductLocalStorage = () => {
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCartList))
}

// Funcion para añadir producto al carrito
const addProductShoppingCart = (product) => {
    shoppingCartList.push(product);
    addProductLocalStorage();
}

// Obtener carrito de compras del LocalStorage
const getShoppingCartStorage = () => {
    return JSON.parse(localStorage.getItem('shopping-cart'));
}


shoppingCartBtn.forEach(item => {
    item.addEventListener('click', (event) => {
        let matchProduct = catalogueProducts.find(product => product.id == event.target.id);
        addProductShoppingCart(matchProduct);
    })
})
