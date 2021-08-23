import { JsonRpcMiddleware } from 'json-rpc-engine';
import { Block } from './utils/cache';
export declare function createInflightCacheMiddleware(): JsonRpcMiddleware<string[], Block>;
