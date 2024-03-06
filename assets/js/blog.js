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

// back button
    // a query-selector for the back button in HTML
    // an event listener for clicks on the button
    // a link to the form submission page attached to the button