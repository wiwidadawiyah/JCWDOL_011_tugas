const Queue = require("./queue")

const task = new Queue()

task.addService("Customer_A")
task.addService("Customer_B")
task.addService("Customer_C")
task.addService("Customer_D")

console.log(task.tasks)
task.run()