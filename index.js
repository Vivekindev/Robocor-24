const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(express.static(path.join(__dirname, "./")));

app.get('*/abstractProjectSymposium', function(_, res) {
    res.sendFile(path.join(__dirname, "./client/dist/assets/abstract.docx"), function(err) {
        res.status(500).send(err);
    });
});


app.get('*', function(_, res) {
    res.sendFile(path.join(__dirname, "./client/dist/index.html"), function(err) {
        res.status(500).send(err);
    });
});


app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});
