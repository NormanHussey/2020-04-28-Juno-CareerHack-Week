const converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);

const input = document.querySelector('#input');
const inputForm = document.querySelector('#inputForm');
const output = document.querySelector('.output');

inputForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const markedInput = converter.makeHtml(input.value);
    output.innerHTML = markedInput;
});
