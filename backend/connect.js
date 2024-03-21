import mysql from "mysql";

export const db=mysql.createConnection({
    host:"sql5.freesqldatabase.com",
    user:"sql5693049",
    password:"1E8RfHPrxb",
    database:"sql5693049",
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
