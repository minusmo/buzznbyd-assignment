/* eslint-disable require-jsdoc */
const mongo = {
  'krw,usd': {
    'rate': 0.0007450954094671824,
    'date': '2022-11-28',
  },
  'usd,krw': {
    'rate': 1342.11,
    'date': '2022-11-28',
  },
};

class MongoDB {
  constructor() {
    this.mongo = mongo;
  }

  get(query) {
    return this.mongo[query];
  }

  upsert(query, upsertInfo) {
    // const {rate, date} = upsertInfo;
    return Object.assign(this.mongo[query], upsertInfo);
  }

  delete(query) {
    const result = this.mongo[query];
    delete this.mongo[query];
    return result;
  }
}

export default MongoDB;
