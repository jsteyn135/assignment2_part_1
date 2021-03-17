const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            currentIndex: 0,
            lastkeyword: '',
            
        }

    },
    methods: {
        searchGoogleBooks(startIndex=null) {
            
            if(this.lastkeyword != this.keyword){
                this.currentIndex = 0;// when the user searches something else it resets the index
            }
            
            this.lastkeyword = this.keyword;
            console.log("its working! the currentIndex is:");
            console.log(this.currentIndex);
            
            fetch('https://www.googleapis.com/books/v1/volumes?q=' +this.keyword + "&startIndex=" +this.currentIndex+"&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json);
                
                
                }//end of searchgooglebooks
                ,
        nextFunc(){
            
            this.currentIndex +=20;
            
        }// end of nextFunc
        ,
        prevFunc(){
            this.currentIndex -=20;            
        }// end of prevFunc
        }// end of methods


})









