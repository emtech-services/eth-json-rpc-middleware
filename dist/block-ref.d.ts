import { PollingBlockTracker } from 'eth-block-tracker';
import { JsonRpcMiddleware } from 'json-rpc-engine';
import { Block, SafeEventEmitterProvider } from './utils/cache';
interface BlockRefMiddlewareOptions {
    blockTracker?: PollingBlockTracker;
    provider?: SafeEventEmitterProvider;
}
export declare function createBlockRefMiddleware({ provider, blockTracker, }?: BlockRefMiddlewareOptions): JsonRpcMiddleware<string[], Block>;
export {};
