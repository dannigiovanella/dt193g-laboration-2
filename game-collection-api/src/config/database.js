//DATABASCONFIGURERING

//Hämtar dotenv för att läsa miljövariabler från .env
import 'dotenv/config';

//Hämtar Pool från pg
import pg from 'pg';

//Hämtar Pool klassen
const { Pool } = pg;

//Skapar en anslutning till PostgreSQL
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

//Exporterar anslutningen så att andra filer kan använda den
export default pool;
