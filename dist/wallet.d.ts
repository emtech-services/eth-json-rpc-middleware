import { JsonRpcMiddleware, JsonRpcRequest } from 'json-rpc-engine';
import { Block } from './utils/cache';
interface TransactionParams {
    from: string;
}
interface MessageParams extends TransactionParams {
    data: string;
}
interface TypedMessageParams extends MessageParams {
    version: string;
}
interface WalletMiddlewareOptions {
    getAccounts: (req: JsonRpcRequest<unknown>) => Promise<string[]>;
    processDecryptMessage?: (msgParams: MessageParams, req: JsonRpcRequest<unknown>) => Promise<Record<string, unknown>>;
    processEncryptionPublicKey?: (address: string, req: JsonRpcRequest<unknown>) => Promise<Record<string, unknown>>;
    processEthSignMessage?: (msgParams: MessageParams, req: JsonRpcRequest<unknown>) => Promise<Record<string, unknown>>;
    processPersonalMessage?: (msgParams: MessageParams, req: JsonRpcRequest<unknown>) => Promise<Record<string, unknown>>;
    processTransaction?: (txParams: TransactionParams, req: JsonRpcRequest<unknown>) => Promise<Record<string, unknown>>;
    processSignTransaction?: (txParams: TransactionParams, req: JsonRpcRequest<unknown>) => Promise<Record<string, unknown>>;
    processTypedMessage?: (msgParams: MessageParams, req: JsonRpcRequest<unknown>, version: string) => Promise<Record<string, unknown>>;
    processTypedMessageV3?: (msgParams: TypedMessageParams, req: JsonRpcRequest<unknown>, version: string) => Promise<Record<string, unknown>>;
    processTypedMessageV4?: (msgParams: TypedMessageParams, req: JsonRpcRequest<unknown>, version: string) => Promise<Record<string, unknown>>;
}
export declare function createWalletMiddleware({ getAccounts, processDecryptMessage, processEncryptionPublicKey, processEthSignMessage, processPersonalMessage, processTransaction, processSignTransaction, processTypedMessage, processTypedMessageV3, processTypedMessageV4, }: WalletMiddlewareOptions): JsonRpcMiddleware<string, Block>;
export {};
