import { Inject, Injectable } from '@nestjs/common';
import { ILogger } from './lib/interfaces';
import { LOGGER_TOKEN } from './lib/constants';

@Injectable()
export class LoggerService {
    public constructor(
        @Inject(LOGGER_TOKEN) private readonly logger: ILogger
    ) {}

    public info(msg: string) {
        this.logger.info("saba debilia" + msg);
    }

    public warn(msg: string) {
        this.logger.warn("saba debilia" + msg);
    }

    public error(msg: string) {
        this.logger.error("saba debilia" + msg);
    }
}
