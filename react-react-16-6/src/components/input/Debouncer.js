export default class Debouncer {
  constructor(delay = 300) {
    this.delay = delay;
    this.timer = null;
  }

  run(callback) {
    clearTimeout(this.timer);
    this.timer = setTimeout(callback, this.delay);
  }

  cancel() {
    clearTimeout(this.timer);
  }
}
