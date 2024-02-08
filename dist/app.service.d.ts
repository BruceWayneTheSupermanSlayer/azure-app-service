import { AppInsightsService } from './gcs-logger';
export declare class AppService {
    private readonly logger;
    constructor(logger: AppInsightsService);
    getHello(): Record<string, string>;
}
