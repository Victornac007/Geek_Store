let products = [];

fetch("./js/products.json")
    .then(response => response.json())
    .then(data => {
        products = data;
        updateProductsContainer(products);
    });

const allProductsContainer = document.querySelector("#products__container");
const categoryButtoms = document.querySelectorAll(".category-buttom");
let addButtoms = document.querySelectorAll(".add-btn");
const countCart = document.querySelector("#cart-count");
const videoGamesContainer = document.querySelector("videoGamesCategory");

function updateProductsContainer(productsChoiced){

    allProductsContainer.innerHTML = "";
    
    productsChoiced.forEach(product => {
        
        const div = document.createElement("div");
        div.classList.add("product__card");
        div.innerHTML = `
            <div class="product__card--img">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="card__info">
                <h3 class="product__card--title">${product.name}</h3>
                <hr class="card-divider">
                <div class="card-footer">
                    <div class="card-price">
                        <span class="card__info--price">$</span>${product.price ? product.price : 'Precio no disponible'}
                    </div>
                    <button class="add-btn" id="${product.id}">
                        Agregar
                        <i class="bi bi-cart-plus-fill" style="font-size: 1.5rem; color: rgb(44, 73, 127);" ></i>
                    </button>
                </div>
            </div>
            `
        allProductsContainer.appendChild(div);
    });
    updateAddButtoms()
};

categoryButtoms.forEach(buttom => {
    buttom.addEventListener("click", (e) => {

        categoryButtoms.forEach(buttom => buttom.classList.remove("nav__button-active"))
        e.currentTarget.classList.add("nav__button-active")

        if(e.currentTarget.id != "showAll"){
            const categoryProducts = products.filter(product => product.category.id === e.currentTarget.id);
            updateProductsContainer(categoryProducts);
        } else{
            updateProductsContainer(products);
        }
        
    })
} );

// const displayVideoGames = () => {
//     products.forEach(product =>{


//         if(product.category.id === "videoGames"){
//             const div = document.createElement("div");
//             div.classList.add("product__card");
//             div.innerHTML = `
//                 <div class="product__card--img">
//                     <img src="${product.img}" alt="${product.name}">
//                 </div>
//                 <div class="card__info">
//                     <h3 class="product__card--title">${product.name}</h3>
//                     <hr class="card-divider">
//                     <div class="card-footer">
//                         <div class="card-price">
//                             <span class="card__info--price">$</span>${product.price ? product.price : 'Precio no disponible'}
//                         </div>
//                         <button class="add-btn" id="${product.id}">
//                             Agregar
//                             <i class="bi bi-cart-plus-fill" style="font-size: 1.5rem; color: rgb(44, 73, 127);" ></i>
//                         </button>
//                     </div>
//                 </div>
//             `
//         }
        
//     })
//     };

// displayVideoGames();

function updateAddButtoms(){
    addButtoms = document.querySelectorAll(".add-btn");

    addButtoms.forEach(buttom => {
        buttom.addEventListener("click", addToCart)
    });
}

let productsInCart;

let productsInCartLs = localStorage.getItem("products-In-Cart");

if(productsInCartLs){
    productsInCart =  JSON.parse(productsInCartLs);
    updateCartCount();
} else{
    productsInCart = [];
};

function addToCart (e){
    const idButtom = e.currentTarget.id;
    const productAdded = products.find(product => product.id === idButtom);

    if(productsInCart.some(product => product.id === idButtom)){
        const index = productsInCart.findIndex(product => product.id === idButtom)
        productsInCart[index].quantify ++;
    } else {
        productAdded.quantify = 1;
        productsInCart.push(productAdded)
    }
    updateCartCount()
    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        destination: "https://victornac007.github.io/Geek_Store/pages/cart.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #0c72d6, #96c93d)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
    localStorage.setItem("products-In-Cart", JSON.stringify(productsInCart))
};
function updateCartCount(){
    let newCount = productsInCart.reduce((acc, product) => acc + product.quantify, 0)
    countCart.innerHTML = newCount
    console.log(newCount);
};