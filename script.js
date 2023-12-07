const {createApp }=Vue;

createApp({
    data(){
        return{
            messaggio:'Hello Vue'
        }
    }
}).mount('#saluto');