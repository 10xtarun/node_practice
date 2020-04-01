//https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
//Knowledge of EventEmitter(class) and Stream
//emitter emits event and listeners are called

/*understanding emitter*/
//https://nodejs.org/api/events.html#events_events
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

//EventEmitter instance with single listener
const myEmitter = new MyEmitter();
//.on() method is used to register listeners
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
//.emit() is used to trigger the event
myEmitter.emit('event');
//with paramters in .emit(), use 'this' to reference the calling instance

/*Ansyc Vs Sync*/
//setImmediate() and process.nextTick() makes listeners async
