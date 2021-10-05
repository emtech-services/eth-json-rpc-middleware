# eth-json-rpc-middleware

Ethereum-related middleware for [`json-rpc-engine`](https://github.com/MetaMask/json-rpc-engine) where *json-rpc-engine* is a generic tool for processing JSON-RPC requests and responses. 
It provides a Web3 __HttpProvider__ like interface to the client applications so that any JSON-RPC request can be processed before either forwarding to actual ethereum client or dropping altogether. 

## Usage
### Client Side

For client-side usage, please refer to [keyvault-wallet-provider](https://github.com/emtech-services/keyvault-wallet-provider) repo.
### Server Side

```javascript
const {createFetchMiddleware} = require('./dist');
let engine = new JsonRpcEngine();
const rpcUrl = 'http://127.0.0.1:8545';
const restrictedAccounts = ['0x3d742892b4cf9df7d63fcefc77a730c00be585db'];
//Adding a handler to check for restricted accounts
engine.push(function (req, res, next, end) {
    if(req.method == 'eth_getBalance'){
        if(restrictedAccounts.indexOf(req.params[0].toLowerCase()) != -1)
        {
            console.log('stopping access to ', req.method, 'for account ', req.params[0]);
            res.error = {code: 1, message: "Unauthorized access", data: [{code: 104, message: "Access to non-owner accounts not allowed"}]};
            res.result = 0;
            end();
        }
    }
    next();
});
//Adding a handler to fetch the response from configured ethereum client
engine.push(createFetchMiddleware({ rpcUrl }));
//Adding a handler to update the response before sending it back to user
engine.push(function (req, res, next, end) {
    if (req.method == 'web3_clientVersion') {
        res.result = res.result+"/futuremtech_0.0.1";
    }
    end();
});
// Start the websocket server
const wss = new WebSocket.Server({port: 8080});
wss.on('connection', function connection(ws) {
    ws.on('message', function message(request) {
        var req = JSON.parse(request);

        engine.handle(req, function (err, response) {
            ws.send(JSON.stringify(response));
        });
        
    });
});
```
__Note :__ In case of websocket connection, the fetch client (*createFetchMiddleware*) does not work. Instead, we can check the protocol and pass it on to a Web3 WebSocketProvider.

See tests for more usage details.

## Running Tests

`yarn test` or `npm run test`

__Note:__ We have submitted a patch to [upstream branch](https://github.com/MetaMask/eth-json-rpc-middleware) to support call to *eth_signTransaction* and *Web3 Providers*. Once it is released, we can directly refer to the npm package instead of this repo.
## See Also

- [`eth-json-rpc-filters`](https://github.com/MetaMask/eth-json-rpc-filters).
- [`eth-json-rpc-infura`](https://github.com/MetaMask/json-rpc-infura).
- [`json-rpc-engine`](https://github.com/MetaMask/json-rpc-engine).
