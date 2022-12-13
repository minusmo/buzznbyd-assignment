/* eslint-disable require-jsdoc */
import * as ExchangeInfo from '../models/ExchangeInfo.mjs';

export function getExchangeRateFromDB(src, tgt, db) {
  const exchangeInfo = db.get(`${src},${tgt}`); // {rate, date}
  return new ExchangeInfo.ExchangeInfo(src, tgt, exchangeInfo);
}

export function upsertExchangeRateFromDB(info, db) {
  const {src, tgt, rate, date} = info;
  const exchangeInfo = db.upsert(`${src},${tgt}`, {rate, date});
  return new ExchangeInfo.ExchangeInfo(src, tgt, exchangeInfo);
}

export function deleteExchangeRateFromDB(info, db) {
  const {src, tgt, rate, date} = info;
  const exchangeInfo = db.delete(`${src},${tgt}`, {rate, date});
  return new ExchangeInfo.ExchangeInfo(src, tgt, exchangeInfo);
}
