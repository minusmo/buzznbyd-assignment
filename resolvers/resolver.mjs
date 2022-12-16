import {
  getExchangeRateFromDB,
  upsertExchangeRateFromDB,
  deleteExchangeRateFromDB,
} from './utils.mjs';

export const Resolver = {
  async getExchangeRate({src, tgt}) {
    try {
      return await getExchangeRateFromDB({src, tgt});
    } catch (e) {
      return null;
    }
  },
  async postExchangeRate({info}) {
    try {
      return await upsertExchangeRateFromDB(info);
    } catch (e) {
      return null;
    }
  },
  async deleteExchangeRate({info}) {
    try {
      return await deleteExchangeRateFromDB(info);
    } catch (e) {
      return null;
    }
  },
};
