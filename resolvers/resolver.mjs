import MongoDB from '../db/mongo.mjs';
import {
  getExchangeRateFromDB,
  upsertExchangeRateFromDB,
  deleteExchangeRateFromDB,
} from './utils.mjs';

const db = new MongoDB();

export const Resolver = {
  getExchangeRate({src, tgt}) {
    try {
      return getExchangeRateFromDB(src, tgt, db);
    } catch (e) {
      return null;
    }
  },
  postExchangeRate({info}) {
    try {
      return upsertExchangeRateFromDB(info, db);
    } catch (e) {
      return null;
    }
  },
  deleteExchangeRate({info}) {
    try {
      return deleteExchangeRateFromDB(info, db);
    } catch (e) {
      return null;
    }
  },
};
