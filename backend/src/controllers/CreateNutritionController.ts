import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateNutritionService } from '../services/CreateNutritionService'

export interface DataProps{
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  objective: string;
  level: string;
}

class CreateNutritionController{
<<<<<<< HEAD
  async handle(request: FastifyRequest, reply: FastifyReply){
    const { name, weight, height, age, gender, objective, level } = request.body as DataProps;

    const createNutrition = new CreateNutritionService();
=======
    async handle(request:FastifyRequest, reply:FastifyReply){
        const { name, weight, height, age, gender, objective, level } = request.body as DataProps;

        const createNutrition = new CreateNutritionService();
        const nutrition = await createNutrition.execute({
            name,
            weight,
            height,
            age,
            gender,
            objective,
            level
        });
>>>>>>> 3147923782b92ecb1a664dbfc2781dfeb52304e6

    const nutrition = await createNutrition.execute({
      name,
      weight,
      height,
      age,
      objective,
      gender,
      level,
    });

    reply.send(nutrition);

  }
}

export { CreateNutritionController }