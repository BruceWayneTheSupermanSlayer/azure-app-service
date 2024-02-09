import { Injectable } from '@nestjs/common';
import { AppInsightsService } from './gcs-logger';
import { SeverityLevel } from 'applicationinsights/out/Declarations/Contracts';

@Injectable()
export class AppService {
  constructor(private readonly logger: AppInsightsService) { }
  getHello(): Record<string, string> {
    this.logger.info(`👻👻👻👻👻👻👻👻👻👻👻👻👻👻`, SeverityLevel.Error)

    return { message: "👻👻👻👻👻👻👻👻👻👻👻👻👻👻👻" };
  }
}
