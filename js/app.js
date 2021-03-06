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
                this.resetCycle();
            },

            // Slide successiva
            nextSlide(){
                this.currentSlide ++; // successiva

                // se sono all'ultima, mi posiziono sulla prima
                if(this.currentSlide > this.slides.length - 1){
                    this.currentSlide = 0;
                }
                // console.log('Next', this.currentSlide);
                this.resetCycle();
            },

            // Parte al clic di una delle thumb: imposta currentSlide uguale all'indice, saltando le immagini intermedie e mostrando direttamente l'immagine desiderata 
            changeImg(index){
                this.currentSlide = index;
            },

            // Parte al mouseover dell'immagine principale: ferma il ciclare delle immagini ogni 3sec
            stopCycle() {
                clearInterval(this.playNext);
            },
    
            // Parte al mouseleave dell'immagine principale: ricomincia il ciclare delle immagini ogni 3sec
            restartCycle() {
                setInterval( this.playNext = setInterval(() => {
                    this.nextSlide();
                }, 3000))
            },

            // Resetta il timer quando l'utente interagisce con le freccette dello slider
            resetCycle() {
                this.stopCycle();
                this.restartCycle();
            }
        },

        // Funzione integrata in VueJS, da mettere fuori methods
        mounted() {   
            // cicla le immagini ogni 3 sec  
            this.playNext = setInterval( () => {
                this.nextSlide();
            }, 3000)
        }
    }
)