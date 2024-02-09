const express = require('express');
const app = express();
const port = 3000; // You can use any available port


app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});



// /project-root
//   /public
//     login.html
//     login.css
//   server.js (or app.js, depending on your naming)
//   package.json