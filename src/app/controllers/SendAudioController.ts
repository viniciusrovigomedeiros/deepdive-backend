import { Buffer } from "buffer";
import { Request, Response } from "express";
import httpStatus from "http-status";
import openAI from "openai";
import { injectable } from "tsyringe";
import UserEntity from "../entities/UserEntity";
import { IController } from "../interfaces/IController";
import { ErrorResponse } from "../services/helper/UserResponse";
import { GetBotMessageService } from "../services/GetBotMessage";
import { SendAudioService } from "../services/SendAudioService";

@injectable()
export default class AudioSendController implements IController<UserEntity> {
  async handle(req: Request, res: Response) {
    const sendAudioService = new SendAudioService();
    try {
      const { audio, transcription } = req.body;
      if (!audio) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json(new ErrorResponse("Audio data not provided"));
      }

      const result = await sendAudioService.execute(transcription);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(new ErrorResponse("Internal Server Error"));
    }
  }
}
