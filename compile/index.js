const fs = require('fs');
const path = require('path');
const source = require('./source.js');
const { treeParser } = require('../src/index.js');
const response = JSON.stringify(treeParser(source));
fs.writeFileSync(path.join(__dirname, '../source/tree.json'), response);
fs.writeFileSync(path.join(__dirname, '../source/tree.iife.js'), 'window.adcocTree=' + response);