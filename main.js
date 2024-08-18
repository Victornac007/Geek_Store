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
        name: "Horizon Forbiden West",
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
        img: "./img/productos/consolas/xbox.png",
        category:{
            name: "consolas",
            id: "consolas"
        },
        price: 569.99
    },
    {
        id: "console-02",
        name: "PlayStation 5: blue edition",
        img: "./img/productos/consolas/ps5_blue.png",
        category:{
            name: "consolas",
            id: "consolas"
        },
        price: 569.99
    },
    {
        id: "console-03",
        name: "Nintendo Swicth",
        img:"./img/productos/consolas/flagship.png",
        category:{
            name: "consolas",
            id: "consolas"
        },
        price: 297.99,
    },
    {
        id: "console-04",
        name: "Nintendo Swicth: TOTK Edition",
        img:"./img/productos/consolas/switchOled__especialEdition Totk.png",
        category:{
            name: "consolas",
            id: "consolas"
        },
        price: 354.99,
    },
    {
        id: "console-05",
        name: "Nintendo Swicth: OLED Edition",
        img:"./img/productos/consolas/switchOled.png",
        category:{
            name: "consolas",
            id: "consolas"
        },
        price: 309.99,
    },

]
const allProductsContainer = document.querySelector("#products__container")
const categoryButtoms = document.querySelectorAll(".category-buttom")

function cargarProducto(){
    products.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("product__card");
        div.innerHTML = `
            <div class="product__card--img">
                <img src="${producto.img}" alt="${producto.name}">
            </div>
            <div class="card__info">
                <h3 class="product__card--title">${producto.name}</h3>
                <hr class="card-divider">
                <div class="card-footer">
                    <div class="card-price">
                        <span class="card__info--price">$</span>${producto.price ? producto.price : 'Precio no disponible'}
                    </div>
                    <i class="bi bi-cart-plus-fill" style="font-size: 1.5rem; color: rgb(44, 73, 127);" ></i>
                </div>
            </div>
            `

        allProductsContainer.appendChild(div);
    });
}

categoryButtoms.forEach(buttom => {
    buttom.addEventListener("click", (e) => {
        categoryButtoms.forEach(buttom => buttom.classList.remove("nav__button-active"))

    e.currentTarget.classList.add("nav__button-active")
    })
} )



document.addEventListener("DOMContentLoaded", () => {
    cargarProducto();
});
