import {createServer} from "./server";
import {router} from "./router";
import { createClient } from "./client";
import { withLogging } from "./middleware";

// Add miidleware to procedures 
router.greet = withLogging(router.greet);

// Start the server 
const server = createServer(router);
server.listen(3000, () => console.log("Server running on http://localhost:3000"));

// Call the procedure from the client
const client = createClient(router);
client.call("greet", {name: "Alice"}).then(console.log);
client.call("add", {a:2, b:3}).then(console.log);