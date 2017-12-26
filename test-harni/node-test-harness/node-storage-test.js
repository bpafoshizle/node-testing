// Imports the Google Cloud client library.
const Storage = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the 
// environment. 
//const storage = Storage();

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/latest/guides/authentication
//const storage = Storage({
//    keyFilename: '../../credentials/translate-testing-8acb2fbd806e.json'
//  });

// Makes an authenticated API request.
storage
    .getBuckets()
    .then((results) => {
        const buckets = results[0];

        console.log("Buckets:");
        buckets.forEach((bucket) => {
            console.log(bucket.name);
        });
    })
    .catch((err) => {
        console.error('ERROR:', err);
    });