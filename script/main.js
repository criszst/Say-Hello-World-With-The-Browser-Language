function reloadBody(text) {
    const div = document.getElementById('divContainer')
    div.parentNode.removeChild(div)

    document.body.innerHTML = text


    document.body.style.color = 'WHITE'

    document.body.style.textAlign = 'center'

    document.body.style.height = '350px'

    document.body.style.marginTop = '300px'

    document.body.style.fontSize = '100px'
}

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
}


readTextFile("../languages.json", function(text) {
    try {

        const langBrowser = navigator.language
            //  const activeLangs = navigator.languages

        const languages = JSON.parse(text);

        const idText = document.getElementById('text')
        const langDetectada = document.getElementById('langDetectada');

        //  const navigatorLanguages = document.getElementById('navigatorLanguages');

        let lang = false

        languages.forEach(l => {
            if (l.tipo == langBrowser) {

                idText.innerText = l.texto
                langDetectada.innerText = `Say "Hello World" with the browser language | ${l.tipo}`
                lang = true

                // navigatorLanguages.innerText = `${activeLangs.join('\n')}`

            }
        })

        if (lang == false) return reloadBody('<h1>' + 'Infelizmente, essa linguagem do seu navegador ainda não é suportada. :(' + '</h1>');


        if (!idText.innerText) return reloadBody('<h1>' + 'Hmmm... Por algum motivo eu não consegui capturar a sua linguagem do navegador... Tente recarregar esta página.' + '</h1>');


    } catch (err) {
        // Podemos adicionar mais uma linha no json para mudar essa frase de acordo com a linguagem do navegador...
        // mas depois eu tento fazer isso, deu uma preguiça agora

        let txt = '<h2>' + `Código: ${err.code ? undefined : 'Sem código'}` + '</h2>' + '<h1>' + '<br>' + 'Wups, parece que ocorreu algum erro! :/' + '</br>' + '<h1>'

        reloadBody(txt)
        document.body.style.color = 'RED'

        console.log(err)
    }

});