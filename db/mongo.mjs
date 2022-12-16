/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import {MongoClient, ServerApiVersion} from 'mongodb';

const uri = 'mongodb+srv://superuser:gl5jXokZn5SaIDUO@buzznbyd.7qkfpyf.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

class MongoDB {
  static mongo = client
      .db('buzznbyd')
      .collection('ExchangeRates');

  static async get(query) {
    const result = await MongoDB.mongo.find(query).sort({'date': -1}).limit(1).toArray()[0];
    const exchangeRate = {...result};
    delete exchangeRate['_id'];
    return exchangeRate;
  }

  static async upsert(upsertInfo) {
    const {src, tgt} = upsertInfo;
    const upsertDoc = {
      src: upsertInfo.src,
      tgt: upsertInfo.tgt,
      rate: upsertInfo.rate,
      date: upsertInfo.date ? upsertInfo.date : new Date().toUTCString(),
    };
    const options = {upsert: true};
    const result = await MongoDB.mongo.updateOne({src, tgt}, upsertDoc, options);
    return result.upsertedCount > 0 ? Object.assign({}, upsertDoc) : {};
  }

  static async delete(deleteInfo) {
    const {src, tgt} = deleteInfo;
    const findResult = await MongoDB.mongo.findOne({src, tgt});
    let deleteResult = 0;
    if (findResult) {
      deleteResult = await MongoDB.mongo.deleteOne(deleteInfo);
    }
    const exchangeRate = {...findResult};
    delete exchangeRate['_id'];
    return deleteResult.deletedCount > 0 ? exchangeRate : {};
  }
}

export default MongoDB;
