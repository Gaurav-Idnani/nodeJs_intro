
//import * as fs from 'fs';
//import * as path from 'path';
const fs = require ('fs');
const path = require ('path');
const filename = path.resolve('\data','Contacts_Data.csv');
fs.readFile(filename,'utf8',(err,file)=>{
    if (!err)
    console.log (file);
    else console.error('error=',err);
});
