/* eslint-disable require-jsdoc */
import {graphql} from 'graphql';
import {ExchangeRateSchema} from '../schemas/ExchangeRateSchema.mjs';
import {Resolver} from '../resolvers/resolver.mjs';

class GQ {
  static async executeQuery(grapqlQuery) {
    return await graphql(
        ExchangeRateSchema,
        grapqlQuery,
        Resolver,
    );
  }
}
export default GQ;
