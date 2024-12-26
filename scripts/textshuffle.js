$(document).ready(function () {
    // Shuffle Words
    $.getJSON('./words.json', function (data) {
        const words = data.words;
        let wordIndex = 0;

        function updateWord() {
            const wordElement = $('#words');
            wordElement.fadeOut(500, function () {
                wordElement.text(words[wordIndex]);
                wordElement.fadeIn(500);
            });

            wordIndex = (wordIndex + 1) % words.length;
        }

        setInterval(updateWord, 3000);
    });

    // Shuffle Locations
    $.getJSON('./locations.json', function (data) {
        const locations = data.locations;
        let locationIndex = 0;

        function updateLocation() {
            const locationElement = $('#location');
            locationElement.fadeOut(500, function () {
                locationElement.text(locations[locationIndex]);
                locationElement.fadeIn(500);
            });

            locationIndex = (locationIndex + 1) % locations.length;
        }

        setInterval(updateLocation, 3000);
    });
});
