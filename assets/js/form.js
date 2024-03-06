// submit button
    // query-selector for the button in the HTML
    // JSON.stringify to turn the user input information into a string from the object
    // localStorage.setItem logic to store the stringified user input data
    // preventDefault functionality to stop the submit button from simply refreshing the page
    // a link in the submit button to take the user to the submissions page
    // some if statements that return errors if the fields are not given the proper inputs

const submitButton = document.querySelector('#submit-button');
const nameInput = document.querySelector('#user-name');
const titleInput = document.querySelector('#user-title');
const contentInput = document.querySelector('#user-content');


submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const blogPost = {
        name: nameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    };
    
    localStorage.setItem('blogPost', JSON.stringify(blogPost));
    window.location.href = "./blog.html"
});