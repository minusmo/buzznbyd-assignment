/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {MongoClient, ServerApiVersion} from 'mongodb';

const uri = '';
const client = new MongoClient(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

class MongoDB {
  static exchangeRates = client
      .db('buzznbyd')
      .collection('ExchangeRates');

  static async get(query) {
    const result = await MongoDB.exchangeRates.find(query).toArray();
    const exchangeRate = JSON.parse(JSON.stringify(result))[0];
    delete exchangeRate['_id'];
    return exchangeRate;
  }

  static async upsert(upsertInfo) {
    const {src, tgt} = upsertInfo;
    const now = new Date();
    const today = `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}`;
    const upsertDoc = {
      src: upsertInfo.src,
      tgt: upsertInfo.tgt,
      rate: upsertInfo.rate,
      date: upsertInfo.date ? upsertInfo.date : today,
    };
    const options = {upsert: true};
    const result = await MongoDB.exchangeRates.updateOne(
        {src, tgt},
        {
          $set: {
            rate: upsertDoc.rate,
            date: upsertDoc.date,
          },
        },
        options);
    return result.matchedCount > 0 ? upsertDoc : {};
  }

  static async delete(deleteInfo) {
    const findResult = await MongoDB.exchangeRates.findOne(deleteInfo);
    let deleteResult;
    if (findResult?._id) {
      deleteResult = await MongoDB.exchangeRates.deleteOne(deleteInfo);
      const exchangeRate = JSON.parse(JSON.stringify(findResult));
      delete exchangeRate['_id'];
      return deleteResult.deletedCount > 0 ? exchangeRate : {};
    }
    return {};
  }
}

export default MongoDB;
