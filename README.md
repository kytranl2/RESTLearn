"RESTful Review" 

Express is a minimal flexible Node.js web application framework. 
Key Features:

Framework for Node.js: Express runs within a Node.js environment, allowing developers to write server-side logic in JavaScript.
Middleware: Express uses a middleware model to enhance and compose web server functionality. Middleware functions can execute code, make changes to the request and response objects, end the request-response cycle, and call the next middleware function.
Routing: Express provides a powerful set of routing capabilities to control how an application responds to clients based on the URL and HTTP method.
Simplicity and Flexibility: With Express, you can structure your application as you see fit. There's no strict enforcement of how to organize your app, giving you the freedom to choose the most suitable architecture for your project.

In express-example, 
run "node [name].js" 

Curl commands in CMD:

server.js 
curl -X POST http://localhost:3000/items -H "Content-Type: application/json" -d "{\"id\": 1, \"name\": \"Item 1\"}"
curl http://localhost:3000/items

middlewareDemo.js 
curl -X POST http://localhost:3000/api/protected -H "Content-Type: application/json" -d "{\"name\": \"John\"}"
curl -X POST http://localhost:3000/api/protected -H "Content-Type: application/json" -H "Authorization: Basic wrongcredentials" -d "{\"name\": \"John\"}"
curl -X POST http://localhost:3000/api/protected -H "Content-Type: application/json" -H "Authorization: Basic YWRtaW46cGFzc3dvcmQ=" -d "{\"name\": \"John\"}"

