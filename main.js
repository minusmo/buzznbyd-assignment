import { GraphQLObjectType, GraphQLSchema, buildSchema, GraphQLInputObjectType, GraphQLOutputType, GraphQLNonNull, GraphQLString } from "graphql";

const SCHEMA = buildSchema(`
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

const InputUpdateExchangeInfo = GraphQLInputObjectType({
    name: ""
})
