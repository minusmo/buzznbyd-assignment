/* eslint-disable require-jsdoc */
import MongoDB from '../db/mongo.mjs';

async function test() {
  await getTest();
}


async function getTest() {
  const getQuery = {
    src: 'krw',
    tgt: 'usd',
  };
  const result = await MongoDB.mongo.find(getQuery).toArray();
  console.log(result);
}


test();
