# Peer Robot!

Peer Robot can be there for you if your friends aren't updating their status. Peer Robot is [peer-status-feed](https://github.com/joehand/peer-status-feed) compliant robot that can beep and boop with the best of them. 

Peer robot sends out status messages on creation and when new friends connect. So peer robot will always have your back.

## Installation 

```
npm install -g peer-robot
```

## Usage

Run `peer-robot` to make a robot named `robot` that will beep and boop messages. 

The robot updates their status when:

* The robot is created
* A new friend connects
* 5 seconds after a new connection it re-emits the original status in preparation of welcoming more new friends!

## API

You can use peer robot in your modules too! Check out `cli.js` for usage. Beep boop to other robots for double the beep boop fun.

### `var robot = peerRobot('robot', cb)`

Set name with first argument. We recommend `robot` so as to not confuse our less silicon-y friends. Call back will return `(err, key)`. 

## License

MIT