let productContainer = document.querySelector("#product");

const urlParams = new URLSearchParams(window.location.search);
const idProduct = urlParams.get('id');

fetch("../js/products.json")
    .then(response => response.json())
    .then(data => {
        
        const productShow = data.find((prod) => prod.id === idProduct);

        productContainer.classList.add("product--container")
        productContainer.innerHTML = `
        <div class="product--container">
            <div class="product--info">
                <div class="product--img">
                    <img src="${productShow.img}" alt="${productShow.name}">
                </div>
                <h2 class="product--title">${productShow.name}</h2>
                
                <div class="product-des">
                    <h2>Sobre este artículo</h2>
                    <p class="product--description">${productShow.description}</p>
                </div>
                <div class="product--footer">
                    <p class="product--price">$${productShow.price}</p>
                    <a href="pages/cart.html" class="btn btn-dark btn-lg btn-block buy__product">Comprar</a>
                    <button class="add-btn" id="${product.id}">
                        Agregar
                        <i class="bi bi-cart-plus-fill" style="font-size: 1.5rem; color: rgb(44, 73, 127);" ></i>
                    </button>
                </div>
                
            </div>
        </div>
        `
        productContainer.append(div);
    });