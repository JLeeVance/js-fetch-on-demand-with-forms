const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit' , (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID')
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then((response) => response.json())
            .then((data) => {
                const titleArea = document.querySelector("section#movieDetails h4")
                const summaryArea = document.querySelector("section#movieDetails p")
                titleArea.textContent = data.title;
                summaryArea.textContent = data.summary;
            })
    })
}

document.addEventListener('DOMContentLoaded', init);


//all code related to manipulating the dom needs to be within our function of init
//because it will be triggered IMMEDIATLY when the DOMContentLoaded event is triggerd
//which just so happens to be when the page is loaded

//created variable init, (initialization), and added an event listner to it
//The event listener took in the event 'DOMContentLoaded', and we called our function
//assignment init.

//we 'grabbed' the input form, remember this is a tag in our HTML that
//has nested tags. We can verify we got the right thing by console loggin it

//we added an event listener to the form, which is 'submit'. Form's operate
//off of 'submit' events. BUT that event of 'submit' has a default behavior
//the default behavior is to refresh the page, so we had to prevet that.

//we know we can access the event via console.log('event') - because the event listener
//will automatically trigger it, 'returning' and event.
//The event object (it is an object containing info) has the information we need to log

//Access the input from the event
//   event.target; -- event.target.children --
//This returned an HTML collection with 3 indexes. (an array)
//we saw via dev tools in browser that when we highlight over them, we needed the 
//second index. so -- event.target.children[1] (indexes start with 0)
//This code would 'return' the value we put in, we need to console.log to verify

//Accessing the input directly
//The <input> tag we needed also had an ID, so we could get it that way
// const input = document.querySelector('input#searchByID')
//       we assigned the input tag we needed to a variable
//      console.log ( input.value) would show that our entered text is being stored

//in this example we happen to know that the each object within the movies API
//had an ID, we learned that by console.logging the data returned from our fetch
//using string interpolation, we can modify the fetch command to take us to the API data
//needed by interpolating the user input (id number) into the fetch URL command.
//NOTE the backticks are around the whole URL not just the interpolation part

//NOW we need to add it to the page in the existing html <h4> <p>
//We will go back and work it into the last .then function
//first we grab the tags w want to use
//   document.querySelector(section#movieDetails h4)
