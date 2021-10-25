const fs = require('fs');

//To read data from a stream
//The first parameter is the relative file path
//The second parameter is optional, we are doing an encoding:utf-8 so as to avoid using chunk.toString later
const readStream = fs.createReadStream('./Lecture-2/File System/Docs/blogStream.txt', { encoding: 'utf-8' });

//For writing using stream
const writeStream = fs.createWriteStream('./Lecture-2/File System/Docs/blogStreamNew.txt');

readStream.on('data', (chunk) => {
    console.log('--------NEW CHUNK--------');
    console.log(chunk);

    writeStream.write('\n NEw CHUNK \n')
    writeStream.write(chunk);
});

//Another way to read from one file and write into another
//Piping for direct writng from readStream
readStream.pipe(writeStream);