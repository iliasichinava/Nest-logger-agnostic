import { LoggerService } from '@app/logger';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    public constructor(private readonly loggerService: LoggerService) {
        this.loggerService.info(" giga dekoratora");
        this.loggerService.warn(" zaali bosi");
        this.loggerService.error(" ilia tanki");
    }
}
