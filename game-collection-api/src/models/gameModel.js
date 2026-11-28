
//Modell som ansvarar för kommunikation med databasen

//Importerar databasanslutningen 
import pool from '../config/database.js';

//Hämtar alla spel från databasen
export const getAllGames = async () => {
    //Hämtar alla rader från tabellen games
    const result = await pool.query('SELECT * FROM games');

    //Returnerar spelen
    return result.rows;
};
