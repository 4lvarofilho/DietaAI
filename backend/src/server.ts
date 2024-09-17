import Fastify from 'fastify';
import cors from '@fastify/cors';
import { configDotenv } from "dotenv";
import { routes } from './routes'

const app = Fastify({ logger: true });
configDotenv()

app.setErrorHandler((err, req, rep) =>{
    rep.code(400).send({message: err.message});

});

const start = async () => {
    app.register(cors);
    app.register(routes)

    try {
        await app.listen({port: 3000, host: '127.0.0.1'});
        console.log('Server running on port 3000.')
    } catch (err) {
        console.error(err);
    }
}

start();