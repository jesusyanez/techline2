// require csvtojson module
const CSVToJSON = require('csvtojson');
const fs = require('fs')

// convert users.csv file to JSON array
CSVToJSON().fromFile('data.csv')
    .then(users => {
        users.shift();
        // users is a JSON array
        fs.writeFile('users.json', JSON.stringify(users, null, 4), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON array is saved.");
        });
        // log the JSON array
        console.log(users);
    }).catch(err => {
        // log error if any
        console.log(err);
    });

