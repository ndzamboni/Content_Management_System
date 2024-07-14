const dns = require('dns');

const hostname = 'dpg-cqa53iaju9rs73be2fm0-a';

dns.lookup(hostname, (err, address, family) => {
  if (err) {
    console.error('DNS lookup failed:', err);
  } else {
    console.log('Address:', address);
    console.log('Family:', family);
  }
});
