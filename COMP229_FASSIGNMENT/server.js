const express = require('./config/express');
// const express = require('express');
const app = express();
const route = require('./routes/routes');


app.set('views', './app/views');
app.set('view engine', 'ejs');
app.use('/', route);

app.listen(3000);

module.exports = app;




 