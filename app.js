const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api",userRoutes);

const PORT = 3000;

app.listen(PORT,() => {
    console.log(`server is running on http localhost:${PORT}`);
});