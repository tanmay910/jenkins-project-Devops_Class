const express = require('express'); // Fix mismatched quotes
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {  // Fix 'reg' to 'req' and mismatched quotes
  res.send('Welcome to My Node.js App !!!'); // Fix mismatched quotes
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Fix $ (PORT to ${PORT}
});
