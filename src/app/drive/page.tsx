const { exec } = require('child_process');

const sqlite3 = require('sqlite3');

let db;
function setUpDataBase() {
    db = new sqlite3.Database('TrustBoard.db', (err) => {
    if (err) {
        console.error('Error opening the database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
    });

    db.run(`
    CREATE TABLE IF NOT EXISTS drive (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        address TEXT,
        file TEXT,
        hash TEXT
    )
    `);
}

function ipfsAdd(path) {
    exec(`ipfs add ${path}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
      }
    
      if (stderr) {
        console.error(`Command error: ${stderr}`);
      }
      return stdout.split(" ")[1];
    });

}

function ipfsGet(hash) {
    exec(`ipfs get ${hash}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error.message}`);
        }
      
        if (stderr) {
          console.error(`Command error: ${stderr}`);
        }
    });
}

function ipfsCat(hash){
    exec(`ipfs cat ${hash}`, (error, stdout, stderr) => {
        console.log(`${stdout}`);
      });
}

function sqlAdd(address, file) {
    const hash = ipfsAdd(file);

    db.run(`INSERT INTO drive (address, file, hash) VALUES (?, ?, ?)`, [address, file, hash]);
}

function sqlGet(address) {
    db.all('SELECT * FROM drive WHERE address = ?', [address], (err, rows) => {
        if (err) {
          console.error('Error fetching data:', err.message);
          return;
        }
      
        // Display the retrieved data
        console.log('Retrieved Data:');
        rows.forEach((row) => {
          console.log(`${row.file}, ${row.hash}`);
        });
      });
    }


setUpDataBase();

sqlAdd("0x4c1AAF4A92f517AEc4Bbe0a5899C4f9cffCc38DD", "'Sans\ Titre.txt'");

sqlGet("0x4c1AAF4A92f517AEc4Bbe0a5899C4f9cffCc38DD");
