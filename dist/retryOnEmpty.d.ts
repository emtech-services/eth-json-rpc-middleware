import { PollingBlockTracker } from 'eth-block-tracker';
import { JsonRpcMiddleware } from 'json-rpc-engine';
import { Block, SafeEventEmitterProvider } from './utils/cache';
interface RetryOnEmptyMiddlewareOptions {
    provider?: SafeEventEmitterProvider;
    blockTracker?: PollingBlockTracker;
}
export declare function createRetryOnEmptyMiddleware({ provider, blockTracker, }?: RetryOnEmptyMiddlewareOptions): JsonRpcMiddleware<string[], Block>;
export {};
