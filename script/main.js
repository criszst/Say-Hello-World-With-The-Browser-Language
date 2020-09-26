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

        const languages = JSON.parse(text);

        const idText = document.getElementById('text')
        const langDetectada = document.getElementById('langDetectada');


        languages.forEach(l => {
            if (l.tipo == langBrowser) {

                idText.innerText = l.texto
                langDetectada.innerText = `Say "Hello World" with the browser language | ${l.tipo}`

            } else if (!l.tipo == langBrowser) {

                idText.innerText = 'Infelizmente, essa linguagem do seu navegador ainda não é suportada. :('
                langDetectada.parentNode.removeChild(langDetectada)

            }
        })

        if (!idText.innerText) {

            <<
            << << < HEAD
            idText.innerText = 'Hmmm... Por algum motivo eu não consegui capturar a sua linguagem do navegador... Talvez a sua linguagem ainda não seja suportada... :/'
            langDetectada.parentNode.removeChild(langDetectada) ===
                === =
                idText.innerText = 'Hmmm... Por algum motivo eu não consegui capturar a sua linguagem do navegador... Talvez ela ainda não seja suportada...'
            langDetectada.removeChild(langDetectada) >>>
                >>> > aaab4312ace6e235c794d71d47dd99f72ec6ea9a

        }

    } catch (err) {
        // Podemos adicionar mais uma linha no json para mudar essa frase de acordo com a linguagem do navegador...
        // mas depois eu tento fazer isso, deu uma preguiça agora

        const idText = document.getElementById('text');

        idText.style.color = 'RED'
        idText.innerText = `Código: ${err.code ? 'Sem código' : err.code}\n Wups, parece que ocorreu algum erro! :/`

        console.log(err)
    }

});