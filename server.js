const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/', express.static('static'));

//Another way to server out files via routing
app.get('/schedule', (req,res) => {
    res.sendFile('myschedule.html', {root: './static'});
});

app.listen(PORT, () => {
    console.log("Server is running on " + PORT + " port");
});



