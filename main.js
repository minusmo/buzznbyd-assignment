import { GraphQLObjectType, GraphQLSchema, GraphQLInputObjectType, GraphQLOutputType, GraphQLNonNull, GraphQLString } from "graphql";
import { IResolver } from "./schemas/IResolver";

const Resolver = {
    getExchangeRate({src, tgt}) {
        try {
            return getExchangeRateFromMongo(src,tgt);
        }
        catch(e) {
            return null;
        }
    },
    postExchangeRate({info}) {
        try {
            return upsertExchangeRateFromMongo(info);
        }
        catch(e) {
            return null;
        }
    },
    deleteExchangeRate({info}) {
        try {
            return deleteExchangeRateFromMongo(info);
        }
        catch(e) {
            return null;
        }
    },
}

