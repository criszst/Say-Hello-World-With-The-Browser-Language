function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);

    //https://stackoverflow.com/questions/40954960/read-an-external-local-json-file-into-javascript
}


function buildBody(text) {
    const div = document.getElementById('divContainer')

    if (div && div.parentNode !== null) {
        div.parentNode.removeChild(div)
    } else {
        document.body.innerHTML = ''
        document.body.style.backgroundColor = '#0a2a43'
    }

    document.body.innerHTML = text


    document.body.style.color = 'WHITE'

    document.body.style.textAlign = 'center'

    document.body.style.height = '350px'

    document.body.style.marginTop = '300px'

    document.body.style.fontSize = '100px'

}



readTextFile("languages.json", function(text) {
    try {
        const langBrowser = navigator.language

        const languages = JSON.parse(text)

        const idText = document.getElementById('text')


        let supportedLang = false

        languages.forEach(l => {
            if (l.tipo === langBrowser) {
                idText.innerText = l.texto
                document.title = l.texto

                supportedLang = true
            }
        })

        if (supportedLang === false) idText.innerText = 'Hello World!'

        if (!idText.innerText) return buildBody('<h1>' + "Hmmm... For some reason, I can't capture the language of your browser... Reload this page and try again." + '</h1>');


    } catch (err) {
        let txt = '<h1>' + 'Ups, it looks like there was an error :/' + '</h1>' + '<p style="font-size: 20px">' + '<br>' + `${err.message} (Code: ${err.code ? undefined : 'Without code'})` + '</br>' + '<p>'

        buildBody(txt)
        document.body.style.color = 'RED'
        document.title = 'Oops, there was an error...'

        console.log(err)

    }

});