const {Songs} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Songs.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to load songs'
      })
    }
  },
  async show (req, res) {
    try {
      const song = await Songs.findById(req.param.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error occured trying to load songs'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Songs.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to create songs'
      })
    }
  }
}
