import { DynamicModule, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { WinstonLogger } from './lib/loggers/winston-logger';
import { MorganLogger } from './lib/loggers/morgan-logger';
import { LOGGER_TOKEN } from './lib/constants';
import { LoggerSource } from './lib/enums';

@Module({})
export class LoggerModule {

  public static forRoot(loggerSource: LoggerSource): DynamicModule {

    return {
      module: LoggerModule,
      providers: [
        {
          provide: LOGGER_TOKEN,
          useClass: loggerSource === LoggerSource.WINSTON ? WinstonLogger : MorganLogger
        },
        LoggerService
      ],
      exports: [LoggerService]
    };
  
  }

}
