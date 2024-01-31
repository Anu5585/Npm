var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a);

// if you prefer something other than '-' as separator
const b = slugify('some string', '_')  // some_string
console.log(b);
/*

// ye sb likhty h 
PS C:\Users\annas\OneDrive\Desktop\npm npx install process> node server.js
Annas
PS C:\Users\annas\OneDrive\Desktop\npm npx install process> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (npm-npx-install-process) spotify
version: (1.0.0)
description: clone for my app
entry point: (server.js)                                                                                                                                             
test command:                                                                                                                                                        
git repository:                                                                                                                                                      
keywords: spotify music
author: annas                                                                                                                                                        
license: (ISC)                                                                                                                                                       
About to write to C:\Users\annas\OneDrive\Desktop\npm npx install process\package.json:

{
  "name": "spotify",
  "version": "1.0.0",
  "description": "clone for my app",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [
    "spotify",
    "music"
  ],
  "author": "annas",
  "license": "ISC"
}


Is this OK? (yes) yes
PS C:\Users\annas\OneDrive\Desktop\npm npx install process> npm install  slugify    

added 1 package, and audited 2 packages in 3s

found 0 vulnerabilities
PS C:\Users\annas\OneDrive\Desktop\npm npx install process> node server.js
node:internal/modules/cjs/loader:1147
  throw err;
  ^

Error: Cannot find module 'slugify'
Require stack:
- C:\Users\annas\OneDrive\Desktop\npm npx install process\server.js
    at Module._resolveFilename (node:internal/modules/cjs/loader:1144:15)
    at Module._load (node:internal/modules/cjs/loader:985:27)
    at Module.require (node:internal/modules/cjs/loader:1235:19)
    at require (node:internal/modules/helpers:176:18)
    at Object.<anonymous> (C:\Users\annas\OneDrive\Desktop\npm npx install process\server.js:1:15)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'C:\\Users\\annas\\OneDrive\\Desktop\\npm npx install process\\server.js'
  ]
}

Node.js v20.10.0
PS C:\Users\annas\OneDrive\Desktop\npm npx install process> npm install

added 1 package, and audited 2 packages in 2s

found 0 vulnerabilities
PS C:\Users\annas\OneDrive\Desktop\npm npx install process> node server.js
some-string
some_string
PS C:\Users\annas\OneDrive\Desktop\npm npx install process>*/