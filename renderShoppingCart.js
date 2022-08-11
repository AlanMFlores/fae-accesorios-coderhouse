const shoppingCartBtn = document.querySelectorAll('.cart-btn');

const shoppingCartContainer = document.querySelector('.shopping-cart--products-list');

let shoppingCartList = [];


shoppingCartBtn.forEach(item => {
    item.addEventListener('click', (event) => {
        let matchProduct = catalogueProducts.find(product => product.id == event.target.id);
        shoppingCartList.push(matchProduct)
        localStorage.setItem('shopping-cart-list', JSON.stringify(shoppingCartList));
    })
})

const renderShoppingCart = () => {

    shoppingCartList.forEach( product => {
        let card = document.createElement('li');
        card.classList.add('shopping-cart--products-list-item')
    
        card.innerHTML = `
                       <article class="shopping-card">
                            <div class="shopping-card-description">
                                <figure class="shopping-card--image">
                                    <img src="../${product.image}" alt="aros-arcilla-redondos-negro">
                                </figure>
                                <div class="shopping-card-description--info">
                                    <h3 class="shopping-card--title">${product.name}</h3>
                                    <p class="shopping-card-color">Color: <b>Negro</b></p>
                                    <p class="shopping-card-purchase--amount">Cantidad: <b>1</b></p>
                                </div>
                            </div>
                            <div class="shopping-card-purchase">
                                <h3 class="shopping-card-purchase--price"><b>${product.price}</b></h3>
                            </div>
                            <div class="shopping-card--delete">
                                <button class="shopping-card--delete-btn">Eliminar del Carrito</button>
                            </div> 
                       </article> `

        shoppingCartContainer.append(card);
    })
}

renderShoppingCart();