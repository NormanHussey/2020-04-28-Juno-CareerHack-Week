const converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);

const input = document.querySelector('#inputText');
const output = document.querySelector('.output');

function updateOutput() {
    const markedInput = converter.makeHtml(input.value);
    output.innerHTML = markedInput;
    requestAnimationFrame(updateOutput);
}

window.requestAnimationFrame(updateOutput);
