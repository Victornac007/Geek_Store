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
                    <button class="card-btn" id="${producto.id}">
                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                    </button>
                </div>
            </div>
            `

        allProductsContainer.appendChild(div);
    });
}




document.addEventListener("DOMContentLoaded", () => {
    cargarProducto();
});
