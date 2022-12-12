import { IResolver } from "../schemas/IResolver";
import { getExchangeRateFromDB, upsertExchangeRateFromDB, deleteExchangeRateFromDB } from "./utils";
const Resolver = {
    getExchangeRate({src, tgt}) {
        try {
            return getExchangeRateFromDB(src,tgt);
        }
        catch(e) {
            return null;
        }
    },
    postExchangeRate({info}) {
        try {
            return upsertExchangeRateFromDB(info);
        }
        catch(e) {
            return null;
        }
    },
    deleteExchangeRate({info}) {
        try {
            return deleteExchangeRateFromDB(info);
        }
        catch(e) {
            return null;
        }
    },
}