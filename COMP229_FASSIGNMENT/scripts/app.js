//IFEE -- Immediately invoked function expression
(function(){

    function start()
    {
      console.log("App Started...")
    }
     window.addEventListener("Load", start);
  })();

const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('home'); // Renders views/home.ejs
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Renders views/contact.ejs
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});