const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, () => {
    console.log("Server is running on " + PORT + " port");
});

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});


