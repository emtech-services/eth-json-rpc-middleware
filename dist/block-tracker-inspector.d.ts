import { PollingBlockTracker } from 'eth-block-tracker';
import { JsonRpcMiddleware } from 'json-rpc-engine';
import { Block } from './utils/cache';
interface BlockTrackerInspectorMiddlewareOptions {
    blockTracker: PollingBlockTracker;
}
export declare function createBlockTrackerInspectorMiddleware({ blockTracker, }: BlockTrackerInspectorMiddlewareOptions): JsonRpcMiddleware<string[], Block>;
export {};
