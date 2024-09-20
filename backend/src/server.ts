import Fastify from "fastify";
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import { routes } from './routes'

const app = Fastify({ logger: true })
dotenv.config();

<<<<<<< HEAD
app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message })
})
=======
app.setErrorHandler((err, req, rep) =>{
    rep.code(400).send({message: err.message});
});
>>>>>>> 3147923782b92ecb1a664dbfc2781dfeb52304e6

const start = async () => {
  app.register(cors);
  app.register(routes)


  try{
    await app.listen({ port: 3333, host: "0.0.0.0"})
    console.log(`Servidor rodando no http://localhost:3333`)
  }catch(err){
    console.log(err);
  }

<<<<<<< HEAD
=======
    try {
        await app.listen({port: 3000, host: '0.0.0.0'});
        console.log('Server running on port 3000.')
    } catch (err) {
        console.error(err);
    }
>>>>>>> 3147923782b92ecb1a664dbfc2781dfeb52304e6
}

start();