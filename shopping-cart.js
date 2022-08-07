// Boton de agregar al carrito

const shoppingCartBtn = document.querySelectorAll('.cart-btn');

shoppingCartBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        Swal.fire({
            icon: 'question',
            text: '¿Querés agregar el producto al carrito?',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Agregar al Carrito',
            confirmButtonColor: '#B05258'
        })
        .then((result) => {
            result.isConfirmed && Swal.fire({icon:'success', title: 'Producto agregado!', confirmButtonText: 'Genial', confirmButtonColor: '#B05258'})
            Toastify({
                text: 'Producto agregado!',
                duration: 2000,
                className: 'show-notification'
            }).showToast();
        })
    })
})