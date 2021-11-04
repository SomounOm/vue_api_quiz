new Vue({
    
    el: "#app",
    data:{
        quiz: [],
        users: [],
        author_id:null,
        title:'',
        body:'',
    
    },
    methods: {
        getquiz(){
            let url = "http://localhost:3000/api/author"
            axios.get(url).then(response =>{
                this.quiz = response;
                console.log(this.quiz)

            })
        },
        createquiz() {
            let url ="http://localhost:3000/api/author"
            let data = {author_id: parseInt(this.author_id) , title: this.title , body: this.body }
            axios.post(url,data).then(() =>{
                this.getquiz();
        
            })

        },
       removeTask:function(item){
           this.quiz.splice(this.item, 1);
       }
    },
    mounted() {
        this.getTodo();
        
    },

})