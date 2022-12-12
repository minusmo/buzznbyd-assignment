import { GraphQLObjectType, GraphQLSchema, buildSchema } from "graphql";

const QUERY = buildSchema(`
    type Query {
        "query": getExchangeRate(src: String!, tgt: String!): ExchangeInfo
    }
`);

const MUTATION = buildSchema(`
    type Mutation {
        "mutation": {
            postExchangeRate(info: InputUpdateExchangeInfo): ExchangeInfo,
            deleteExchangeRate(info: InputDeleteExchangeInfo): ExchangeInfo
        },
    }
`);

