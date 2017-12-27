// Imports the Google Cloud client library
const Translate = require('@google-cloud/translate');

// Your Google Cloud Platform project ID
const projectId = 'translate-testing-189900';

// Instantiates a client
const translate = new Translate({
  projectId: projectId
});


//const storage = Storage({
//    keyFilename: '../../credentials/translate-testing-8acb2fbd806e.json'
//  });

// The text to translate
const text = 'Hello, world!';
// The target language
const target = 'ru';

// Translates some text into Russian
translate
  .translate(text, target)
  .then(results => {
    const translation = results[0];

    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
