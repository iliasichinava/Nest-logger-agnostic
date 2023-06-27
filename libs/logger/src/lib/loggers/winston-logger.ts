import { Injectable } from "@nestjs/common";
import { ILogger } from "../interfaces";

@Injectable()
export class WinstonLogger implements ILogger {
    public info(msg: string): void {
        console.info(`[SUCCESS] ${msg}`);
    }
    public warn(msg: string): void {
        console.warn(`[WARNING] ${msg}`);
    }
    public error(msg: string): void {
        console.error(`[FAULT] ${msg}`);
    }
}