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