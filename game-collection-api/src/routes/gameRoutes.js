//Routes för spelhantering.
//Med url:er och HTTP-metoder

//Importerar controllern som hanterar förfrågningar om spel
import { getGames } from '../controllers/gameController.js';

//Registrerar routes för spel
//Export för att kunna användas i server
export default async function gameRoutes(fastify) {

    //Fastify använder get() för att registrera en GET-route
    //När någon besöker /games anropas funktionen getGames i controllern
    fastify.get('/games', getGames);
}