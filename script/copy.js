const txt = document.getElementById('text')

function copy() {
    const input = document.createElement('input')

    input.value = txt.innerText

    document.body.appendChild(input)

    input.select();

    document.execCommand('copy')

    document.body.removeChild(input)

}

function btnCopy() {
    copy()

    alert('Copied!')
}

document.onkeypress = function() {
    const keyPress = event.keyCode

    const key = String.fromCharCode(keyPress)

    if (key === 'c') {
        copy()

        alert('Copied!')
    }
}