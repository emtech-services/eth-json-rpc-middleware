import { PollingBlockTracker } from 'eth-block-tracker';
import { JsonRpcMiddleware } from 'json-rpc-engine';
import { Block } from './utils/cache';
interface BlockRefRewriteMiddlewareOptions {
    blockTracker?: PollingBlockTracker;
}
export declare function createBlockRefRewriteMiddleware({ blockTracker, }?: BlockRefRewriteMiddlewareOptions): JsonRpcMiddleware<string[], Block>;
export {};
