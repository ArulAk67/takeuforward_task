import mysql from "mysql";
import "dotenv/config"

export const db=mysql.createConnection({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"chow3sql",
    database:"compiler"
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:');
      return;
    }
    console.log('Connected to the database');
  });
  
  // You can also listen for the 'error' event to handle errors during the connection
  db.on('error', (err) => {
    console.error('Database error:', err);
  });
