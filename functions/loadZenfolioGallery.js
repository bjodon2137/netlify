const https = require('https');

exports.handler = async function (event, context) {
  const zenfolioURL = 'https://www.zenfolio.com/photographybysabrina/e/p796481822';

  return new Promise((resolve, reject) => {
    https.get(zenfolioURL, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        resolve({
          statusCode: 200,
          headers: { 'Content-Type': 'text/html' },
          body: data,
        });
      });
    }).on('error', (e) => {
      resolve({
        statusCode: 500,
        body: `Error: ${e.message}`,
      });
    });
  });
};
