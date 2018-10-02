var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./models');
var app = require('express')();
var path = require('path');
var PORT = process['env']['PORT'] || 63453;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public/build/static')));

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'build', 'index.html'));
});

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('App listening on PORT ' + PORT);
    });
});