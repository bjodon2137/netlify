// netlify/functions/loadZenfolioGallery.js

const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const ZENFOLIO_ENDPOINT = "https://api.zenfolio.com/api/1.8/zfapi.asmx/LoadPhotoSet?authkey=&photosetId=796481822";
    const response = await fetch(ZENFOLIO_ENDPOINT);
    const body = await response.text();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/xml'
      },
      body
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch gallery', details: error.message })
    };
  }
};
