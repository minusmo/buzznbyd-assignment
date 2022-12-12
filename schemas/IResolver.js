import {buildSchema} from 'graphql';

export const IResolver = buildSchema(`
    type ExchangeInfo @key(fields: ["src", "tgt"]) {
        src: String!
        tgt: String!
        rate: Float!
        date: String!
    }

    input InputDeleteExchangeInfo {
        src: String!
        tgt: String!
        date: String!
    }

    input InputUpdateExchangeInfo {
        src: String!
        tgt: String!
        rate: Float!
        date: String
    }

    type Query {
        getExchangeRate(src: String!, tgt: String!): ExchangeInfo
    }

    type Mutation {
        postExchangeRate(info: InputUpdateExchangeInfo): ExchangeInfo
        deleteExchangeRate(info: InputDeleteExchangeInfo): ExchangeInfo
    }
`);
