import {graphql} from 'graphql';
import {IResolver} from '../schemas/IResolver.mjs';
import {Resolver} from '../resolvers/resolver.mjs';

/* eslint-disable require-jsdoc */
function testSuite() {
  getTest();
};

function getTest() {
  graphql(
      IResolver,
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

testSuite();
// export default testsuite;
