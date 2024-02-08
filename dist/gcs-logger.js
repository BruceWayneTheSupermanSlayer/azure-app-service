"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppInsightsService = void 0;
const common_1 = require("@nestjs/common");
const ApplicationInsights = require("applicationinsights");
let AppInsightsService = class AppInsightsService {
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
    info(message, severityLevel) {
        const traceTelemetry = { message, severityLevel };
        this.client.trackTrace(traceTelemetry);
    }
    warn(message) {
        const traceTelemetry = { message, severityLevel: ApplicationInsights.Contracts.SeverityLevel.Warning };
        this.client.trackTrace(traceTelemetry);
    }
    error(message) {
        const traceTelemetry = { message, severityLevel: ApplicationInsights.Contracts.SeverityLevel.Error };
        this.client.trackTrace(traceTelemetry);
    }
    critical(message) {
        const traceTelemetry = { message, severityLevel: ApplicationInsights.Contracts.SeverityLevel.Critical };
        this.client.trackTrace(traceTelemetry);
    }
};
exports.AppInsightsService = AppInsightsService;
exports.AppInsightsService = AppInsightsService = __decorate([
    (0, common_1.Injectable)()
], AppInsightsService);
//# sourceMappingURL=gcs-logger.js.map