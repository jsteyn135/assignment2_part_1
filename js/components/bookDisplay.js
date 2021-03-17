app.component('book-display', {
    props: {
        book: {
            type: String,
            requird: true,
            default: null

        }
    },
    template:
        /*html*/
        
        `
        <ul class="col-sm-12 col-md-6 col-xl-4">
         <a class="list-group-item list-group-item-action active" href="this.bookObj.selfLink">{{this.bookObj.volumeInfo.title}}</a>
        <li class="list-group-item">{{this.authorCheck}}</li>
        <li class="list-group-item"> {{this.bookObj.volumeInfo.publisher}}, {{this.bookObj.volumeInfo.publishedDate}}</li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.pageCount != undefined">page count: {{this.bookObj.volumeInfo.pageCount}}</li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.printType != undefined">print Type: {{this.bookObj.volumeInfo.printType}}</li>
        <li><img v-show="this.bookObj.volumeInfo.imageLinks.thumbnail != undefined" :src="this.bookObj.volumeInfo.imageLinks.thumbnail"></li>
        </ul>`,

    computed: {
        bookObj() {
            if (this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        },
        authorCheck(){
            var charactersArray = ["\[","\]","\"","\""];
            var theAuthors = JSON.stringify(this.bookObj.volumeInfo.authors);
            for(let i=0;i<charactersArray.length;++i){
                theAuthors = theAuthors.replace(charactersArray[i],"");
                
            }//end of for
            return theAuthors;
        },//end of author check
        

    }

})



