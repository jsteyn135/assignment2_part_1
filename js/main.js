const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            currentIndex: 0,
        }

    },
    methods: {
        searchGoogleBooks(startIndex=null) {
            console.log("its working! the currentIndex is:");
            console.log(this.currentIndex);
            /*if(startIndex == null || startIndex == 0){
                startIndex = 0;
                this.currentIndex = 0;
            }*/
            fetch('https://www.googleapis.com/books/v1/volumes?q=' +this.keyword + "&startIndex=" +this.currentIndex+"&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json);
                
                //var nextbutton = document.getElementById("nextbutton");
                //nextbutton.classList.remove("invisible");
                
                
                    
                }//end of searchgooglebooks
                ,
        testFunc(){
            console.log("its the very nice word test function hello");
            this.currentIndex +=20;
            // then i need to update the html/display
            this.searchGoogleBooks();

            
        }// end of testFunc
        }// end of methods


})









