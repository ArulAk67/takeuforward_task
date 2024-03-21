import mysql from "mysql";
import "dotenv/config"

export const db=mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port:3306
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
  });
  
  // You can also listen for the 'error' event to handle errors during the connection
  db.on('error', (err) => {
    console.error('Database error:', err);
  });
