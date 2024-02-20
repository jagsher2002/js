document.addEventListener("DOMContentLoaded", function() {
    // Selecting all buttons and content lists
    const buttons = document.querySelectorAll('.cell button');
    const contentLists = document.querySelectorAll('.cell .content');
    // Object to store current index of each content list
    let currentIndex = {};

    // Adding click event listeners to buttons
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Getting the list of words associated with the clicked button
            const list = contentLists[index].textContent.trim().split(' ');
            // Determining the next index for the selected word
            currentIndex[index] = (currentIndex[index] || 0) % list.length;
            // Displaying the selected word in the output area
            document.getElementById('Output').textContent = list[currentIndex[index]];
            // Incrementing the index for the next click
            currentIndex[index]++;
        });
    });

    // Selecting submit and random story buttons
    const submitBtn = document.getElementById('submit');
    const randomStoryBtn = document.getElementById('randomstory');

    // Adding event listeners to submit and random story buttons
    submitBtn.addEventListener('click', generateStory);
    randomStoryBtn.addEventListener('click', generateRandomStory);

    // Function to generate a story based on current selections
    function generateStory() {
        const selectedWords = Array.from(contentLists).map((contentList, index) => {
            const words = contentList.textContent.trim().split(' ');
            // Getting the word at the current index
            return words[currentIndex[index] - 1];
        });
        // Displaying the generated story
        document.getElementById('Output').textContent = selectedWords.join(' ');
    }

    // Function to generate a random story
    function generateRandomStory() {
        const selectedWords = Array.from(contentLists).map(contentList => {
            const words = contentList.textContent.trim().split(' ');
            // Selecting a random word from the list
            return words[Math.floor(Math.random() * words.length)];
        });
        // Displaying the generated random story
        document.getElementById('Output').textContent = selectedWords.join(' ');
    }
});
