// a toggle button for light/dark functionality
    // a query-selector for a toggle button in the HTML
    // an event listener for clicks on the toggle
    // if statements for switching between light and dark modes
const toggleSlider = document.querySelector('#toggle-slider')

let mode = 'light';

toggleSlider.addEventListener('click', function {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'light');
    }
    else {
        mode = 'dark';
        container.setAttribute('class', 'dark')
    }
})

// a series of blog posts sorted into cards
    // a getItem method for grabbing the user input data from the form
    // JSON parsing for the getItem to change the data into a usable object
    // logic for automatically populating the blog cards with the parsed user input data
const blogPostAuthor = document.body.children[1].children[0].children[2];
const blogPostContent = document.body.children[1].children[0].children[1];
const blogPostTitle = document.body.children[1].children[0].children[0];
const storedBlogPost = JSON.parse(localStorage.getItem('blogPost')) || [];

blogPostAuthor.textContent = `Posted by: ${storedBlogPost.name}`;
blogPostContent.textContent = `${storedBlogPost.content}`;
blogPostTitle.textContent = `${storedBlogPost.title}`;





