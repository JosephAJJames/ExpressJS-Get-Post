const express = require('express');
const app = express();
let database = []
const bodyParser = require('body-parser');

app.use(express.static('public'));

// GET route
app.get('/', (req, res) => {
    res.sendFile("C:/Users/JoeCe/OneDrive/Documents/Udemy Projects/web-sockets/index.html")
});


// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    res = res.json()
    database.push(req.body.value)
    console.log(database)
});

// Start the server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});