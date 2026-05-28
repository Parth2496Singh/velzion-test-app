const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<div style="font-family: sans-serif; text-align: center; margin-top: 50px;"><h1>🚀 Velzion BYOC Engine is LIVE!</h1><p>Ephemeral Preview Environment dynamically compiled and deployed via Paketo Buildpacks.</p><p style="color: #00e676; font-weight: bold;">Zero CI/CD Pipeline Required.</p></div>');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
