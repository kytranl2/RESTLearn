/* Middleware can perform many tasks, such as:

Executing any code.
Making changes to the request and the response objects.
Ending the request-response cycle.
Calling the next middleware in the stack.
*/ 

const express = require('express');
const app = express();
const port = 3000;

/* the .use() method is a way to register middleware functions in your application's request-processing pipeline. 
Middleware functions are functions that have access to the 
request object (req), 
the response object (res), 
and the next middleware function in the application's request-response cycle. 
The next middleware function is commonly denoted by a variable named next.

Syntax of `.use()`  
app.use([path,] callback [, callback...])
path: (Optional) a path for which the middleware function is invoked; if not specified, defaults to "/"
callback: Middleware function(s) to be called. If multiple callbacks are provided, 
they are treated as a chain of middleware to be executed sequentially.
*/
app.use((req, res, next) => {
    console.log(`Received ${req.method} request on ${req.url}`);
    next();
})

app.use(express.json());

const basicAuthMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Basic ')) {
        return res.status(401).json({error: 'Missing or invalid authorization header'});
    }
    const base64Credentials = authHeader.split(' ')[1];
    const credential = Buffer.from(base64Credentials, 'base64').toString('ascii');

    const [username, password] = credential.split(':');

    if (username === 'admin' && password === 'password') {
        next();
    } else {
        res.status(403).json({error: 'Unauthorized'});
    }
}

app.post('/api/protected', basicAuthMiddleware, (req, res) => {
    res.json({message: `Hello, ${req.body.name}! You've accessed a protected route.`});
});

/* run below if any throw new Error('Test Error'); */ 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    console.log(`Example middleware app listening at http://localhost:${port}`);
});
