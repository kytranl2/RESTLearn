const express = require('express');
const app = express();
const port = 3000; 

/* The line app.use(express.json()); in an Express application is a way to incorporate middleware that parses 
incoming requests with JSON payloads. Essentially, it tells the Express app to automatically parse 
JSON-formatted request bodies and make the parsed data accessible 
through req.body in your route handlers or middleware functions.*/
app.use(express.json());

// in-memory data store
const items = []

// GET API to retrieve all items
app.get('/items', (req, res) => {
    res.json(items);
})

// POST API to create a new item 
app.post('/items', (req, res) => {
    const item = req.body; 
    items.push(item);
    res.status(201).send(`Item added with ID: ${item.id}`);
})

// PUT API to replace an item by ID 
app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const index = items.findIndex(item => item.id === item.id);
    if (index >= 0) {
        items[index] = req.body;
        res.send(`Item with ID: ${itemID} replaced.`);
    } else {
        res.status(404).send('Item not found.')
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})