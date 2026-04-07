const fs = require('fs');
const data = fs.readFileSync('yelp_output.html', 'utf8');
const matches = data.match(/https:\/\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi);
if (matches) {
  console.log([...new Set(matches)].join('\n'));
} else {
  console.log('No image links found in HTML.');
}
