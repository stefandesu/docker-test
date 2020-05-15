const express = require('express');

// Constants
const PORT = 8091;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    console.log("blubb...")
    process.exit(1)
  }, 2000)
  res.send('Hello World Version ' + require("./package.json").version);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
