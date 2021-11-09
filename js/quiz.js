new Vue({
    el: "#app",
    data: {
        quiz: [],
        author_id: null,
        title: '',
        body: '',
        updateId:0,
        Updatefound:false

    },
    methods: {
        getquiz() {
            let url = "http://localhost:3000/api/book"
            axios.get(url).then(response => {
                this.quiz = response.data;
                console.log(this.quiz)
              
            })
        },
        createquiz() {
            let url = "http://localhost:3000/api/book"
            let data = {
                author_id: parseInt(this.author_id),
                title: this.title,
                body: this.body
         
            }
            axios.post(url,data).then(response => {
                this.quiz = response.data;
              
            })

        },
        updatedaction(book){
            this.updateId = book.id
            this.author_id = book.author_id
            this.title = book.title
            this.body = book.body
            this.Updatefound = true
           
        },
        updatedquize(){
            let url = "http://localhost:3000/api/book/";
            let data = {
                author_id: parseInt(this.author_id),
                title: this.title,
                body: this.body,
         

            }
            axios.put(url+this.updateId,data).then(res=>{
                this.quiz = res.data;
            })
            this.Updatefound = false;
            this.author_id = null;
            this.title = "";
            this.body = "";
        },

        removeTask: function (book) {
            let id = book.id;
            let url = "http://localhost:3000/api/book/";
            axios.delete(url+id).then(res => {
                this.quiz = res.data;

            })
        }
    },
    mounted() {
        this.getquiz();

    },

})