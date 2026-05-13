const app = Vue.createApp({
    data(){
        return{
            myName: "Ruba Alahmad",
            myAge: 22,
            myAgeIn_5y: 27,
            myImg: "img/vueJs.png"
        };
    },
    methods:{
        favNumber(){
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount("#assignment");