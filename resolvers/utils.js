import { ExchangeInfo } from "../models/ExchangeInfo";

export function getExchangeRateFromDB(src, tgt, db) {
    const exchangeInfo = db.get(`${src},${tgt}`);
    return new ExchangeInfo(exchangeInfo);
}

export function upsertExchangeRateFromDB(info, db) {
    const { src, tgt, rate, date } = info;
    const exchangeInfo = db.upsert(`${src},${tgt}`, {rate, date});
    return new ExchangeInfo(exchangeInfo);
}

export function deleteExchangeRateFromDB(info, db) {
    const { src, tgt, rate, date } = info;
    const exchangeInfo = db.delete(`${src},${tgt}`, {rate, date});
    return new ExchangeInfo(exchangeInfo);
}