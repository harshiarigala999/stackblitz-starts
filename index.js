const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
   res.send("Welcome to Stock Portfolio Analysis API");
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
