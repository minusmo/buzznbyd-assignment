/* eslint-disable require-jsdoc */
import ExchangeInfo from '../models/ExchangeInfo.mjs';
import MongoDB from '../db/mongo.mjs';

export async function getExchangeRateFromDB({src, tgt}) {
  const {rate, date} = await MongoDB.get({src, tgt}); // {rate, date}
  return new ExchangeInfo(src, tgt, {rate, date});
}

export async function upsertExchangeRateFromDB(info) {
  const {src, tgt, rate, date} = await MongoDB.upsert(info);
  return new ExchangeInfo(src, tgt, {rate, date});
}

export async function deleteExchangeRateFromDB(info) {
  const {src, tgt, rate, date} = await MongoDB.delete(info);
  return new ExchangeInfo(src, tgt, {rate, date});
}
