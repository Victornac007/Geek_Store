let productsInCart = localStorage.getItem("products-In-Cart");
productsInCart = JSON.parse(productsInCart);

const emptyCart = document.querySelector("#empty-cart")
const productsCartView = document.querySelector("#ProductsCartsView")
const cartActionsContainer = document.querySelector("#cart-actions")
const buyedCart = document.querySelector("#buyed-cart")
const buttomPay = document.querySelector("#buy-btn-cart")
const buttomActionEmptyCart = document.querySelector("#action-empty-cart")
const totalContainer = document.querySelector("#total-price")
let deleteButtoms = document.querySelectorAll(".delete-product-cart-btn")

function updateProductsCart(){
    if(productsInCart && productsInCart.length > 0){
        emptyCart.classList.add("disabled");
        buyedCart.classList.add("disabled");
        productsCartView.classList.remove("disabled");
        cartActionsContainer.classList.remove("disabled");
        
        productsCartView.innerHTML = "";
    
        productsInCart.forEach(product => {
            const div = document.createElement("div");
            div.classList.add("product-cart");
            div.innerHTML =`
                <img src="..${product.img}" alt="${product.name}">
                <div>
                <small>Título</small>
                <h3>${product.name}</h3>
                </div>
                <div class="quantify-product-cart">
                    <small>Cantidad</small>
                    <p>${product.quantify}</p>
                </div>
                <div class="price-product-cart">
                    <small>Precio</small>
                    <p>$${product.price}</p>
                </div>
                <div class="total-product-cart">
                    <small>SubTotal</small>
                    <p>$${product.price * product.quantify}</p>
                </div>
                <div class="delete-product-cart">
                    <button id="${product.id}" class="delete-product-cart-btn">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            `;
            productsCartView.appendChild(div);
        });
    
        
    
    } else{
        emptyCart.classList.remove("disabled");
        buyedCart.classList.add("disabled");
        productsCartView.classList.add("disabled");
        cartActionsContainer.classList.add("disabled");
    }
    updateDeleteButtoms();
    updateTotal()
}
document.addEventListener("DOMContentLoaded", () => {
    updateProductsCart();
});


function updateDeleteButtoms(){
    deleteButtoms = document.querySelectorAll(".delete-product-cart-btn");

    deleteButtoms.forEach(buttom => {
        buttom.addEventListener("click", deleteFromCart)
    });
};

function deleteFromCart(e){

    const idButtom = e.currentTarget.id;
    const index = productsInCart.findIndex(product => product.id === idButtom)

    
    Swal.fire({
        title: "Estas seguro?",
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Sacar del carrito!"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("products-In-Cart", JSON.stringify(productsInCart));
            updateProductsCart();
            Swal.fire({
            title: "Eliminado!",
            text: "Haz sacado tu producto del carrito de compras.",
            icon: "success"
        });
        productsInCart.splice(index, 1)

        updateProductsCart();
        
        Toastify({
            text: "eliminado del carrito",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #0c72d6, #96c93d)",
            },
            onClick: function(){} 
        }).showToast();
        localStorage.setItem("products-In-Cart", JSON.stringify(productsInCart));
        }
    });
    
}

buttomActionEmptyCart.addEventListener("click", actionEmptyCart);
function actionEmptyCart(){
    Swal.fire({
        title: "Estas seguro?",
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Vaciar Carrito!"
    }).then((result) => {
        if (result.isConfirmed) {
            productsInCart.length = 0;
            localStorage.setItem("products-In-Cart", JSON.stringify(productsInCart));
            updateProductsCart();
            Swal.fire({
            title: "Vaciado!",
            text: "Tu carrito de compras ha sido vaciado.",
            icon: "success"
        });
        }
    });
}
function updateTotal(){
    const calculatedTotal =productsInCart.reduce((acc, product) => acc + (product.price * product.quantify), 0);
    totalContainer.innerText = `$${calculatedTotal}`;
}

buttomPay.addEventListener("click", payCart);
function payCart(){
    
    productsInCart.length = 0;
    localStorage.setItem("products-In-Cart", JSON.stringify(productsInCart));

    emptyCart.classList.add("disabled");
    buyedCart.classList.remove("disabled");
    productsCartView.classList.add("disabled");
    cartActionsContainer.classList.add("disabled");

    Swal.fire({
        title: "Compra Realizada!",
        icon: "success",
        text: 'Muchas gracias por tu compra. Te llegaran en menos de 24Horas!',
        footer: '<a href="../index.html">Seguir explorando nuestros productos</a>',
        confirmButtonText: '¡Entendido!'
    });
}