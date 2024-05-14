const product=[
    {
        id: 31,
        image: 'img/MoaraCuNoroc.jpg',
        title: 'Moara cu noroc',
        autor: 'Ion Slavici',
        price: 13
    },
    {
        id: 32,
        image: 'img/Morometii.jpg',
        title: 'Moromeții',
        autor: 'Marin Preda',
        price: 14
    },
    {
        id: 33,
        image: 'img/Ion.jpg',
        title: 'Ion',
        autor: 'Liviu Rebreanu',
        price: 9
    },
    {
        id: 34,
        image: 'img/EnigmaOtiliei.jpg',
        title: 'Enigma Otiliei',
        autor: 'George Calinescu',
        price: 11
    },
    {
        id: 35,
        image: 'img/Plumb.jpg',
        title: 'Plumb',
        autor: 'George Bacovia',
        price: 12
    },
    {
        id: 36,
        image: 'img/Testament.jpg',
        title: 'Testament',
        autor: 'Tudor Arghezi',
        price: 13
    },
]

const categories = [...new Set(product.map((item) => { return item }))]

const displayItem = (items) => {
    const filteredItems = items.filter(item => item.id >=0 );
    document.getElementById('root').innerHTML = filteredItems.map((item) => {
        var { image, title, autor, price, id } = item;
        return ( 
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>"${title}"</p>
                    <p>- ${autor}</p>
                    
                </div>
                <div class="Button_div">
                     <button class='K1'>
                        <a href="Apreciate.html">
                         <img src="img/favorite.png" width="30" height="30">
                     </a>
                     </button>
                     <button class='K2'>
                    <a href="CosCump.html">
                        <img src="img/CosCump.png" width="30">
                    </a></button>
                    <h2>${price}.00 €</h2>
                </div>
            </div>`
        )
    }).join('')
};

displayItem(categories);