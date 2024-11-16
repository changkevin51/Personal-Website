$(document).ready(function () {
    // Fetch the words from words.json
    $.getJSON('./words.json', function (data) {
        const words = data.words; // Extract the array of words
        let index = 0; // Current word index

        // Function to update the word
        function updateWord() {
            const wordElement = $('#words');
            wordElement.fadeOut(500, function () {
                // Update the text after fading out
                wordElement.text(words[index]);
                wordElement.fadeIn(500);
            });

            // Move to the next word in the array
            index = (index + 1) % words.length;
        }

        // Start the cycling effect
        setInterval(updateWord, 3000); // Change every 3 seconds
    });
});
