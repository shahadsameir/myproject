const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require('./routes/api/posts');
const pro=require('./routes/api/project');
const tas=require('./routes/api/task');
app.use('/api/posts', posts);
app.use('/api/project', pro);
app.use('/api/task', tas);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));