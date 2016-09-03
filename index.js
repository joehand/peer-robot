var memdb = require('memdb')
var debounce = require('lodash.debounce')
var PeerStatus = require('peer-status-feed')

module.exports = function (name, cb) {
  var robot = PeerStatus({db: memdb()})
  var defaultMsg = 'hello. beep boop I am a robot.'
  var defaultStatus = {
    name: name,
    status: 'online',
    message: defaultMsg,
    timestamp: new Date()
  }

  robot.open(function () {
    robot.appendStatus(defaultStatus, function (err) {
      if (err) return cb(err)
      cb(null, robot.key)
    })

    robot._swarm.on('connection', debounce(respondConection, 3000))

    function respondConection () {
      setTimeout(function () {
        robot.appendStatus(defaultStatus)
      }, 5000)
      robot.appendStatus({
        name: name,
        status: 'busy',
        message: 'welcome new friend! beep boop I am a nice robot.',
        timestamp: new Date()
      })
    }
  })

  return robot
}
