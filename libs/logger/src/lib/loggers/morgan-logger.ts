import { Injectable } from "@nestjs/common";
import { ILogger } from "../interfaces";

@Injectable()
export class MorganLogger implements ILogger {
    public info(msg: string): void {
        console.info(`[INFO] ${msg}`);
    }
    public warn(msg: string): void {
        console.warn(`[WARN] ${msg}`);
    }
    public error(msg: string): void {
        console.error(`[ERROR] ${msg}`);
    }
}