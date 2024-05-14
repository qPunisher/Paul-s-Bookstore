const product=[
    {
        id: 11,
        image: 'img/PicteazamaInCulori.jpg',
        title: 'Pictează-ma în culori indiene',
        autor: 'Dyana Pîslaru',
        price: 9
    },
    {
        id: 12,
        image: 'img/Valuri.jpg',
        title: 'Valuri',
        autor: 'Ariana Decea',
        price: 10
    },
    {
        id: 13,
        image: 'img/LaPoliOpusi.jpg',
        title: 'La poli opuși',
        autor: 'Bianca E.',
        price: 7
    },
    {
        id: 14,
        image: 'img/FataCuPalton.jpg',
        title: 'Fata cu palton roșu',
        autor: 'Kate Hammer',
        price: 9
    },
    {
        id: 15,
        image: 'img/CascadaIngerilor.jpg',
        title: 'Cascada îngerilor',
        autor: 'Kristin Hannah',
        price: 10
    },
    {
        id: 16,
        image: 'img/AdamSiEva.jpg',
        title: 'Adam si Eva',
        autor: 'Liviu Rebreanu',
        price: 8
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