const fs = require('fs');

//reading files
//We do it using readFile property, It has two parameters
//The first one is a relative path to the file
//Second is a callback function
//It is a ASYNCHRONOUS function and DOES NOT BLOCK the code
fs.readFile(__dirname + '/Docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

//WRITING files
//writeFile function(three parameters)
//1.relative path 2.New text 3.Callback function
//If the file does not exists it creates the file
fs.writeFile(__dirname + '/Docs/blog.txt', 'New Changed Text', () => {
    console.log('Changed the content');
})

//DIRECTORIES
//Checking if file already exists
if (!fs.existsSync('./assets')) {
    //For creating directories
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder created")
    })
}
else {
    //For removing directories
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Folder deleted")
    })
}

//Deleting Files
if (fs.existsSync(__dirname + '/Docs/deleteme.txt')) {
    //Function to delete the file
    fs.unlink(__dirname + '/Docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File Deleted")
    })
}