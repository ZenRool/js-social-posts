// Variabili
const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    }
];
// Nomi e cognomi per generare casualmente l'autore
const names = ["Phil" , "Lorenzo", "Olga" , "Carlo" , "Nicola" , "Karolina" , "Pinco"];
const lastnames = ["Mangione" , "Papperini" , "Demina" , "Lollobrigida" , "Sarli" , "Tymoszuk" ,"Pallino"]
const container = document.getElementById("container"); // container Dom
// Arrow funcion
// dato un elemento appendilo nel container 
const appendContainer = element => container.append(element);

// Main 

// Generazione post casuali
for (let id = 2 ; id <= 20 ; id++ ) {
    const date = new Date;
    const post = {
        id,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        author: {
            name: `${names[getRandomIntInclusive(0, names.length - 1)]} ${(lastnames[getRandomIntInclusive(0, lastnames.length - 1)])}`
        },
        likes: getRandomIntInclusive(0, 100),
        created: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
    }
    // 2 terzi di post hanno un immagine 
    if (getRandomIntInclusive(0, 2) !== 2 ) {
        post.media = `https://unsplash.it/600/300?image=${getRandomIntInclusive(30, 96)}`;   
    }
    // 3 quarti hanno una immagine di profilo 
    if (getRandomIntInclusive(0, 3) !== 3 ) {
        post.author.image = `https://unsplash.it/300/300?image=${getRandomIntInclusive(10, 29)}`;   
    }
    posts.push(post);
}
// Per ogni caratteristica di post genera un elemento dom che appende nel container
posts.forEach(element => appendContainer(getPostByObj(element)));
// Fine del main

// Functions
// Dato un oggetto post restituisco il dom inerente
function getPostByObj(postMeta) {
    const post = document.createElement("div");
    const authorName = postMeta.author.name;
    post.classList.add("post");
    post.innerHTML = `
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src=" ${"image" in postMeta.author ? `${postMeta.author.image}` : `https://dei.gsu.edu/files/2021/04/question-mark-information-icon-300x300.png`} " alt= "${authorName}">                     
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${authorName}</div>
                <div class="post-meta__time">${postMeta.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">
        ${postMeta.content}
    </div>
    ${"media" in postMeta ? `
    <div class="post__image">
        <img src="${postMeta.media}" alt="">
    </div>
    ` : ``}

    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${postMeta.id}" class="js-likes-counter">
                ${postMeta.likes}</b> persone
            </div>
        </div> 
    </div>   
    `;
    post.querySelector(".likes__cta").addEventListener('click', getLike);
    
    return post;
}
function getLike() {
    const parent = this.parentElement;
    const counter = parent.querySelector(".js-likes-counter");
    const tog = this.getElementsByTagName("a")[0].classList.toggle("like-button--liked");
    // console.log(tog); senza sapere ne leggere ne scrivere element.toggle restituisce true o false

    // se true allora +1 altrimenti -1 
    counter.innerHTML = tog ? parseInt(counter.innerHTML) + 1 : parseInt(counter.innerHTML) - 1 ;
}
// Funzione per generare casualmente i numeri  
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



