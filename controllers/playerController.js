require('dotenv').config;
const knex = require('knex')(require('../knexfile'));
const { v4: uuidv4 } = require('uuid');
const bcrypt =  require('bcrypt');

const jwt = require('jsonwebtoken');


exports.newPlayer = async (req, res) => {
    try {

        const hashedPass = await bcrypt.hash(req.body.password, 10);

        const newPlayer =  {
            id: uuidv4(),
            email: req.body.email,
            password: hashedPass
        }

        const data = await knex('player').insert(newPlayer);

        res.status(201).send();

    } catch(err) {
        res.status(400).send(`Error creating new player ${err}`);
    }
}



exports.loginPlayer = async (req, res) => {
    const data = await knex('player').where({"email": req.body.email});
    if(data === null) {
        return res.status(400).send('Cannot find user');
    }

    try {
        if(await bcrypt.compareSync(req.body.password, data[0].password)) {
            const token = jwt.sign({data: data[0]}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "900s"});
            res.status(201).send(token);
        } else {
            res.send('Not Allowed');
        }
    } catch {
        res.status(500).send();
    }
}
