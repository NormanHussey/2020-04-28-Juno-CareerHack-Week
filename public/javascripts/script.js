const app = {};

// app.converter = new showdown.Converter();
app.input = document.querySelector('#inputText');
app.output = document.querySelector('.output');
app.downloadBtn = document.querySelector('#downloadBtn');
app.reader = new FileReader();
app.form = document.querySelector('#inputForm');
app.update = document.querySelector('#update');

app.download = () => {
    // const savedJson = JSON.stringify(app.output.innerHTML);
    app.saveToLocalDrive(app.output.innerHTML, 'mark-it.txt', 'text/plain');
}

app.load = (file) => {

}

app.saveToLocalDrive = (content, fileName, contentType) => {
    let a = document.createElement("a");
    let file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

app.downloadBtn.addEventListener('click', () => {
    app.download();
});

app.reader.addEventListener('load', (e) => {
    const loadedFileText = e.target.result;
    app.load(loadedFileText);
});

app.form.addEventListener('submit', (e) => {
    // e.preventDefault();
    // fetch('/api/text')
    // .then(response => {
    //     app.output.innerText = response;
    // });
});

update.addEventListener('click', (e) => {
    fetch('/api/text')
      .then(response => response.json())
      .then(json => {
        // console.log(json.html);
        app.output.innerHTML = json.html;
      });
});

app.updateOutput = () => {
    fetch('/api/text')
    .then(response => response.json())
    .then(json => {
    //   console.log(json.html);
        if (json.html) {
            app.output.innerHTML = json.html;
        }
    });
    requestAnimationFrame(app.updateOutput);
}

// window.requestAnimationFrame(app.updateOutput);
