/* eslint-disable max-len */
import {graphql} from 'graphql';
import {ExchangeRateSchema} from '../schemas/ExchangeRateSchema.mjs';
import {Resolver} from '../resolvers/resolver.mjs';

/* eslint-disable require-jsdoc */
function testSuite() {
  getTest();
  upsertTest();
};

function getTest() {
  graphql(
      ExchangeRateSchema,
      `{ 
        getExchangeRate (src: \"krw\", tgt: \"usd\") { 
          src 
          tgt 
          rate 
          date
        }
      }`,
      Resolver,
  )
      .then((json) => console.log(json));
}

function upsertTest() {
  graphql(
      ExchangeRateSchema,
      `mutation { 
        postExchangeRate (info: { src: \"usd\", tgt: \"krw\", rate: 1342.11, date:\"2022-11-28\" }) { 
          src 
          tgt 
          rate 
          date 
        } 
      }`,
      Resolver,
  )
      .then((json) => console.log(json));
}

testSuite();
// export default testsuite;
