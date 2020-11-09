import { MongoClient, Db } from 'mongodb';

export let client: MongoClient;
export let database: Db;

const url = process.env.DB_URI;

const ConnectDatabase = async (): Promise<Db> => {
  if (!database) {
    console.info(`connecting to database...`)
  }
  client = await MongoClient.connect(url ?? '', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
      database = client.db(process.env.DB_TARGET ?? '')
  
  return database;
}

export default ConnectDatabase;