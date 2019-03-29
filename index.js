const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());


server.get('/api/projects', async (req, res) => {
    try {
        const projects = await db('projects');
        console.log(projects);
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json(error);
    }
});

server.post('/api/projects', async (req, res) => {
    try {
        const [id] = await db('projects').insert(req.body);
        const newProject = await db('projects')
            .where({ id: id })
            .first();
        
        res.status(200).json(newProject);
    } catch (error) {
        res.status(500).json(error);
    }
});


const port = 5000;
server.listen(port, () => {
    console.log(`\n** API running on http://localhost:${port} **\n`)
});