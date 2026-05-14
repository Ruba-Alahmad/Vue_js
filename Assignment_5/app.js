const app = Vue.createApp({
    data(){
        return{
            tasks:[],
            input: '',
            taskVisible: true,
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.input);
            this.input = '';
        },
        taskVisibility(){
            this.taskVisible = !this.taskVisible
        }
    
    },
    computed:{
        buttonCaption(){
            return this.taskVisible ? 'Hide List' : 'Show List';
        }
    }
    
});

app.mount("#assignment")