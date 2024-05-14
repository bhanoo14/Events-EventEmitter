const EventEmmiter = require("events")

const event = new EventEmmiter();


event.on("sayHelo", ()=>{
    console.log("Hello User I am Bhaanoo Vishwakarma");
})

event.emit("sayHello")
