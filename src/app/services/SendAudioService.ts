import openAI from "openai";
import IService from "../interfaces/IServices";
import { Enviroment } from "../shared/Enviroment";
import { INVALID_MESSAGE } from "./helper/Constants";
import { GetBotMessageService } from "./GetBotMessage";
import { IResponse } from "../interfaces/IResponse";
import { SuccessResponse } from "./helper/UserResponse";
import { BotResponse } from "../shared/Types";

export class SendAudioService implements IService<any> {
    private readonly getBotMessageService: GetBotMessageService
    constructor() {
        this.getBotMessageService = new GetBotMessageService();
    }
    async execute(transcription: string): Promise<IResponse<BotResponse>> {
        const message = await this.getBotMessageService.execute(transcription);
        const audioBase64 = Buffer.from(message).toString("base64");

        return new SuccessResponse<BotResponse>({
            message, transcription, audioBase64
        })

    }
}
