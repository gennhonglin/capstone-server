const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

require('dotenv').config();
const PORT = process.env.PORT;

const playerRoutes = require("./routes/playerRoute");
const postRoutes = require("./routes/postRoute");
const commentRoutes = require("./routes/commentRoute");


app.use('/', playerRoutes);
app.use('/', postRoutes);
app.use('/', commentRoutes)



app.listen(PORT, () => {
    console.log(`we're live ${PORT}`)
});
