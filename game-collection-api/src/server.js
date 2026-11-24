// SERVER


//Hämtar Fastify
import Fastify from 'fastify';

//Skapar en ny Fastify server
const fastify = Fastify({
    //Aktiverar loggning av exempelvis inkommande förfrågningar och fel
    logger: true
});

//Skapar en första route som skriver ut meddelande i json
fastify.get('/', async function (request, reply) {
    return { message: 'Välkommen till Game Collection' };
});

//Funktion som startar servern
const start = async () => {
    try {
        //Startar servern på port 3000
        await fastify.listen({ port: 3000 });

        //Skriver ut serverns port i konsolen
        console.log('Servern körs på PORT 3000');

    } catch (error) {
        //skriver ut eventuella fel i Fastifys logg
        fastify.log.error(error);

        //Avslutar programmet om servern inte kan startas
        process.exit(1);
    }
};

//Kör startfunktion
start();


