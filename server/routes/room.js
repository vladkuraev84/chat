const express = require('express');
const roomRouter = express.Router();

const rooms = [
    {
        id: 1,
        name: 'GENERAL'
    },
    {
        id: 2,
        name: 'AGENTS'
    },
    {
        id: 3,
        name: 'INDIVIDUALS'
    },
]

// route for get rooms
roomRouter.get('/', (req,res) => {
    res.send(rooms)
})

module.exports = roomRouter
