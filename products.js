/* 
==================== Local Storage ====================
*/

/* 
==================== Funciones Globales ====================
*/

// Ordenar productos aleatoriamente
const shuffleArray = (arr) => {
    let newArr = arr.sort(() => Math.random() - 0.5);
    return newArr;
}

// Cortar un número determinado de productos
const sliceArr = (arr) => {
    let newArr = arr.slice(0, 12);
    return newArr;
}

/* 
==================== Products List ====================
*/

// Función para obtener los productos del JSON
const getProductsList = async () => {
    try {
        const products = await fetch('../data/products.json');
        const parsedProducts = await products.json();
        saveProductsStorage(parsedProducts);
    }
    catch(error) {
        const errorMessage = document.createElement('h3');
        errorMessage.innerText = 'No se han podido obtener los productos. Vuelva a intentarlo en unos minutos.'
    }
}

getProductsList();

// Array de Productos
const products = getProductsStorage();


