const fs = require("fs");

//  reading files
fs.readFile("./docs/blogs.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//  writting files
fs.writeFile("./docs/blogs.txt", "Hello Abeni.", (err) => {
    if (err) throw err;
    console.log("files written sccussfully.");
});

fs.writeFile('./docs/blogs2.txt',"I am fine.", (err) => {
    if (err) throw err;
    console.log('files was written')
})

//  directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) throw err;
        console.log("assets folder is created successfully.");
    })
} else {
    console.log('assets folder already exist.')
}

//  deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) throw err;
        console.log('file was deleted successfully.')
    })
} 
else {
   console.log("File doesn't exist.")
}
