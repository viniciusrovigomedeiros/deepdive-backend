import openAI from "openai";
import IService from "../interfaces/IServices";
import { Enviroment } from "../shared/Enviroment";
import { INVALID_MESSAGE } from "./helper/Constants";

export class GetBotMessageService implements IService<string> {
    private readonly openai: openAI;
    constructor() {
        this.openai = new openAI({
            apiKey: Enviroment.chatGptApiKey,
            defaultHeaders: {
                Authorization: Enviroment.chatGptAccessToken,
            },
        });
    }
    async execute(transcription: string): Promise<string> {
        const chatCompletion = await this.openai.chat.completions.create({
            messages: [{ role: "user", content: transcription }],
            model: Enviroment.chatGptModel,
        });
        let message = INVALID_MESSAGE;
        if (chatCompletion.choices.length > 0) {
            if (chatCompletion.choices[0].message.content)
                message = chatCompletion.choices[0].message.content;
        }

        return message;
    }
}
