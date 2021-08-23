import { JsonRpcMiddleware } from 'json-rpc-engine';
import { SafeEventEmitterProvider, Block } from './utils/cache';
export declare function providerFromMiddleware(middleware: JsonRpcMiddleware<string[], Block>): SafeEventEmitterProvider;
