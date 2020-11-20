function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        };
    };
    rawFile.send(null);

    //https://stackoverflow.com/questions/40954960/read-an-external-local-json-file-into-javascript
};


function buildBody(text) {
    const div = document.getElementById('divContainer');

    if (div && div.parentNode !== null) {
        div.parentNode.removeChild(div)
    } else {
        document.body.innerHTML = '';
        document.body.classList.add('newHtml');
    }

    document.body.innerHTML = text;
}



readTextFile("/languages.json", function(text) {
    try {
        const langBrowser = navigator.language;

        const languages = JSON.parse(text);

        const idText = document.getElementById('text');


        let supportedLang = false;

        languages.forEach(l => {
            if (l.tipo.toLowerCase() === langBrowser.toLowerCase()) {
                idText.innerText = l.texto;
                document.title = l.texto;

                supportedLang = true;
            }
        })

        if (supportedLang === false) window.location.href = '/unknownLanguage.html';

        setTimeout(function() {
            if (!idText.innerText) return buildBody('<h1>' + "Hmmm... For some reason, I can't capture the language of your browser... Reload this page and try again." + '</h1>');
        }, 3000)


    } catch (err) {
        let txt = '<h1>' + 'Ups, it looks like there was an error :/' + '</h1>' + '<p style="font-size: 20px">' + '<br>' + `${err.message} (Code: ${err.code ? undefined : 'Without code'})` + '</br>' + '<p>';

        buildBody(txt);
        document.body.style.color = 'RED';
        document.title = 'Oops, there was an error...';

        console.log(err);

    };

});