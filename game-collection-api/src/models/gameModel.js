
//Modell som ansvarar för kommunikation med databasen

//Importerar databasanslutningen 
import pool from '../config/database.js';


///// GET - Funktioner för att hämta data ///////

//Hämtar alla spel från databasen
export const getAllGames = async () => {
    //Hämtar alla rader från tabellen games
    const result = await pool.query('SELECT * FROM games');

    //Returnerar spelen
    return result.rows;
};


//Hämtar ett spel från databasen med hjälp av dess ID
export const getGameById = async (id) => {

    //Skickar sql-fråga till PostgreSQL för att hitta spel med rätt id
    //Hämtar spelet med angivet id med WHERE
    //$1 är placeholder som ersätts med värdet från parametern id
    //Skickar in id separat från sql frågan för att undvika injektion
    const result = await pool.query(
        'SELECT * FROM games WHERE id = $1',[id]
    );

    //Hämtar den första raden
    //Returnerar spelet om det hittades, eller null
    return result.rows[0] || null;
};
