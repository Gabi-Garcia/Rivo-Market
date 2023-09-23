
/*12 productos*/

const products = [
    {
        name: 'Black Crop Tailored Jacket',
        price: 10,
        vendedor: 'Zara',
        stars: 4,
        image:'./assets/pexels-dima-valkov-6211617 1 (1).png'
    },
    {
        name: 'Regular Fit Long Sleeve Top',
        price: 20,
        vendedor: 'Primark',
        stars: 4,
        image:'./assets/pexels-dima-valkov-6211621 1 (1).png'
    },
    {
        name: 'Ultimate style upgrade',
        price: 30,
        vendedor: 'Mango',
        stars: 3,
        image:'./assets/excited-white-girl-bright-stylish.png'
    },
    {
        name: 'Collection of stylish clothing',
        price: 40,
        vendedor: 'BCN',
        stars: 4,
        image:'./assets/pexels-dima-valkov-6402847 2 (1).png'
    }, {
        name: 'Textured Sunset Shirt',
        price: 50,
        vendedor: 'Zara',
        stars: 5,
        image:'./assets/pexels-dima-valkov-6503007 3 (1).png'
    },
    {
        name: 'Outerwear',
        price: 60,
        vendedor: 'Primark',
        stars: 5,
        image:'./assets/vknivfu sdkvbjieurg kjvn 1.png'
    },
    {
        name: 'Gray Solid Padded Jacket',
        price: 70,
        vendedor: 'Mango',
        stars: 4,
        image:'./assets/pexels-monstera-6311613 (1) 1 (1).png'
    },
    {
        name: 'Tailored Jacket',
        price: 80,
        vendedor: 'BCN',
        stars: 5,
        image:'./assets/pexels-dima-valkov-6211601 1 (1).png'
    },
    {
        name: 'Spread Collar Shirt',
        price: 90,
        vendedor: 'Zara',
        stars: 4,
        image:'./assets/pexels-dima-valkov-6402848 1 (1).png'
    },
    {
        name: 'Printed Loose T-shirt',
        price: 100,
        vendedor: 'Primark',
        stars: 5,
        image:'./assets/pexels-dima-valkov-6211614 1 (1).png'
    },
    {
        name: 'Solid Round Neck T-shirt',
        price: 110,
        vendedor: 'Mango',
        stars: 5,
        image:'./assets/pexels-monstera-6311612 3 (1).png'
    },
    {
        name: 'Summer Wind Crop Shirt',
        price: 120,
        vendedor: 'BCN',
        stars: 5,
        image:'./assets/pexels-dima-valkov-6402846 1 (1).png'
    }
]
 

const productsCards = document.querySelector('#products-cards');
const getProductTemplate = /*(name, price, seller, stars, image)*/ (product) => {
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
    `
}
const setupProductList = () => {
    for(i=0; i < products.length; i++){
        const product = products[i];
        productsCards.innerHTML += getProductTemplate(
            product
            // product.name,
            // product.price,
            // product.seller,
            // product.stars,
            // product.image
        )
    }
}
    setupProductList();

    //FILTRO: POR VENDEDOR
    const select = document.querySelector('.select-box');
    const filtroSeller = () => {
        productsCards.innerHTML = "";
        const sellerFiltered = [];
        for (const product of products) {                
            if (product.vendedor.includes(select.value)) {
                sellerFiltered.push(product);
                productsCards.innerHTML += getProductTemplate(
                    product
                    // product.name,
                    // product.price,
                    // product.seller,
                    // product.stars,
                    // product.image
                    )
                }else if(select.value === "V"){
                    productsCards.innerHTML += getProductTemplate(
                        product
                        // product.name,
                        // product.price,
                        // product.seller,
                        // product.stars,
                        // product.image
                        )
                 console.log('Soy V')
                }
        }      
        console.log('Soy el array filtrado : ', sellerFiltered)
    }
    select.addEventListener("change", filtroSeller);

    //FILTRO POR PRECIO  
    const inputElement = document.getElementById("miInputNumber");
    const searchButton = document.querySelector("#search-button") ;
    const priceFiltered = [];
    const capturarValor = (e) =>  {
       e.preventDefault();
       productsCards.innerHTML = "";
    let valor = inputElement.value;
    for(i = 0; i < products.length; i++){
        const product = products[i]
        if(product.price < valor){
            priceFiltered.push(product.price)
            productsCards.innerHTML += getProductTemplate(
                product

                )
            console.log('Soy el priceFiltered : 💶', priceFiltered[i])
        }else if(valor <= 10 ){
            productsCards.innerHTML += getProductTemplate(
                product        
                )
         console.log('Soy V')
        }

    }
    console.log("El valor capturado es: " + valor);
}
searchButton.addEventListener('submit', capturarValor)

    //BOTÓN PARA ELIMINAR LOS FILTROS
    const inputElement2 = document.getElementById("miInputNumber");

    const limpiar = document.querySelector('#filtrar');
    const limpiarFiltros = () => {
        inputElement2.value = '';
        productsCards.innerHTML = "";
        select.value = 'All';
        for(i = 0; i < products.length; i++){
            const product = products[i]
            if( priceFiltered.length !== "")
            productsCards.innerHTML += getProductTemplate(
        product   
        ) 
            console.log('Soy el botón limpiar filtros')
        }
    }
    limpiar.addEventListener('click', limpiarFiltros)

     
    
    







