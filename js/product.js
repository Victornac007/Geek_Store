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
                    <img src="..${productShow.img}" alt="${productShow.name}">
                </div>
                <div class="product-des">
                    <h3 class="product--title">${productShow.name}</h3>
                    <p class="product--price">$${productShow.price}</p>

                    <h2>Sobre este artículo</h2>
                    <p class="product--description">${productShow.description ? productShow.description : productShow.name}</p>
                    <a href="../pages/cart.html" class="btn btn-dark btn-lg btn-block buy__product">Comprar</a>
                </div>
            </div>
            <div class="product--footer">
            </div>
        </div>
        `
        productContainer.append(div);
    });