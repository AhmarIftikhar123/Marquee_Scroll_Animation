class Throttle {
  constructor() {
    this.shouldWait = false;
    this.preArgs = null;
  }

  throttling(callback, delay) {
    const timeOut = () => {
      if (this.preArgs !== null) {
        callback(...this.preArgs); // Call with saved arguments
        this.preArgs = null; // Reset saved arguments
        setTimeout(timeOut, delay); // Set a new timeout if needed
      } else {
        this.shouldWait = false; // Reset flag after timeout if no args to process
      }
    };

    return (...args) => {
      if (this.shouldWait) {
        this.preArgs = args; // Save the latest arguments
        return; // Ignore call if we're throttling
      }

      callback(...args); // Execute the callback immediately

      this.shouldWait = true; // Set flag to throttle further calls

      // Set a timeout to reset the flag and call the callback with new arguments
      setTimeout(timeOut, delay);
    };
  }
}

const throttle_obj = new Throttle();
export default throttle_obj;
