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

function keyPressed(evt) {
    evt = evt || window.event;
    let key = evt.keyCode || evt.which;
    return String.fromCharCode(key);
};

document.onkeypress = function(evt) {
    let str = keyPressed(evt);

    if (str === 'c') {
        copy();

        alert('Copied!')
    } else {
        return;
    }
}