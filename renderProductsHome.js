/* 
==================== Render Products Home ====================
*/

// Featured Products Container 
let featuredProducts = document.querySelector('.featured-products-grid');

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