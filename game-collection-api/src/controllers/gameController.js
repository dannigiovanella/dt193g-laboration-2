
//Controller för spelhantering.
//Hanterar förfrågningar från routes, anropar funktioner i modellen och skickar tillbaka svar till klienten.


//Importerar funktionen som hämtar alla spel från modellen
import { getAllGames } from '../models/gameModel.js';

//Hämtar och returnerar alla spel
//Fastify använder request och reply för att hantera förfrågningar och svar
export const getGames = async (request, reply) => {
    try {
        //Hämtar alla spel från databasen
        const games = await getAllGames();

        //Skickar tillbaka spelen som JSON
        return reply.send(games);

    } catch (error) {
        //Skriver ut felet i Fastifys logg
        request.log.error(error);

        //Skickar ett felmeddelande om nåt går fel
        return reply.code(500).send({
            error: 'Det gick inte att hämta spelen.'
        });
    }
};
