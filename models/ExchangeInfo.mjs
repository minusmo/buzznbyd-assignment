/* eslint-disable require-jsdoc */
export default class ExchangeInfo {
  constructor(src, tgt, {rate, date}) {
    this.src = src;
    this.tgt = tgt;
    this.rate = rate;
    this.date = date;
  }
}
