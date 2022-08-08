// Añadir productos a Favoritos
let favoriteList = []; // Array de productos vacío
let stringifiedFavoriteList = localStorage.setItem('favoriteList', JSON.stringify(favoriteList)); // Array de productos almacenado en localStorage
const favModalBtn = document.getElementById('fav-modal-btn'); // Boton para ver los favoritos
const closeModalBtn = document.querySelector('.close-modal-btn') // Boton para cerrar el modal
let favListContainer = document.querySelector('.favorites-container'); // Modal de productos agregados a favoritos
const favBtn = document.querySelectorAll('.fa-heart'); // Selecciona todos los íconos de fav

// Función para renderizar los productos en favoritos
const favoriteRender = (list) => {
    const favoriteEmpty = document.querySelector('.favorites-container-empty');
    favoriteEmpty.style.display = 'none';
    for(const fav of list) {
        let favCard = document.createElement('div');
        favCard.classList.add('favorites-list-item');
        favCard.innerHTML = `<img src="../${fav.image}" alt="">
                             <div class="favorites-list-item-info">
                                 <h3 class="product-name">${fav.name}</h3>
                                 <p class="product-price">${fav.price}</p>
                                 <button class="delete">Eliminar de Favoritos</button>
                             </div>`;
        favListContainer.append(favCard);
    }
}

//Función para eliminar producto de favoritos
const removeProduct = (product) => {
    let parsedFavoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    let productToRemove = parsedFavoriteList.findIndex(elem => elem == product);
    parsedFavoriteList.splice(productToRemove, 1);
    localStorage.setItem('favoriteList', JSON.stringify(parsedFavoriteList));
}

//Función para agregar producto a favoritos
const addProduct = (product) => {
    let parsedFavoriteList = JSON.parse(localStorage.getItem('favoriteList'));
    parsedFavoriteList.push(product);
    localStorage.setItem('favoriteList', JSON.stringify(parsedFavoriteList));
}   


// Función global para agregar el producto o eliminar
const addToFav = () => {
    favBtn.forEach(fav => {
        fav.addEventListener('click', (event) => {
                event.target.classList.toggle('like-product');
                let matchProduct = products.find(product => product.id == event.target.id);
                let stringifiedMatchProduct = JSON.stringify(matchProduct);
                event.target.classList.contains('like-product') ? addProduct(stringifiedMatchProduct) : removeProduct(matchProduct);
                let finalFavoriteList = JSON.parse(localStorage.getItem('favoriteList'));
                console.log('Funciona?');
                for(let i=0; i< finalFavoriteList.length; i++) {
                    let favItem = JSON.parse(finalFavoriteList[i]);
                    let favoriteListRender = [];
                    favoriteListRender.push(favItem);
                    favoriteRender(favoriteListRender);
                }
                
                favoriteRender(finalFavoriteList);
            })
    })
}

addToFav();


// favModalBtn.addEventListener('click', () => {
//     menuList.classList.remove('show-menu');
//     favListContainer.classList.add('show-fav-modal')
// })

// closeModalBtn.addEventListener('click', () => {
//     favListContainer.classList.remove('show-fav-modal')
// })



