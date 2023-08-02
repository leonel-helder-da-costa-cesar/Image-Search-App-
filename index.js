const acceskey ='zmwkqTJ93byFYb9zpCZGpToP7DRj3H8U';

const formEl = document.querySelector('form');

const searchInputEl = document.getElementById('search-input');

const searchResultsEl = document.querySelector('.search-results');

const showMoreButton = document.getElementById('show-more-button');

let inputData = '';
let page = 1;

async function searchImages() {
    inputData = searchInputEl.valeu;
    const url = `https://apilayer.com/marketplace/order_complete?id=221&txn=free?page=${page}&query=${inputData}&client_id=${acceskey}`
    

    const response = await fetch(url);
    const data = await response.json();
    if(page === 1) {
        searchResultsEl.innerHTML = '';
    }

    const results = data.results;
}

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
})