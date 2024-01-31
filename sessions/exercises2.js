class defaultDB {
    constructor({userName = 'default', password= 'default', port = 'default'} = {}) {
        this.userName = userName;
        this.password = password;
        this.port = port;
    }
    connect() {
        return `connected defaultDB`;
    }
    query(query) {
        return `result`;
    }
}

class TextDB {
    constructor({databaseName = 'default'} = {}) {
        this.databaseName = databaseName;
    }
    connect() {
        return `connected TextDB`;
    }
    query(query) {
        return `result`;
    }
}
class PostgresqlDB {
    constructor({user = 'default', host = 'default', database = 'default', password = 'default', port} = {}) {
        this.user = user;
        this.host = host;
        this.database = database;
        this.password = password;
        this.port = port;
    }
    connect() {
        return `connected PostgresqlDB`;
    }
    query(query) {
        return `result`;
    }
}
class InMemmoryDB {
    constructor({connectionName = 'default', database = 'default'} = {}) {
        this.connectionName = connectionName;
        this.database = database;
    }
    connect() {
        return `connected InMemoryDB`;
    }
    query(query) {
        return `result`;
    }
}

class databaseFactory {
    constructor() {
        this.database = defaultDB;
    }

    createDatabse(options) {
        const { databaseType, ...rest } = options;

        switch(databaseType) {
            case 'defaultDB':
                this.database = defaultDB;
                break;
            case 'TextDB':
                this.database = TextDB;
                break;
            case 'PostgresqlDB':
                this.database = PostgresqlDB;
                break;
            case 'InMemmoryDB':
                this.database = InMemmoryDB;
                break;
        }

        return new this.database(rest)
    }
}

const dataBaseFactory = new databaseFactory();

const databaseTextDB = dataBaseFactory.createDatabse({
    databaseType: 'TextDB',
    databaseName : 'TextDBName'
});

console.log(databaseTextDB);