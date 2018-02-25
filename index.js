const fs = require ('fs');
const path = require('path');
const os = require('os');
const { promisify } = require('util');

const access = promisify(fs.access);

function fn({app}) {
  if(app !== 'vim') {
    return null;
  }
  const resolvedPath = path.resolve(os.homedir(), '.vimrc');
  return access(resolvedPath)
    .then(() => ({ path: resolvedPath}))
    .catch(e => null)
};

const name = 'vim';

module.exports = {
    fn,
    name
};
