//Routes för spelhantering.
//Med url:er och HTTP-metoder

//Importer

//Importerar controllern som hanterar förfrågningar om spel
import { getGames,getGame } from '../controllers/gameController.js';


//Routes och funktioner

//Registrerar routes för spel
//Export för att kunna användas i server
export default async function gameRoutes(fastify) {

    //Route för att hämta alla spel
    //Fastify använder get() för att registrera en GET-route
    //När någon besöker /games anropas funktionen getGames i controllern
    fastify.get('/games', getGames);

    //Route för att hämta ett spel från dess id
    //Fastify använder get() för att registrera en GET-route
    //:id är en parameter för att ange spel-id i url
    fastify.get('/games/:id', getGame);
}

