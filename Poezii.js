const product=[
    {
        id: 21,
        image: 'img/PoeziiSiVorbe.jpg',
        title: 'Poezii și vorbe-n vânt',
        autor: 'Horațiu Mălăele',
        price: 7
    },
    {
        id: 22,
        image: 'img/PoeziiImperfecte.jpg',
        title: 'Poezii Imperfecte',
        autor: 'Alina Caraghin',
        price: 11
    },
    {
        id: 23,
        image: 'img/TuAiUnFel.jpg',
        title: 'Tu ai un fel de paradis al tău',
        autor: 'Nichita Stănescu',
        price: 9
    },
    {
        id: 24,
        image: 'img/PeTineTe.jpg',
        title: 'Pe tine te',
        autor: 'Marius Tuca',
        price: 9
    },
    {
        id: 25,
        image: 'img/NoptiAlbe.jpg',
        title: 'Nopți albe',
        autor: 'F. M. Dostoievski',
        price: 7
    },
    {
        id: 26,
        image: 'img/DeCeNuMiVii.jpg',
        title: 'De ce nu-mi vii',
        autor: 'Mihai Eminescu',
        price: 11
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