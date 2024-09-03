// Array of 100 colors to cycle through
const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6', '#FF6F33', '#33FFF0', '#F0FF33',
    '#FF3333', '#33FF6F', '#6F33FF', '#33F0FF', '#FF33A2', '#A2FF33', '#FF8C33', '#8CFF33',
    '#33FF8C', '#8C33FF', '#FF338C', '#8CFF8C', '#FF5733', '#33FF57', '#FF5733', '#33FF6F',
    '#FF336F', '#6F33FF', '#FF33A2', '#A233FF', '#F0F033', '#33F0F0', '#F0A233', '#33A2F0',
    '#F0F033', '#A2F0F0', '#F0A233', '#33F0A2', '#FF5733', '#33F0FF', '#FF8C33', '#8CFF33',
    '#FF338C', '#33FF8C', '#8C33F0', '#FF8CFF', '#F0FF8C', '#8C33FF', '#F0A2F0', '#FF5733',
    '#33FF6F', '#F0FF33', '#A2F0A2', '#FF33FF', '#8CFF8C', '#F0FF8C', '#33F0FF', '#F0A2A2',
    '#33FF8C', '#8C33F0', '#FF8C33', '#33A2FF', '#F0F033', '#A2FF8C', '#8C33FF', '#FF5733',
    '#33FF57', '#FF8C8C', '#8CFF8C', '#FF33A2', '#33F0F0', '#A2FF33', '#8CFF33', '#F0A2FF',
    '#FF5733', '#33FF6F', '#FF336F', '#6F33FF', '#FF33A2', '#A233FF', '#F0F033', '#33F0F0',
    '#F0A233', '#33A2F0'
];

// Get the button element
const button = document.getElementById('colorButton');

// Keep track of the current color index
let currentColorIndex = 0;

// Function to change the background color
function changeColor() {
    // Update the background color
    document.body.style.backgroundColor = colors[currentColorIndex];
    
    // Move to the next color in the array
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Add event listener to the button
button.addEventListener('click', changeColor);
