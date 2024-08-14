const open = require('open');
const { exec } = require('child_process');

const browser = process.env.BROWSER || 'chrome';

if (browser === 'safari') {
  exec('which safari', (err, stdout, stderr) => {
    if (stdout) {
      open('http://localhost:3000', { app: 'safari' });
    } else {
      open('http://localhost:3000', { app: 'google chrome' });
    }
  });
} else {
  open('http://localhost:3000', { app: 'google chrome' });
}
