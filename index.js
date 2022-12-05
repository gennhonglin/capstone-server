const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`we're live ${PORT}`)
});
