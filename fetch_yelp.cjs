const https = require('https');
https.get('https://m.yelp.com/biz/diamond-well-and-pump-new-smyrna-beach-2', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const fs = require('fs');
    fs.writeFileSync('yelp_output.html', data);
    console.log('Saved to yelp_output.html');
  });
}).on('error', (e) => {
  console.error(e);
});
