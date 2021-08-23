import { PollingBlockTracker } from 'eth-block-tracker';
import { JsonRpcMiddleware } from 'json-rpc-engine';
import { Block } from './utils/cache';
interface BlockCacheMiddlewareOptions {
    blockTracker?: PollingBlockTracker;
}
export declare function createBlockCacheMiddleware({ blockTracker, }?: BlockCacheMiddlewareOptions): JsonRpcMiddleware<string[], Block>;
export {};
