const shoppingCartContainer = document.querySelector('.shopping-cart--products-list');




const renderShoppingCart = () => {
    let shoppingCartStorage = getShoppingCartStorage();

    shoppingCartStorage.forEach( product => {
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
                                <h3 class="shopping-card-purchase--price"><b>$${(product.price).toFixed(2)}</b></h3>
                            </div>
                            <div class="shopping-card--delete">
                                <button class="shopping-card--delete-btn">Eliminar del Carrito</button>
                            </div> 
                       </article> `

        shoppingCartContainer.append(card);
    })
}

renderShoppingCart();

const renderCheckout = () => {
    let checkout = document.createElement('div');
    checkout.classList.add('shopping-cart--checkout')
}