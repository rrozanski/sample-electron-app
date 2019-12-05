const fs = require('fs');
const { clipboard } = require('electron');
const { dialog } = require('electron').remote;

window.getDirList = () => fs.readdirSync('/');

window.saveToFile = (value) => dialog
    .showSaveDialog(null, {})
    .then((file) => {
        fs.writeFile(file.filePath, value, () => {

        });
    });

window.copyToClipboard = (value) => clipboard.writeText(value);
