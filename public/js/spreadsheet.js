const { GoogleSpreadsheet } = require('google-spreadsheet');

async function getData(docID, sheetID, credentialsPath = 'json/longcompanion-305702-fa459d92b179.json') {
    const result = [];
    const doc = new GoogleSpreadsheet(docID);
    const creds = require(credentialsPath);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsById[sheetID];
    const rows = await sheet.getRows();
    for (row of rows) {
        result.push(row._rawData);
    }
    return result;
}

module.exports = {
    getData,
};