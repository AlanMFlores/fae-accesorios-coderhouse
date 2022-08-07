// Modal de Filtros

const filters = document.querySelector('.catalogue-filters');
const showFilters = document.getElementById('show-filters')
const backBtn = document.getElementById('back-btn');

// Evento para mostrar los filtros

showFilters.addEventListener('click', () => {
    filters.classList.add('show-filters')
})

backBtn.addEventListener('click', () => {
    filters.classList.remove('show-filters')
})

// Catálogo Container

let catalogueGrid = document.querySelector('.catalogue-products');

// Render de Productos en Catálogo

const getProductsList = async () => {
    const products = await fetch('../data/products.json');
    const parsedProducts = await products.json();
    console.log(parsedProducts);
}

getProductsList();

const getProducts = async () => {
    try {
        const products = await fetch('../data/products.json');
        const parsedProducts = await products.json();

        parsedProducts.forEach(product => {
            let card = document.createElement('div');
            card.classList.add('product-card', product.category, 'hide');
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
            catalogueGrid.append(card);
        })

    } catch(error) {
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = `No se han podido obtener los productos. Intenta nuevamente en unos minutos.`
        catalogueGrid.append(errorMessage);
        catalogueGrid.classList.add('error-render');
    }
}

getProducts();

// Botones de categorias

const todos = document.getElementById('todos');
const aros = document.getElementById('aros');
const arosArcilla = document.getElementById('aros-arcilla');
const collares = document.getElementById('collares');
const pulseras = document.getElementById('pulseras');


// Funcion para filtrar los productos por categoría

function filterProduct(value) {
    let buttons = document.querySelectorAll('.categories-filter-btn')
    buttons.forEach(button => {
        if(button.innerText.toLowerCase().includes((value.toLowerCase()))) {
            button.classList.add('category-active');
        } else {
            button.classList.remove('category-active');
        }
    })

    let elements = document.querySelectorAll('.product-card');

    elements.forEach( (element) => {
        if(value == 'todos') {
            element.classList.remove('hide');
        } else if(element.classList.contains(value)) {
            element.classList.remove('hide')
        } else {
            element.classList.add('hide');
        }
    });
}

// Renderizado Inicial

window.onload = () => {
    filterProduct('todos');
}

// Filtro de los Productos según Categorías

todos.addEventListener('click', () => {
    filterProduct('todos')
    filters.classList.remove('show-filters');
});
aros.addEventListener('click', () => {
    filterProduct('aros')
    filters.classList.remove('show-filters');
});
arosArcilla.addEventListener('click', () => {
    filterProduct('aros-arcilla')
    filters.classList.remove('show-filters');
});
collares.addEventListener('click', () => {
    filterProduct('collares')
    filters.classList.remove('show-filters');
});
pulseras.addEventListener('click', () => {
    filterProduct('pulseras')
    filters.classList.remove('show-filters');
});


// Busuqeda por Nombre

document.getElementById('product-name-submit').addEventListener('click', () => {
    let searchInput = document.getElementById('product-name').value;
    let elements = document.querySelectorAll('.product-card-name');
    let cards = document.querySelectorAll('.product-card');

    elements.forEach((element, index) => {
        if(element.innerText.toLowerCase().includes(searchInput.toLowerCase())) {
            cards[index].classList.remove('hide');
            filters.classList.remove('show-filters')
        } else {
            cards[index].classList.add('hide');
            filters.classList.remove('show-filters')
        }
    })
})





























