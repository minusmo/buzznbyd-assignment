import { GraphQLObjectType, GraphQLSchema, buildSchema, GraphQLInputObjectType } from "graphql";

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

const ExchangeInfo = new GraphQLObjectType({
    name: "exchangeInfo",
    fields: (src, tgt) => ({
        src: String,
        tgt: String,
        rate: Float
    })
})

const InputUpdateExchangeInfo = GraphQLInputObjectType({
    name: ""
})