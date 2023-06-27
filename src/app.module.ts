import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerModule, LoggerService } from '@app/logger';
import { LoggerSource } from '@app/logger/lib/enums';

@Module({
  imports: [LoggerModule.forRoot(LoggerSource.MORGAN)],
  providers: [
    AppService
  ]
})
export class AppModule {}
