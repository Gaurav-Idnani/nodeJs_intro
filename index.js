
//import * as fs from 'fs';
//import * as path from 'path';
const fs = require ('fs');
const path = require ('path');
const { promisify } = require ('util');
const readFile = promisify(fs.readFile);
const filename = path.resolve('\data','Contact_Data.csv');

async function readFileAsyncAwait() {
    try{
        let records=[];
        let headers=[];
        const file =await readFile(filename,'utf8');
        const lines = file.split('\n');
        lines.forEach((line,index)=>{
            if (index===0) {
                headers = line.split(',');
                return;
            }
            let record = {};
            let values = line.split(',');
            headers.forEach((header,i)=>{
                record[header]=values[i]; 
            });
            records.push(record); 
        });
        console.log (JSON.stringify(records,null,2));
    }catch (err){
        console.error (err);
    }
}

readFileAsyncAwait();