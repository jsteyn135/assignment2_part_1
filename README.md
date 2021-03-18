# assignment2_part_1 : Google book api search  

### what it is?
  a website/web application that allows the user to search for books in the google books api. it includes the ability to search using a keyword and then browsing 20 pages at a       time backwards/forwards. you can see the book's title, authors, publishers, publish date, page count, print type, and thumbnail.  


  
### features?  
✔  removed \[, \], \" from the authors names  
✔  added thumbnail when it exists, and placeholder image when it does not  
✔  added 2 other data fields to the template   
✔  added next/previous page functionality   
✔  previous page button disapears on the first page   
❌ next page button does not disapear when on the last page of all the results (it should probably)(i didnt implement this and did not test it)    
✔  when searching a new keyword after already having searched something it now starts on the correct(first page)   


### how

  for the pages i just use extra properties of currentIndex and lastkeyword. CurrentIndex keesp track of the current index in terms of the number of items per page(ie 0, 20, 40 etc)and then i added 2 methods that increment or decrement the currentindex when a button is pressed and the page automatically updates. i use the lastkeyword to see when the user searches something else so that i can start the user on the first page each time.  I also added a author check method to the display component that removes some of the \[\] \" characters from the author name. I also have it set to display that no authors found if the authors field is undefined. And then i also have a thumbnail check that if there is undefined value for the thumbnail of a book it will instead use a placeholder image that says "no image found" 
