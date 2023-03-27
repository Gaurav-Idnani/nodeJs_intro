
//import * as fs from 'fs';
//import * as path from 'path';
const fs = require ('fs');
const path = require ('path');
const { promisify } = require ('util');
const readFile = promisify(fs.readFile);
const filename = path.resolve('\data','Contacts_Data.csv');
readFile(filename,'utf8')
    .then((file)=>{
        console.log (file);
    }).catch(err=>{
        console.error (err);
    })
