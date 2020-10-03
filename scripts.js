"use strict";

class CountdownTimer {
  constructor(options) {
    this.targetDate = options.targetDate;
    this.daysRef = document.querySelector(
      options.selector + " span.value[data-value=days]"
    );
    this.hoursRef = document.querySelector(
      options.selector + " span.value[data-value=hours]"
    );
    this.minutesRef = document.querySelector(
      options.selector + " span.value[data-value=mins]"
    );
    this.secondsRef = document.querySelector(
      options.selector + " span.value[data-value=secs]"
    );
  }

  startTime() {
    const idInterval = setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
      this.showTime(deltaTime);
      if (deltaTime <= 0) {
        clearInterval(idInterval);
      }
    }, 1000);
  }

  showTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minutesRef.textContent = mins;
    this.secondsRef.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 17, 2020"),
});

timer.startTime();
