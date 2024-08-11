const fs = require('fs');
const process = require('process');


function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err.message);
            process.exit(1);
        }
        console.log(data);
    });
}











// Get the path from command line arguments, grabs the third item in the argv array being the the argument the user prvides
const path = process.argv[2];



if (!path) {
    console.error("Please provide a path to the file.");
    process.exit(1);
}

// Call the cat function with the provided path
cat(path);









