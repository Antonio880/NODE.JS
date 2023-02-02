let { EventEmitter } = require('events');

let events = new EventEmitter();

/* events.on('SaySomething', (message) => console.log('I like to', message))
 */

events.once('SaySomething', (message) => console.log('I like to', message))//Dispara somente uma vez
events.emit('SaySomething', "Thaís")