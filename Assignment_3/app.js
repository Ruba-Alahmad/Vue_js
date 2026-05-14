const app = Vue.createApp({
    data(){
        return{
            result: 0,
        }
    },
    methods:{
        add(num){
            this.result += num;
        }
    },
    computed:{
        outputResult(){
            if(this.result < 37){
                return "Not ther yet";
            }
            else{
                return "Too much!";
            }
        }
    },
    watch:{
        result(){
            setTimeout(() =>{
                this.result = 0;
            } , 5000);
    }}
});

app.mount("#assignment")