import prismaClient from "../prisma"
import {io } from "../app"
class CreateMessageService {
    async execute(text: String, user_id: String)    {
        const message = await prismaClient.message.create({
            data: {
                text,
                user_id
            },
            include: {
                user: true
            }
        })

        return message;

        const infoWS = {
            text: message.text,
            user_id: message.user_id,
            created_at: message.created_at
            
        }
    }
}

export { CreateMessageService }