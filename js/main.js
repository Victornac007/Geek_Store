const products =[
    {
        id: "game-01",
        name: "The Legend Of Zelda: TOTK",
        img: "./img/productos/juegos/product_ZeldaTotk.png",
        description: "The Legend of Zelda: Tears of the Kingdom is an action-adventure game developed",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 56.98,
    },
    {
        id: "game-02",
        name: "Forza Horazon 5",
        img: "./img/productos/juegos/product__ForzaHorizon5.png",
        description: "Forza Horizon 5 is an action-adventure game developed by Playground Games",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 56.98,
    },
    {
        id: "game-03",
        name: "Horizon Forbidden West",
        img: "./img/productos/juegos/product_horizonFw.png",
        description: "Horizon: Forbiden West is an action-adventure game developed by Guerrilla Games",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 56.98,
    },
    {
        id: "game-04",
        name: "Assassins Creed: Valhalla",
        img: "./img/productos/juegos/produtc__AC_Valhalla.webp",
        description: "Assassins Creed: Valhalla is an action-adventure game developed by Ubisoft",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 56.98,
    },
    {
        id: "game-05",
        name: "Stars Wars: Fallen Order",
        img: "./img/productos/juegos/product__star_wars-FO.jpeg",
        description:"Stars Wars: Fallen Order is an action-adventure game developed by Electronics Art",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 56.98,
    },
    {
        id: "console-01",
        name: "Xbox One Series X",
        img: "https://assets.xboxservices.com/assets/12/7e/127e5830-82cb-4f6c-beef-4f9a0c970430.jpg?n=Consoles-Hub_Content-Placement_Hub-SX_788x444.jpg",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 569.99
    },
    {
        id: "console-02",
        name: "PlayStation 5: blue edition",
        img: "./img/productos/consolas/ps5_blue.png",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 569.99
    },
    {
        id: "console-03",
        name: "Nintendo Swicth",
        img:"./img/productos/consolas/flagship.png",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 297.99,
    },
    {
        id: "console-04",
        name: "Nintendo Swicth: TOTK Edition",
        img:"./img/productos/consolas/switchOled__especialEdition Totk.png",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 354.99,
    },
    {
        id: "console-05",
        name: "Nintendo Swicth: OLED Edition",
        img:"./img/productos/consolas/switchOled.png",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 309.99,
    },
    {
        id: "console-06",
        name: "Xbox Series S: 1 TB (negro)",
        img:"https://assets.xboxservices.com/assets/67/fb/67fb575e-0693-4cc6-aff7-4884483283cc.jpg?n=Consoles-Hub_Content-Placement_Hub_247813_788x444.jpg",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 389.990
    },
    {
        id: "console-07",
        name: "Xbox Series S",
        img:"https://assets.xboxservices.com/assets/c9/10/c910f756-7999-42c3-9f66-aa30fece2ae8.jpg?n=Consoles-Hub_Content-Placement_Hub-SS_788x444.jpg",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 329.990
    },
    {
        id: "accesories-01",
        name: "Control inalámbrico Xbox Elite Series 2: básico (blanco)",
        img:"https://assets.xboxservices.com/assets/a8/a6/a8a65641-dabd-467b-8399-f9020ecdfca6.jpg?n=Accessories-Hub_Content-Placement-0_320089_788x444.jpg",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 99.990
    },
    {
        id: "accesories-02",
        name: "Control inalámbrico Xbox Elite Series 2",
        img:"https://assets.xboxservices.com/assets/13/c9/13c9e42e-7802-4437-be3d-e694ae180578.jpg?n=999666_Content-Placement-0_Accessory-hub_740x417.jpg",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 89.990
    },
    {
        id: "accesories-03",
        name: "Audífonos estéreo de Xbox",
        img:"https://assets.xboxservices.com/assets/96/cd/96cd4d25-4891-4f62-8dd4-591c337f335c.jpg?n=Accessories-Hub_Content-Placement-0_300350_788x444.jpg",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 29.990
    },
    {
        id: "accesories-04",
        name: "Audífonos inalámbricos Xbox: Starfield Limited Edition",
        img:"https://assets.xboxservices.com/assets/2e/5e/2e5e57aa-ac65-4869-8db9-8cc1c73d1a6f.jpg?n=Accessories-Hub_Content-Placement-0_541123_788x444.jpg",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 49.990
    },
    {
        id: "accesories-05",
        name: "Control inalámbrico Xbox: Edición limitada Starfield",
        img:"https://assets.xboxservices.com/assets/0c/e5/0ce542fe-436c-4220-93ad-8cacfdaf4b25.jpg?n=Accessories-Hub_Content-Placement-0_10293844_788x444.jpg",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 79.990
    },

];
const allProductsContainer = document.querySelector("#products__container")
const categoryButtoms = document.querySelectorAll(".category-buttom")
let addButtoms = document.querySelectorAll(".add-btn")
const countCart = document.querySelector("#cart-count")

function cargarProducto(productsChoiced){

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
}

categoryButtoms.forEach(buttom => {
    buttom.addEventListener("click", (e) => {

        categoryButtoms.forEach(buttom => buttom.classList.remove("nav__button-active"))
        e.currentTarget.classList.add("nav__button-active")

        if(e.currentTarget.id != "showAll"){
            const categoryProducts = products.filter(product => product.category.id === e.currentTarget.id);
            cargarProducto(categoryProducts);
        } else{
            cargarProducto(products);
        }
        
    })
} )


function updateAddButtoms(){
    addButtoms = document.querySelectorAll(".add-btn");

    addButtoms.forEach(buttom => {
        buttom.addEventListener("click", addToCart)
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarProducto(products);
});
let productsInCart;

let productsInCartLs = localStorage.getItem("products-In-Cart");

if(productsInCartLs){
    productsInCart =  JSON.parse(productsInCartLs);
    updateCartCount();
} else{
    productsInCart = [];
}

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

    localStorage.setItem("products-In-Cart", JSON.stringify(productsInCart))
}
function updateCartCount(){
    let newCount = productsInCart.reduce((acc, product) => acc + product.quantify, 0)
    countCart.innerHTML = newCount
    console.log(newCount);
}