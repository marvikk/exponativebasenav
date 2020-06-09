const express = require('express');

const app = express();
var cors = require('cors');

app.use(cors());

app.get('/api/customers', (req, res) => {

  const customers = [
  { title: 'Go to the School', isFinished: true },
  { title: 'Prepare tasks for today', isFinished: false },
  { title: 'Team meeting', isFinished: false },
  { title: 'Commit tasks changed', isFinished: false }
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));