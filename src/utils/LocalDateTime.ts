function formatTime(time: number) {
  return time < 10 ? `0${time}` : `${time}`;
}

class LocalDateTime {
  private readonly localDateTime: Date;

  constructor(time: string | number) {
    if (Number.isNaN(new Date(time).getTime())) {
      throw new Error('time is not a date time string.');
    }

    this.localDateTime = new Date(time);
  }

  get year() {
    return this.localDateTime.getFullYear();
  }

  get month() {
    return this.localDateTime.getMonth();
  }

  get date() {
    return this.localDateTime.getDate();
  }

  get day() {
    return this.localDateTime.getDay();
  }

  get hours() {
    return formatTime(this.localDateTime.getHours());
  }

  get minutes() {
    return formatTime(this.localDateTime.getMinutes());
  }

  get seconds() {
    return formatTime(this.localDateTime.getSeconds());
  }

  get formattedTime() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }
}

export default LocalDateTime;
