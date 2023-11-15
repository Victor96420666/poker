// Array of image paths
var cardImages = [
    // ... add all the image paths here
];
var cardImages = [];
var suits = ['1', '2', '3', '4'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

suits.forEach(function (suit) {
    ranks.forEach(function (rank) {
        cardImages.push('../image/' + rank + suit + '.png');
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function populateGrid() {
    const gridContainer = document.getElementById('cardGrid');
    gridContainer.innerHTML = ''; // Clear the grid
    shuffleArray(cardImages); // Shuffle the array in place
    cardImages.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('card');
        gridContainer.appendChild(img);
    });
}

// Initial population
populateGrid();

// Event listener for the shuffle button
document.getElementById('shuffleButton').addEventListener('click', populateGrid);
