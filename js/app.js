// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Vue.config.devtools = true;
const app = new Vue (
    {
        el: '#root',
        data: {
            slides: [
                {
                    image:'img/01.jpg',
                    title:'Svezia',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image:'img/02.jpg',
                    title:'Svizzera',
                    text:'Lorem ipsum'
                },
                {
                    image:'img/03.jpg',
                    title:'Gran Bretagna',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image:'img/04.jpg',
                    title:'Germania',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
                {
                    image:'img/05.jpg',
                    title:'Paradise',
                    text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }                
            ],
            currentSlide: 0                                
        },

        methods: {
            // Slide precedente
            prevSlide(){
                this.currentSlide --; // precedente

                // se sono alla prima, mi posiziono sull'ultima
                if(this.currentSlide < 0){
                    this.currentSlide = this.slides.length - 1; // ultima
                }
                // console.log('Prev', this.currentSlide);
            },

            // Slide successiva
            nextSlide(){
                this.currentSlide ++; // successiva

                // se sono all'ultima, mi posiziono sulla prima
                if(this.currentSlide > this.slides.length - 1){
                    this.currentSlide = 0;
                }
                // console.log('Next', this.currentSlide);
            }
        }
    }
)

// function changeActive(index) {

//     // togliamo la classe active dall'item
//     document.querySelector('.item.active').classList.remove('active');
//     document.querySelector('.thumb.active').classList.remove('active');

//     // aggiungiamo la classe active all'item corrente
//     document.querySelectorAll('.item')[index].classList.add('active');
//     document.querySelectorAll('.thumb')[index].classList.add('active');
// }

// // creiamo le slides
// function createItems() {
//     for (let i = 0; i < data.length; i++) {
//         let elem = data[i];

//         // aggiungiamo la classe active alla prima slide (currentSlide = 0)
//         let firstActive = '';
//         if (i == currentSlide) {
//             firstActive = 'active';
//         }

//         itemsContainer.innerHTML +=
//         `<div class="item ${firstActive}">
//             <img src="${elem.image}" alt="${elem.title}">
//             <div class="text">
//                 <h3>${elem.title}</h3>
//                 <p>${elem.text}</p>
//             </div>
//         </div>`;
//     }
// }

// // creiamo le thumbnails
// function createThumbnails() {

//     for (let i = 0; i < data.length; i++) {
//         let elem = data[i];

//         // aggiungiamo la classe active alla prima thumbnail (currentSlide = 0)
//         let firstActive = '';
//         if (i == currentSlide) {
//             firstActive = 'active';
//         }

//         thumbsContainer.innerHTML +=
//             `<div class="thumb ${firstActive}">
//                 <img src="${elem.image}" alt="${elem.title}">
//             </div>`;
//     }
// }