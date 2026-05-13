const app = Vue.createApp({
    data(){
        return{
            firstName: '',
            secondName:'',
        }
    },
    methods:{
        showAlert(){
         alert('Hello from my alert');
        },
        setFirstName(){
            this.firstName = event.target.value;
        },
        setSecondName(){
            this.secondName = event.target.value;
        }
    }
});

app.mount("#assignment");