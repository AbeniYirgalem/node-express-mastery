const fs = require('fs');


const readStreame = fs.createReadStream('./docs/blog3.txt', 'utf8')
const writeStream = fs.createWriteStream('./docs/blog4.txt')

readStreame.on('data', (chunk) => {
    console.log('----- NEW CHUNK -----');
    console.log(chunk);
    writeStream.write('\n-------NEW CHUNK-------\n');
    writeStream.write(chunk);
})

// piping
readStreame.pipe(writeStream);



