import { JsonRpcMiddleware } from 'json-rpc-engine';
import { Block, SafeEventEmitterProvider } from './utils/cache';
export declare function providerAsMiddleware(provider: SafeEventEmitterProvider): JsonRpcMiddleware<string[], Block>;
export declare function ethersProviderAsMiddleware(provider: SafeEventEmitterProvider): JsonRpcMiddleware<string[], Block>;
