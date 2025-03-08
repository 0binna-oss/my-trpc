"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const router_1 = require("./router");
const client_1 = require("./client");
const middleware_1 = require("./middleware");
// Add miidleware to procedures 
router_1.router.greet = (0, middleware_1.withLogging)(router_1.router.greet);
// Start the server 
const server = (0, server_1.createServer)(router_1.router);
server.listen(3000, () => console.log("Server running on http://localhost:3000"));
// Call the procedure from the client
const client = (0, client_1.createClient)(router_1.router);
client.call("greet", { name: "Alice" }).then(console.log);
client.call("add", { a: 2, b: 3 }).then(console.log);
