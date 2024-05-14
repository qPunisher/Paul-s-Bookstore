const product=[
    {
        id: 41,
        image: 'img/AttackOnTitan.jpg',
        title: 'Attack on Titan',
        autor: 'Hajime Isayama',
        price: 14
    },
    {
        id: 42,
        image: 'img/LeFilm.jpg',
        title: 'Black City Parade - Le Film',
        autor: 'Richard Kern',
        price: 8
    },
    {
        id: 43,
        image: 'img/RickAndMorty.jpg',
        title: 'Rick and Morty',
        autor: 'Justin Roiland & Dan Harmon',
        price: 9
    },
    {
        id: 44,
        image: 'img/Quatar.jpg',
        title: 'Qatar 2022',
        autor: 'Marian Nazat',
        price: 10
    },
    {
        id: 45,
        image: 'img/PsihologiaBanilor.jpg',
        title: 'Psihologia Banilor',
        autor: 'Morgan Housel',
        price: 9
    },
    {
        id: 46,
        image: 'img/AtomicHabits2.jpg',
        title: 'Atomic Habits',
        autor: 'James Habits',
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