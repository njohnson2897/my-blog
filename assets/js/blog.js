// a toggle button for light/dark functionality
    // a query-selector for a toggle button in the HTML
    // an event listener for clicks on the toggle
    // if statements for switching between light and dark modes
const toggleSlider = document.querySelector('#toggle-slider')
const container = document.querySelector('.container');

let mode = 'light';

toggleSlider.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
    else {
        mode = 'light';
        container.setAttribute('class', 'light')
    }
})

// a series of blog posts sorted into cards
    // a getItem method for grabbing the user input data from the form
    // JSON parsing for the getItem to change the data into a usable object
    // logic for automatically populating the blog cards with the parsed user input data
const storedPost = JSON.parse(localStorage.getItem('blogPost'));


for (let i=0; i<storedPost.length; i++) {
    document.body.children[1].children[i].children[0].textContent = storedPost[i].title
};

for (let i=0; i<storedPost.length; i++) {
    document.body.children[1].children[i].children[1].textContent = storedPost[i].content
};

for (let i=0; i<storedPost.length; i++) {
        document.body.children[1].children[i].children[2].textContent = `Posted by: ${storedPost[i].name}`
};
       





