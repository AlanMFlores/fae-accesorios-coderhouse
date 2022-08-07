// Featured Products Container 

let featuredProducts = document.querySelector('.featured-products-grid');

// Render de Productos en Home

const getProducts = async () => {
    try {
        const products = await fetch('./data/products.json');
        const parsedProducts = await products.json();

        parsedProducts.forEach(product => {
            let card = document.createElement('div');
            card.classList.add('product-card', product.category);
            card.innerHTML = ` <div class="product-card-image">
                                    <a href='${product.link}'>
                                        <img src=./${product.image} alt="product card image">
                                    </a>
                                </div>
                                <div class="product-card-description">
                                    <div class="product-card-info">
                                        <p class="product-card-name">${product.name}</p>
                                        <p class="product-card-price">$${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                `
            featuredProducts.append(card);
        })
        
    } catch(error) {
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = `No se han podido obtener los productos. Intenta nuevamente en unos minutos.`
        featuredProducts.append(errorMessage);
        featuredProducts.classList.add('error-render');
    }
}

getProducts();
