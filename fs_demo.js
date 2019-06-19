const path = require('path');
const fs = require('fs');


// // create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if(err) throw err;
//   console.log('Folder created')
// });

// // create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//   "Hello World",
//   err => {
//     if (err) {
//       throw err;
//     }

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//       "I love node",
//       err => {
//         if (err) {
//           throw err;
//         }
//       }
//     );
//   } 
// );
//read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
    if (err) {
      throw err;
    }
    console.log(data)
  }
)