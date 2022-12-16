/* eslint-disable require-jsdoc */
import * as ExchangeInfo from '../models/ExchangeInfo.mjs';
import MongoDB from '../db/mongo.mjs';

export async function getExchangeRateFromDB({src, tgt}) {
  const exchangeInfo = await MongoDB.get({src, tgt}); // {rate, date}
  return new ExchangeInfo.ExchangeInfo(src, tgt, exchangeInfo);
}

export async function upsertExchangeRateFromDB(info) {
  const exchangeInfo = await MongoDB.upsert(info);
  return new ExchangeInfo.ExchangeInfo(src, tgt, exchangeInfo);
}

export async function deleteExchangeRateFromDB(info) {
  const {src, tgt, rate, date} = info;
  const exchangeInfo = await MongoDB.delete(`${src},${tgt}`, {rate, date});
  return new ExchangeInfo.ExchangeInfo(src, tgt, exchangeInfo);
}
