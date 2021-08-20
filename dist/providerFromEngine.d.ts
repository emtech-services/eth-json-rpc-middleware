import { JsonRpcEngine } from 'json-rpc-engine';
import { SafeEventEmitterProvider } from './utils/cache';
export declare function providerFromEngine(engine: JsonRpcEngine): SafeEventEmitterProvider;
