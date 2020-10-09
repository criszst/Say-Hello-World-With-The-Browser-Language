const txt = document.getElementById('text')

document.onkeypress = function() {
    let keyPress = event.keyCode

    if (keyPress === 99) {

        const input = document.createElement('input')

        input.value = txt.innerText

        document.body.appendChild(input)

        input.select();

        document.execCommand('copy')

        document.body.removeChild(input)

        alert('Copied!')

    }
}