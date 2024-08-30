 

import { setupProductList, filtroSeller, capturarValor, limpiarFiltros } from './utils/functions.js';
import { products } from './data/products.js';

// Inicializar la lista de productos
setupProductList(products);

// Filtro por vendedor
const select = document.querySelector('.select-box');
select.addEventListener('change', () => filtroSeller(products, select));

// Filtro por precio
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('submit', (e) => capturarValor(e, products));

// Botón para limpiar filtros
const limpiar = document.querySelector('#filtrar');
limpiar.addEventListener('click', () => limpiarFiltros(products));

     
    
    







