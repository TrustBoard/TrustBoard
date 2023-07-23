// const { exec } = require('child_process');
// const { stdin } = require('process');

// async function ipfsAdd(path) {
//     await exec(`ipfs add ${path}`, (error, stdout, stderr) => {
//     if (error) {
//         console.error(`Error executing command: ${error.message}`);
//     }
    
//     if (stderr) {
//         console.error(`Command error: ${stderr}`);
//     }
//     console.log(stdout);
//     });

// }

// function ipfsGet(hash) {
//     exec(`ipfs get ${hash}`, (error, stdout, stderr) => {
//         if (error) {
//         console.error(`Error executing command: ${error.message}`);
//         }
    
//         if (stderr) {
//         console.error(`Command error: ${stderr}`);
//         }
//     });
// }

// async function ipfsCat(hash){
//     let text;
//     await exec(`ipfs cat ${hash}`, (error, stdout, stderr) => {
//         console.log(`${stdout}`);
//     });
// }