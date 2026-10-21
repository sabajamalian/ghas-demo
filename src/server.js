const { exec } = require("node:child_process");
const express = require("express");
const _ = require("lodash");

const app = express();
const port = process.env.PORT || 3000;

// Fake credential shaped like a real secret so secret scanning has a safe demo finding.
const demoStripeKey = "sk_live_51M3DemoOnly0123456789abcdefghijklmnop";

app.get("/", (_request, response) => {
  response.send(`
    <h1>GitHub Advanced Security Demo</h1>
    <p>This app intentionally contains security findings.</p>
    <ul>
      <li><a href="/hello?name=GHAS">Reflected input demo</a></li>
      <li><a href="/lookup?host=github.com">Command injection demo</a></li>
    </ul>
  `);
});

app.get("/hello", (request, response) => {
  const name = _.toString(request.query.name || "world");
  response.send(`<h1>Hello, ${name}</h1>`);
});

app.get("/lookup", (request, response) => {
  const host = request.query.host || "github.com";

  exec(`nslookup ${host}`, (error, stdout, stderr) => {
    response.type("text").send(error ? stderr : stdout);
  });
});

app.listen(port, () => {
  console.log(`GHAS demo listening on http://localhost:${port}`);
  console.log(`Demo credential loaded: ${demoStripeKey.slice(0, 10)}...`);
});
