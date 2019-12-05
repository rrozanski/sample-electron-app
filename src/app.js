const loadButton = document.getElementById('load-button');
const saveButton = document.getElementById('save-button');
const copyButton = document.getElementById('copy-button');
const dirList = document.getElementById('dir-list');
const loadFromApiButton = document.getElementById('load-from-api-button');

loadButton.addEventListener('click', () => {
    dirList.value = window.getDirList().join('\n');

    new Notification('Load file list', {
        body: 'File list loaded successfully!'
    });
});

copyButton.addEventListener('click', () => {
    window.copyToClipboard(dirList.value);
});

saveButton.addEventListener('click', () => {
    window.saveToFile(dirList.value)
        .then(() => new Notification('Save file list', {
            body: 'File list saved successfully!'
        }));
});

loadFromApiButton.addEventListener('click', () => {
    window.loadDataFromApi()
        .then(apiData => {
            dirList.value = apiData;
        });
});
