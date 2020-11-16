const txt = document.getElementById('text');

function copy() {
    const input = document.createElement('input');

    input.value = txt.innerText;

    document.body.appendChild(input);

    input.select();

    document.execCommand('copy');

    document.body.removeChild(input);

};

function btnCopy() {
    copy();

    alert('Copied!')
};


document.onkeypress = function(evt) {
    let key = event.keyCode
    let str_key = String.fromCharCode(key)

    if (str_key === 'c') {
        copy();

        alert('Copied!')
    } else {
        return;
    }
}
