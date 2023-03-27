
//import * as fs from 'fs';
//import * as path from 'path';
const fs = require ('fs');
const path = require ('path');
const { promisify } = require ('util');
const readFile = promisify(fs.readFile);
const filename = path.resolve('\data','Contact_Data.csv');

async function readFileAsyncAwait() {
    try{
        const file =await readFile(filename,'utf8');
        console.log (file);
    }catch (err){
        console.error (err);
    }
}

readFileAsyncAwait();