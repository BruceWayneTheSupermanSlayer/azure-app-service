import { OnModuleInit } from '@nestjs/common';
import * as ApplicationInsights from 'applicationinsights';
export declare class AppInsightsService implements OnModuleInit {
    private client;
    onModuleInit(): void;
    info(message: string, severityLevel: ApplicationInsights.Contracts.SeverityLevel): void;
    warn(message: string): void;
    error(message: string): void;
    critical(message: string): void;
}
