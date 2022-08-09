/* 
==================== Agregado a Favoritos ====================
*/

// Iconos de favorito
const favBtn = document.querySelectorAll('.fa-heart');

// Productos almacenados en localStorage
let storageProducts = getProductsStorage();

// Productos agregados a favoritos
let favoriteProducts = localStorage.getItem('favorite-list') || [];


//Función para agregar producto a favoritos
const addProduct = (product) => {
    favoriteProducts.push(product);
    localStorage.setItem('favorite-list', JSON.stringify(favoriteProducts));
}   

//Función para eliminar producto de favoritos
const removeProduct = (product) => {
    let productToRemove = favoriteProducts.findIndex(elem => elem == product);
    favoriteProducts.splice(productToRemove, 1);
    localStorage.setItem('favorite-list', JSON.stringify(favoriteProducts));
}

// Función para agregar productos a favoritos
const addToFav = () => {
    favBtn.forEach(fav => {
        fav.addEventListener('click', (event) => {
                event.target.classList.add('like-product');
                let matchProduct = products.find(product => product.id == event.target.id);
                let stringifiedMatchProduct = JSON.stringify(matchProduct);
                event.target.classList.contains('like-product') ? addProduct(stringifiedMatchProduct) : removeProduct(matchProduct);
            })
    })
}

addToFav();