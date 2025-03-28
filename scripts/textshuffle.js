$(document).ready(function () {
    $.getJSON('./words.json', function (data) {
        const wd = data.words;
        let wdIdx = 0;

        function updateWd() {
            const wdEl = $('#words');
            wdEl.fadeOut(500, function () {
                wdEl.text(wd[wdIdx]);
                wdEl.fadeIn(500);
            });

            wdIdx = (wdIdx + 1) % wd.length;
        }

        setInterval(updateWd, 3000);
    });

    $.getJSON('./locations.json', function (data) {
        const locs = data.locations;
        let locIdx = 0;

        function updateLoc() {
            const locEl = $('#location');
            locEl.fadeOut(500, function () {
                locEl.text(locs[locIdx]);
                locEl.fadeIn(500);
            });

            locIdx = (locIdx + 1) % locs.length;
        }

        setInterval(updateLoc, 3000);
    });
});
