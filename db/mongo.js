const mongo = {
    "krw,usd": {
        "rate": 0.0007450954094671824,
        "date": "2022-11-28"
    },
    "usd,krw": {
        "rate": 1342.11,
        "date": "2022-11-28"
    }
};

class MongoDB {
    constructor(mongo) {
        this.mongo = mongo;
    }

    get(query) {
        return this.mongo[query]
    }

    upsert(query, ) {
        this.mongo
        return this.mongo[query];
    }

    delete(query) {

    }
}

export default mongo;