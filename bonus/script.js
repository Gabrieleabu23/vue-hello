const {createApp }=Vue;

createApp({
    data(){
        return{
            messaggio:'Hello Vue',
            immagineClass:'immagine',
            immagine:'https://images.unsplash.com/photo-1632882765546-1ee75f53becb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHRtbHxlbnwwfHwwfHx8MA%3D%3D',
            immagineAlt:'Immagine html gialla'
        }
    }
}).mount('#saluto');