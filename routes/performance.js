const express = require ('express')
const router = express.Router()
const Performance = require('../models/Performances')

router.post('/', async (req, res) => {
  const performance = new Performance({
    date: req.body.date,
    target_time: req.body.target_time,
    working_time: req.body.working_time,
    achievement: req.body.achievement,
    overtime: req.body.overtime,
    day: req.body.day,
  })
  try {
    const savedPerformance = await performance.save()
    res.json(savedPerformance)
  } catch (error) {
    res.json({status: 500, message: error.message})
  }
})

router.get('/', async (req, res) => {

  const isStartDateIsNotEmpty = req.query.hasOwnProperty('startDate') && req.query.startDate.length > 0
  const isEndDateIsNotEmpty = req.query.hasOwnProperty('endDate') && req.query.endDate.length > 0
  const isSearchIsNotEmpty = req.query.hasOwnProperty('search') && req.query.search.length > 0

  let query = {}

 
  

  if (isStartDateIsNotEmpty && isEndDateIsNotEmpty) {
    query.date = {
      $gte: new Date(req.query.startDate), 
      $lte: new Date(req.query.endDate)
    }
  }

  if (isSearchIsNotEmpty) {
    query.$or = [{ target_time: req.query.search }, { working_time: req.query.search }, { achievement: req.query.search }, { overtime: req.query.search }]
  }

  try {
    console.log(query)
    const performance = await Performance.find(query)
    console.log(performance)
    res.json(performance)
  } catch (error) {
    res.status(500).json({status: 500, message: error.message})
  }
})

router.get('/year', (req, res) => {
  res.send(req.body)
})

router.post('/year', (req, res) => {
  res.send(req.body)
})


module.exports = router;