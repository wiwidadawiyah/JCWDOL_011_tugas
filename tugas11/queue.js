//Queue Handle
class Queue {
    constructor() {
      this.tasks = [];
    }
    addService(task) {
      this.tasks.push(task);
    }
    process() {
      return new Promise((resolve) => {
        let randTime = Math.floor(Math.random() * 10) + 1;
        if (this.tasks.length > 0) {
          setTimeout(() => {
            let item = this.tasks.shift();
            console.log(item, "done in", randTime + " minutes");
            resolve(this.tasks);
          }, randTime * 60 * 1000);
        }
      });
    }
    async run() {
      while (this.tasks.length > 0) {
        await this.process();
      }
    }
  }
  module.exports = Queue;