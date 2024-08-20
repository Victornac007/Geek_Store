const productsInCart = JSON.parse(localStorage.getItem("products-In-Cart"))

const emptyCart = document.querySelector("#empty-cart")
const productsCartView = document.querySelector("#ProductsCartsView")
const cartActionsContainer = document.querySelector("#cart-actions")
const buyedCart = document.querySelector("#buyed-cart")

if(productsInCart){
    emptyCart.classList.add("disabled");
    buyedCart.classList.add("disabled");
    productsCartView.classList.remove("disabled");
    cartActionsContainer.classList.remove("disabled");

    productsCartView.innerHTML = "";

    productsInCart.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product-cart");
        div.innerHTML =`
            <img src=".${product.img}" alt="${product.name}">
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
    
}