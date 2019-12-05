const loadButton = document.getElementById('load-button');
const saveButton = document.getElementById('save-button');
const copyButton = document.getElementById('copy-button');
const dirList = document.getElementById('dir-list');

loadButton.addEventListener('click', () => {
    console.log('Hello World!');

    let myNotification = new Notification('Title', {
        body: 'Lorem Ipsum Dolor Sit Amet'
    });

    console.log(window.getDirList());

    dirList.value = window.getDirList().join('\n');
});

copyButton.addEventListener('click', () => {
    window.copyToClipboard(dirList.value);
});

saveButton.addEventListener('click', () => {
    window.saveToFile(dirList.value);
});
