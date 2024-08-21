const products =[
    {
        id: "game-01",
        name: "The Legend Of Zelda: TOTK",
        img: "./img/productos/juegos/product-zeldatotk.webp",
        description: "The Legend of Zelda: Tears of the Kingdom is an action-adventure game developed",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 56.98,
    },
    {
        id: "game-02",
        name: "Forza Horizon 5",
        img: "./img/productos/juegos/product-forzahorizon5.webp",
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
        img: "./img/productos/juegos/product-horizonfw.webp",
        description: "Horizon: Forbiden West is an action-adventure game developed by Guerrilla Games",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 56.98,
    },
    {
        id: "game-04",
        name: "Assassin's Creed: Valhalla",
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
        img: "./img/productos/juegos/product-star-wars-fo.webp",
        description:"Stars Wars: Fallen Order is an action-adventure game developed by Electronics Art",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 56.98,
    },
    {
        id: "game-06",
        name: "Stars Wars: Out Laws",
        img: "./img/productos/juegos/StarsWarsOutLaws.webp",
        description:"Stars Wars: Out Laws is an action-adventure game developed by Ubysoft",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 76.98,
    },
    {
        id: "game-07",
        name: "Raimbow Six Siege",
        img: "./img/productos/juegos/Raimbow-Six.webp",
        description:"Raimbow Six Siege is an action-FPS game developed by Ubysoft",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 6.98,
    },
    {
        id: "game-08",
        name: "Ghost Recon: Wild Lands",
        img: "./img/productos/juegos/Ghost-recon-tom-clancy.webp",
        description:"Ghost Recon: Wild Lands is an action-FPS game developed by Ubysoft",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 16.98,
    },
    {
        id: "game-09",
        name: "Assassin's Creed Mirage",
        img: "./img/productos/juegos/Assassins-creed-Miradge.webp",
        description:"Assassin's Creed Mirage is an action-adventure game developed by Ubysoft",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 19.98,
    },
    {
        id: "game-10",
        name: "Assassin's Creed: Shadows",
        img: "./img/productos/juegos/asscShadows.webp",
        description:"Assassin's Creed: Shadows is an action-adventure game developed by Ubysoft",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 86.98,
    },
    {
        id: "game-11",
        name: "Avatar: Frontiers of Pandora",
        img: "./img/productos/juegos/Avatar-uby.webp",
        description:"Avatar: Frontiers of Pandora is an action-adventure game developed by Ubysoft",
        category: {
            name: "videoGames",
            id: "videoGames"
        },
        price: 29.98,
    },
    {
        id: "console-01",
        name: "Xbox One Series X",
        img: "./img/productos/consolas/Xbox-one-Series-X.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 569.99
    },
    {
        id: "console-02",
        name: "PlayStation 5: blue edition",
        img: "./img/productos/consolas/ps5_blue.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 569.99
    },
    {
        id: "console-03",
        name: "Nintendo Swicth",
        img:"./img/productos/consolas/flagship.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 297.99,
    },
    {
        id: "console-04",
        name: "Nintendo Swicth: TOTK Edition",
        img:"./img/productos/consolas/switchOled__especialEdition Totk.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 354.99,
    },
    {
        id: "console-05",
        name: "Nintendo Swicth: OLED Edition",
        img:"./img/productos/consolas/switchOled.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 309.99,
    },
    {
        id: "console-06",
        name: "Xbox Series S: 1 TB (negro)",
        img:"./img/productos/consolas/Xbox-Series-S-1TB-Black.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 389.990
    },
    {
        id: "console-07",
        name: "Xbox Series S",
        img:"img/productos/consolas/Xbox-series-s-white.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 329.990
    },
    {
        id: "console-08",
        name: "Game Boy",
        img:"./img/productos/consolas/game-boy.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 499.990
    },
    {
        id: "console-09",
        name: "Play Station VR",
        img:"./img/productos/consolas/control-y-consola2.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 399.990
    },
    {
        id: "console-10",
        name: "Nintendo 1",
        img:"./img/productos/consolas/nintendo1.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 199.990
    },
    {
        id: "console-11",
        name: "Nintendo Switch Lite",
        img:"./img/productos/consolas/Nintendo-Switch-LITE.webp",
        category:{
            name: "consoles",
            id: "consoles"
        },
        price: 199.990
    },
    {
        id: "accesories-01",
        name: "Control inalámbrico Xbox Elite Series 2: básico (blanco)",
        img:"./img/productos/diversos/Xbox-elite-controller-basic-white.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 99.990
    },
    {
        id: "accesories-02",
        name: "Control inalámbrico Xbox Elite Series 2",
        img:"./img/productos/diversos/Xbox-controller-elite-series-2-black.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 89.990
    },
    {
        id: "accesories-03",
        name: "Audífonos estéreo de Xbox",
        img:"./img/productos/diversos/headphones-xbox.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 29.990
    },
    {
        id: "accesories-04",
        name: "Audífonos inalámbricos Xbox: Starfield Limited Edition",
        img:"./img/productos/diversos/headphones-specialEdition-StarfieldXbox.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 49.990
    },
    {
        id: "accesories-05",
        name: "Control inalámbrico Xbox: Edición limitada Starfield",
        img:"./img/productos/diversos/Xbox-controller-specialEditionStarfield.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 79.990
    },
    {
        id: "accesories-06",
        name: "Control inalámbrico DualSense®",
        img:"./img/productos/diversos/dualsense-imagePS5controller.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 74.990
    },
    {
        id: "accesories-07",
        name: "Control inalámbrico DualSense Edge™",
        img:"./img/productos/diversos/DualSense--EdgeController.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 259.990
    },
    {
        id: "accesories-08",
        name: "Control Access™",
        img:"./img/productos/diversos/access-controller-PS5.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 79.990
    },
    {
        id: "accesories-09",
        name: "Auriculares inalámbricos PULSE Explore™",
        img:"./img/productos/diversos/PULSE-Explore-earbuds-thumbnailPS5.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 79.990
    },
    {
        id: "accesories-10",
        name: "Auriculares inalámbricos PULSE Elite™",
        img:"./img/productos/diversos/PULSE-Elite-headset-thumbnailPS5.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 79.990
    },
    {
        id: "accesories-11",
        name: "Controles Nintendo Switch Joy-Con NEON",
        img:"./img/productos/diversos/control_nintendo-switch.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 74.990
    },
    {
        id: "accesories-12",
        name: "Mando Nintendo Switch Pro Controller Zelda TOTK Edition",
        img:"./img/productos/diversos/MandoNintendoSwitchProControllerZeldaTOTKEdition.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 79.990
    },
    {
        id: "accesories-12",
        name: "Mando Nintendo Switch Pro Controller",
        img:"./img/productos/diversos/Nintendo-pro-black-controller-.webp",
        category:{
            name: "accesories",
            id: "accesories"
        },
        price: 71.990
    },
];
const allProductsContainer = document.querySelector("#products__container");
const categoryButtoms = document.querySelectorAll(".category-buttom");
let addButtoms = document.querySelectorAll(".add-btn");
const countCart = document.querySelector("#cart-count");

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
};

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
} );


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
        destination: "../pages/cart.html",
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