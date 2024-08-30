

// Función para generar la plantilla de un producto
export const getProductTemplate = (product) => {
    return `
        <article class="card">
            <article class="image"><img src="${product.image}"></img></article>
            <article class="bajo-image">
            <article class="name"> ${product.name} </article>
            <article class="price">  ${product.price} € </article>
            <article class="seller"><p>Vendedor: ${product.vendedor}</p></article>
            <article class="stars"><p>Review: ${product.stars} ⭐</p></article>
            </article>
        </article>
    `;
}

// Función para configurar la lista de productos
export const setupProductList = (products) => {
    const productsCards = document.querySelector('#products-cards');
    productsCards.innerHTML = '';
    products.forEach(product => {
        productsCards.innerHTML += getProductTemplate(product);
    });
}

// Filtro por vendedor
export const filtroSeller = (products, select) => {
    const productsCards = document.querySelector('#products-cards');
    productsCards.innerHTML = '';
    products.forEach(product => {
        if (product.vendedor.includes(select.value) || select.value === "V") {
            productsCards.innerHTML += getProductTemplate(product);
        }
    });
}

// Filtro por precio
export const capturarValor = (e, products) => {
    e.preventDefault();
    const productsCards = document.querySelector('#products-cards');
    const inputElement = document.getElementById("miInputNumber");
    const valor = inputElement.value;
    productsCards.innerHTML = '';
    products.forEach(product => {
        if (product.price < valor || valor <= 10) {
            productsCards.innerHTML += getProductTemplate(product);
        }
    });
}

// Función para limpiar filtros
export const limpiarFiltros = (products) => {
    const inputElement2 = document.getElementById("miInputNumber");
    const select = document.querySelector('.select-box');
    const productsCards = document.querySelector('#products-cards');
    inputElement2.value = '';
    select.value = 'All';
    productsCards.innerHTML = '';
    products.forEach(product => {
        productsCards.innerHTML += getProductTemplate(product);
    });
}
