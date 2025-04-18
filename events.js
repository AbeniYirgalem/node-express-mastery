// Event is a signal that something has happened.

const EventEmitter = require("events");
const emitter = new EventEmitter();

// emit - Making a noise, produce - Signalling

// Register a Listener
emitter.on("messageLogged", () => {
  console.log("Listener called");
});

// Raise an event
emitter.emit("messageLogged");

// Listener
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
  });
  
  // Emit the event
  emitter.emit('greet', 'Abeni Yirgalem');
