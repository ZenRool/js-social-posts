
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
const names = ["Phil" , "Lorenzo", "Olga" , "Carlo" , "Nicola" , "Karolina"];
const lastnames = ["Mangione" , "Papperini" , "Demina" , "Lollobrigida" , "Sarli" , "Tymoszuk"]

// posts 
// id: n + 1
// content: lorem testo del post
// author: Nome e foto autore foto del profilo
// created: data in formato americano (mm-gg-yyyy: es 05-03-2022)
// likes: numero di likes
// media: non tutti i post devono avere l'immagine

// immagine -> https://unsplash.it/300/300?image=<id>

        // <div class="post">
        //     <div class="post__header">
        //         <div class="post-meta">                    
        //             <div class="post-meta__icon">
        //                 <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
        //             </div>
        //             <div class="post-meta__data">
        //                 <div class="post-meta__author">Phil Mangione</div>
        //                 <div class="post-meta__time">4 mesi fa</div>
        //             </div>                    
        //         </div>
        //     </div>
        //     <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
        //     <div class="post__image">
        //         <img src="https://unsplash.it/600/300?image=171" alt="">
        //     </div>
        //     <div class="post__footer">
        //         <div class="likes js-likes">
        //             <div class="likes__cta">
        //                 <a class="like-button  js-like-button" href="#" data-postid="1">
        //                     <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        //                     <span class="like-button__label">Mi Piace</span>
        //                 </a>
        //             </div>
        //             <div class="likes__counter">
        //                 Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
        //             </div>
        //         </div> 
        //     </div>            
        // </div>

// console.log((new Date).getDay() , (new Date).getMonth(), (new Date).getFullYear()); tipo così la data

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
        created: `${date.getFullYear}-${date.getMonth}-${date.getDay}`
    }
    // 2 terzi di post hanno un immagine 
    if (getRandomIntInclusive(0, 2) !== 2 ) {
        post.media = `https://unsplash.it/600/300?image=${getRandomIntInclusive(30, 200)}`;   
    }
    // 3 quarti hanno una immagine di profilo 
    if (getRandomIntInclusive(0, 3) !== 3 ) {
        post.author.image = `https://unsplash.it/300/300?image=${getRandomIntInclusive(10, 29)}`;   
    }
    posts.push(post);
}

// Funzione per generare casualmente i numeri  
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
