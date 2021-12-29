//  *** File System (FS)

const fs = require('fs'); // Common JS code

// import * as fs from 'fs'; // ECMA Script Module (ESM) code

const files = fs.readdirSync('./');

console.log(files)
