import { Injectable, OnModuleInit } from '@nestjs/common';
import * as ApplicationInsights from 'applicationinsights';
import { TelemetryClient } from 'applicationinsights';
import { TraceTelemetry } from 'applicationinsights/out/Declarations/Contracts';

@Injectable()
export class AppInsightsService implements OnModuleInit {
    private client: TelemetryClient;

    onModuleInit() {
        const appInsights = ApplicationInsights
            .setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
            .setAutoDependencyCorrelation(true)
            .setAutoCollectRequests(true)
            .setAutoCollectPerformance(true, true)
            .setAutoCollectExceptions(true)
            .setAutoCollectDependencies(true)
            .setAutoCollectConsole(true, false)
            .setUseDiskRetryCaching(true)
            .setAutoCollectPreAggregatedMetrics(true)
            .setSendLiveMetrics(false)
            .setAutoCollectHeartbeat(false)
            .setAutoCollectIncomingRequestAzureFunctions(true)
            .setInternalLogging(false, true)
            .setDistributedTracingMode(ApplicationInsights.DistributedTracingModes.AI_AND_W3C)
            .enableWebInstrumentation(false)
            .start();

        this.client = ApplicationInsights.defaultClient;
    }

    info(message: string, severityLevel: ApplicationInsights.Contracts.SeverityLevel) {
        const traceTelemetry = { message, severityLevel };
        this.client.trackTrace(traceTelemetry);
    }
    warn(message: string) {
        const traceTelemetry = { message, severityLevel: ApplicationInsights.Contracts.SeverityLevel.Warning };
        this.client.trackTrace(traceTelemetry);
    }

    error(message: string) {

        const traceTelemetry = { message, severityLevel: ApplicationInsights.Contracts.SeverityLevel.Error };
        this.client.trackTrace(traceTelemetry);

    }

    critical(message: string) {
        const traceTelemetry = { message, severityLevel: ApplicationInsights.Contracts.SeverityLevel.Critical };
        this.client.trackTrace(traceTelemetry);
    }
}