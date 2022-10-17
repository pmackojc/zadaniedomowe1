const books = [
    {
        title:"Harry Potter",
        year: 1994,
        category:"fantasy",
        source:"https://m.media-amazon.com/images/I/5128SJqk8bL._SY344_BO1,204,203,200_QL70_ML2_.jpg",
        alt:"Harry Potter",
        author:"Rowling"
    },
    {
        title:"NOS4A2",
        year: 2013,
        category:"horror",
        source:"https://subterraneanpress.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/n/o/nos4a2-web.jpg",
        alt:"Nosferatu",
        author:"Joe Hill"
    },
    {
        title:"Władca Pierścieni",
        year: 1991,
        category:"fantasy",
        source:"https://woblink.com/image-cache/sellable_cover/products/images/5fb64c8c94485.jpeg",
        alt:"Lord of the ring",
        author:"Tolkien"
    },
    {
        title:"Księgi krwi",
        year: 1985,
        category:"horror",
        source:"https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/9/1/9199906688591.jpg",
        alt:"Books of blood",
        author:"Barker"
    },
    {
        title:"Sfora",
        year: 2020,
        category:"kryminał",
        source:"https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/4/7/4799906678747.jpg",
        alt:"Sfora",
        author:"Piotrowski"
    },
    {
        title:"Decimus Fate",
        year: 2022,
        category:"fantasy",
        source:"https://ecsmedia.pl/c/decimus-fate-i-talizman-marzen-tom-1-w-iext115559636.jpg",
        alt:"Decimus Fate",
        author:"Flannery"
    },
    {
        title:"Pani Cisza",
        year: 2021,
        category:"fantasy",
        source:"https://s.lubimyczytac.pl/upload/books/4970000/4970964/905246-352x500.jpg",
        alt:"Lady silence",
        author:"Saulski"
    },
    {
        title:"Outpost",
        year: 2020,
        category:"sci fi",
        source:"https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/4/3/4399906747343.jpg",
        alt:"Outpost",
        author:"Glukovsky"
    },
    {
        title:"Zew Cthulu",
        year: 1991,
        category:"horror",
        source:"https://ecsmedia.pl/c/zew-cthulhu-w-iext115601420.jpg",
        alt:"Cthulu",
        author:"Lovecraft"
    },
    {
        title:"Topiel",
        year: 2020,
        category:"thriller",
        source:"https://www.swiatksiazki.pl/media/catalog/product/cache/eaf55611dc9c3a2fa4224fad2468d647/5/x/5x99906666050.jpg",
        alt:"Topiel",
        author:"Ćwiek"
    },
]

const list = document.querySelector('#viewbooks');

let activeBook = 0;

const generateBooks = () => {
    list.innerHTML ='';
    books.forEach((slide, index) =>{
        list.innerHTML += `
        <li class="d-none ${index === activeBook ? 'active': ''}">
            <p class="book_listTitle">Tytuł: ${slide.title}</p>
            <p>Rok napisania: ${slide.year}</p>
            <p>Kategoria: ${slide.category}</p>
            <p>Autor: ${slide.author}</p>
            <img src=${slide.source} alt=${slide.alt} class="book__photo"/>  
        </li>`
        
    })
}

generateBooks();