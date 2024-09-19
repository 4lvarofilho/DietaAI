import {FastifyReply, FastifyRequest} from "fastify";
import {CreateNutritionService} from '../services/CreateNutritionService'
import { DataProps } from '../interfaces/DataProps'

class CreateNutritionController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const { name, weight, height, age, gender, objective, level, comorbidity } = request.body as DataProps;

        const createNutrition = new CreateNutritionService();
        const nutrition = await createNutrition.execute({
            name,
            weight,
            height,
            age,
            gender,
            objective,
            level,
            comorbidity
        });

        reply.send(nutrition);
    }
}

export { CreateNutritionController }