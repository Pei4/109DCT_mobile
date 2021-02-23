const { getData } = require('spreadsheet.js');

(async () => {
    const resp = await getData('1NbeNeRk0IzXrgEfnorPfXvL3UAAzf6o-SJL1OVnke4g', '0');
    console.log(resp);
})();