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

        languages.forEach(l => {
            if (l.tipo == langBrowser) {
                idText.innerText = l.texto;
            }
        })

        if (!idText.innerText) idText.innerText = 'Hmmm... Por algum motivo eu não consegui capturar a sua linguagem do navegador...'
    } catch (err) {
        const idText = document.getElementById('text');

        idText.innerText = `${err.code}\n Wups, parece que ocorreu algum erro! :(`.style.color = 'RED'

        console.log(err)
    }

    /* forEach(lan in languages) {
         if (lan.tipo == langBrowser) {
             idText.innerText = lan.texto;
             break;
         }
     } */

    /*  for (var i = 0; i <= languages.length - 1; i++) {
          if (languages[i].tipo == langBrowser) {
              idText.innerText = languages[i].texto;
              break;
          } 
        } */

});