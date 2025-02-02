class Debouncer {
  constructor(delay = 500) {
    this.delay = delay;
    this.timerId = null;
  }

  debounce(callback) {
    return (...args) => {
      if (this.timerId) {
        clearTimeout(this.timerId);
      }
      this.timerId = setTimeout(() => {
        callback.apply(this, ...args);
      }, this.delay);
    };
  }
}

// Usage
const debouncer = new Debouncer();
export default debouncer;
