
//Controller för spelhantering.
//Hanterar förfrågningar från routes, anropar funktioner i modellen och skickar tillbaka svar till klienten.

//Importer
//Importerar funktionen som hämtar alla spel från modellen
import { getAllGames, getGameById } from '../models/gameModel.js';

//GET - Hämtar data

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


//Hämtar ett specifikt spel med dess id
export const getGame = async (request, reply) => {
    try {
        //Hämtar id från url parameter
        const id = request.params.id;

        //Hämtar spelet från databasen med hjälp av dess id
        const game = await getGameById(id);

        //Kontrollerar om spelet inte finns i databasen
        if (!game) {
            //Skickar felkod 404 och felmeddelande om spelet inte hittades
            return reply.code(404).send({
                error: 'Spelet kunde inte hittas.'
            });
        }

        //Skickar tillbaka det hittade spelet i json
        return reply.send(game);

    } catch (error) {
        //Vid fel skrivs felet i fastifys logg
        request.log.error(error);

        //Skickar felkod 500 och ett felmeddelande om något är fel
        return reply.code(500).send({
            error: 'Det gick inte att hämta spelet.'
        });
    }
};