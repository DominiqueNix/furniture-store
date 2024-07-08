const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
    // Configure `config.json` file path
    const targetPath = './src/config.json';

// Load node modules
const appVersion = require('./package.json').version;
require('dotenv').config({
  path: './.env',
});
// `config.json` file structure
const envConfigFile = `{
    "domain": "${process.env.DOMAIN}",
    "clientId": "${process.env.CLIENT_ID}",
    "audience": "${process.env.AUDIENCE}"
}`;
console.log(
  'The file `config.json` will be written with the following content: \n'
);
writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(
      `config.json file generated correctly at ${targetPath} \n`
    );
  }
});
};

setEnv();