/* 
==================== Local Storage ====================
*/

// Guardar productos en LocalStorage
const saveProductsStorage = (products) => {
    localStorage.setItem('products', JSON.stringify(products));
}

// Obtener productos del LocalStorage
const getProductsStorage = () => {
    return JSON.parse(localStorage.getItem('products') || []);
}


/* 
==================== Products List ====================
*/

// Función para obtener los productos del JSON
const getProductsList = async () => {
    const products = await fetch('../data/products.json');
    const parsedProducts = await products.json();
    saveProductsStorage(parsedProducts);
}

getProductsList();

// Array de Productos
const products = getProductsStorage();


/* 
==================== Render Products Home ====================
*/

// Featured Products Container 
let featuredProducts = document.querySelector('.featured-products-grid');

// Shuffle Array
const shuffleArray = (arr) => {
    let newArr = arr.sort(() => Math.random() - 0.5);
    return newArr;
}

// Slice Array
const sliceArr = (arr) => {
    let newArr = arr.slice(0, 12);
    return newArr;
}

// Funcion para renderizar productos en el home
const renderProductsHome = (arr) => {
    let shuffledArr = shuffleArray(arr);
    let slicedArr = sliceArr(shuffledArr);
    
    slicedArr.forEach(product => {
        let card = document.createElement('div');
        card.classList.add('product-card', product.category);
        card.innerHTML = ` <div class="product-card-image">
                                    <img src=../${product.image} alt="product card image">
                                </a>
                                <div class="product-card-favorite">
                                    <button class="fav-check" id="false">
                                        <i class="fa-solid fa-heart" id=${product.id}></i>
                                    </button>
                                </div>
                            </div>
                            <div class="product-card-description">
                                <div class="product-card-info">
                                    <p class="product-card-name">${product.name}</p>
                                    <p class="product-card-price">$${product.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div class="product-card-purchase">
                                <button class="cart-btn">Agregar al Carrito</buton>
                                <button class="purchase-btn">Comprar</buton>
                            </div>
        `
        featuredProducts.append(card);
    })
}

renderProductsHome(products);