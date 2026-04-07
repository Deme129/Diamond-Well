const fs = require('fs');
const data = fs.readFileSync('yelp_output.html', 'utf8');
console.log(data.substring(0, 500));
