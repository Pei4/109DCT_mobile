const {getData} = require('spreadsheet.js');
(async function showSheet() {
    console.log('yes');
    const resp = await getData('1NbeNeRk0IzXrgEfnorPfXvL3UAAzf6o-SJL1OVnke4g', '0');
}());
console.log('yes');