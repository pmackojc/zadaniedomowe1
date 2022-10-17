const books = [
    {
        title:"Władca Pierścieni",
        year: 1991,
        category:"fantasy",
        source:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoblink.com%2Fksiazka%2Fwladca-pierscieni-j-r-r-tolkien-142754&psig=AOvVaw2GKUFyg1jjUBlz0KPGim_1&ust=1666112218339000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNj4tOnd5_oCFQAAAAAdAAAAABAJ",
        alt:"Lord of the ring",
        author:"Tolkien"
    },
    {
        title:"Władca Pierścieni",
        year: 1991,
        category:"fantasy",
        source:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoblink.com%2Fksiazka%2Fwladca-pierscieni-j-r-r-tolkien-142754&psig=AOvVaw2GKUFyg1jjUBlz0KPGim_1&ust=1666112218339000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNj4tOnd5_oCFQAAAAAdAAAAABAJ",
        alt:"Lord of the ring",
        author:"Tolkien"
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
        title:"Władca Pierścieni",
        year: 1991,
        category:"fantasy",
        source:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoblink.com%2Fksiazka%2Fwladca-pierscieni-j-r-r-tolkien-142754&psig=AOvVaw2GKUFyg1jjUBlz0KPGim_1&ust=1666112218339000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNj4tOnd5_oCFQAAAAAdAAAAABAJ",
        alt:"Lord of the ring",
        author:"Tolkien"
    },
    {
        title:"Władca Pierścieni",
        year: 1991,
        category:"fantasy",
        source:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoblink.com%2Fksiazka%2Fwladca-pierscieni-j-r-r-tolkien-142754&psig=AOvVaw2GKUFyg1jjUBlz0KPGim_1&ust=1666112218339000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNj4tOnd5_oCFQAAAAAdAAAAABAJ",
        alt:"Lord of the ring",
        author:"Tolkien"
    },
    {
        title:"Władca Pierścieni",
        year: 1991,
        category:"fantasy",
        source:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoblink.com%2Fksiazka%2Fwladca-pierscieni-j-r-r-tolkien-142754&psig=AOvVaw2GKUFyg1jjUBlz0KPGim_1&ust=1666112218339000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNj4tOnd5_oCFQAAAAAdAAAAABAJ",
        alt:"Lord of the ring",
        author:"Tolkien"
    },
    {
        title:"Władca Pierścieni",
        year: 1991,
        category:"fantasy",
        source:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoblink.com%2Fksiazka%2Fwladca-pierscieni-j-r-r-tolkien-142754&psig=AOvVaw2GKUFyg1jjUBlz0KPGim_1&ust=1666112218339000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNj4tOnd5_oCFQAAAAAdAAAAABAJ",
        alt:"Lord of the ring",
        author:"Tolkien"
    },
    {
        title:"Władca Pierścieni",
        year: 1991,
        category:"fantasy",
        source:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoblink.com%2Fksiazka%2Fwladca-pierscieni-j-r-r-tolkien-142754&psig=AOvVaw2GKUFyg1jjUBlz0KPGim_1&ust=1666112218339000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNj4tOnd5_oCFQAAAAAdAAAAABAJ",
        alt:"Lord of the ring",
        author:"Tolkien"
    },
    {
        title:"Władca Pierścieni",
        year: 1991,
        category:"fantasy",
        source:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoblink.com%2Fksiazka%2Fwladca-pierscieni-j-r-r-tolkien-142754&psig=AOvVaw2GKUFyg1jjUBlz0KPGim_1&ust=1666112218339000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNj4tOnd5_oCFQAAAAAdAAAAABAJ",
        alt:"Lord of the ring",
        author:"Tolkien"
    },
    {
        title:"Władca Pierścieni",
        year: 1991,
        category:"fantasy",
        source:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwoblink.com%2Fksiazka%2Fwladca-pierscieni-j-r-r-tolkien-142754&psig=AOvVaw2GKUFyg1jjUBlz0KPGim_1&ust=1666112218339000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNj4tOnd5_oCFQAAAAAdAAAAABAJ",
        alt:"Lord of the ring",
        author:"Tolkien"
    },
]

const list = document.querySelector('#viewbooks');

const generateBooks = () => {
    list.innerHTML ='';
    books.forEach((slide) =>{
        list.innerHTML += `
        <li>
            <p>${slide.title}</p>
            <p>${slide.year}</p>
            <p>${slide.category}</p>
            <p>${slide.author}</p>
            <img src=${slide.source} alt=${slide.alt} class="slider__photo"/>  
        </li>`
        
    })
}

generateBooks();