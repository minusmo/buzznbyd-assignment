/* eslint-disable require-jsdoc */
import MongoDB from '../db/mongo.mjs';

async function test() {
  await getTest();
  await upsertTest();
  await deleteTest();
}


async function getTest() {
  const getQuery = {
    src: 'krw',
    tgt: 'usd',
  };
  const result = await MongoDB.get(getQuery);
  console.log(result);
}

async function upsertTest() {
  const upsertQuery = {
    src: 'krw',
    tgt: 'usd',
    rate: 0.003,
  };
  const result = await MongoDB.upsert(upsertQuery);
  console.log(result);
}

async function deleteTest() {
  const deleteQuery = {
    src: 'krw',
    tgt: 'krw',
    date: '2022-11-28',
  };
  const result = await MongoDB.delete(deleteQuery);
  console.log(result);
}


test();
