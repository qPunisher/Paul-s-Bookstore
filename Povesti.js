const product=[
    {
        id: 1,
        image: 'img/InsulaDelfinilor.png',
        title: 'Insula delfinilor albaștrii',
        autor: 'Scott O`Dell',
        price: 10
    },
    {
        id: 2,
        image: 'img/NumaraStelele.jpg',
        title: 'Numără stelele',
        autor: 'Lois Lowry',
        price: 8
    },
    {
        id: 3,
        image: 'img/LaCapatulRaului.jpg',
        title: 'La capătul râului',
        autor: 'Charles Martin',
        price: 9
    },
    {
        id: 4,
        image: 'img/DarulLuiJhonas.jpg',
        title: 'Darul lui Jhonas',
        autor: 'Lois Lowry',
        price: 9
    },
    {
        id: 5,
        image: 'img/Obsessia.jpg',
        title: 'Obsesia',
        autor: 'Nora Roberts',
        price: 8
    },
    {
        id: 6,
        image: 'img/CelePatruVanturi.jpg',
        title: 'Cele patru vânturi',
        autor: 'Kristin Hannah',
        price: 10
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