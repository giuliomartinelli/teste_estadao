const mongoose = require("mongoose");

async function main() {
    const user = encodeURIComponent('giulio');
    const password = encodeURIComponent('XBgKrv');
    const database = 'estadao';
    const host = 'api-database';
    const port = '27017';
    const uri = `mongodb://${user}:${password}@${host}:${port}/${database}`;
    try {
        mongoose.set('strictQuery',true);
        await mongoose.connect(uri);
    } catch (err) {
        console.log(err);
    }
}

module.exports = main;
