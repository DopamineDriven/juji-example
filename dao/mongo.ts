import { MongoClient, Db } from 'mongodb';

const { DB_URI, DB_TARGET } = process.env;

if (!DB_URI) {
  throw new Error('Please define the DB_URI variable in .env.local')
}

if (!DB_TARGET) {
  throw new Error('Please define the DB_TARGET inside .env.local')
}

export let client: MongoClient;
export let database: Db;

const url = DB_URI;

const ConnectDatabase = async (): Promise<Db> => {
  if (!database) {
    console.info(`connecting to database...`)
    client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      database = client.db(DB_TARGET)
  }
  return database;
}

export default ConnectDatabase;