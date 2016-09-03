#!/usr/bin/env node

var debounce = require('lodash.debounce')
var createRobot = require('.')

var robot = createRobot('robot', function (err, key) {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log('Robot activated. Prepare for a new world.')
  console.log('Add robot as friend:', key)

  robot._swarm.on('connection', debounce(respondConection, 3000))

  function respondConection () {
    console.log('I have a new friend! omg omg. Peers:', robot._swarm.connections)
  }
})
