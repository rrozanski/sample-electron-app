const fs = require('fs');
const { clipboard } = require('electron');
const { dialog } = require('electron').remote;
const axios = require('axios');

window.getDirList = () => fs.readdirSync('/');

window.saveToFile = (value) => dialog
    .showSaveDialog(null, {})
    .then((file) => {
        fs.writeFile(file.filePath, value, () => {
            console.log('List saved to file: ', file.filePath);
        });
    });

window.copyToClipboard = (value) => clipboard.writeText(value);

window.loadDataFromApi = () => {
    return axios
        .get('https://httpbin.org/uuid')
        .then(res => res.data.uuid);
};
