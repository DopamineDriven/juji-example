// import { QueryResolvers } from '@lib/type-defs.graphqls';
// import { ResolverContext } from './apollo'
// import { UserRemote } from '../__generated__/lib/partial.graphql';
import { UserRemoteDbObject } from 'dao/types';
import ConnectDatabase from 'dao/mongo';
import { Collection, ObjectID } from 'mongodb';
import { GraphQLResolveInfo } from 'graphql';
import { UserResolvers } from '../__generated__/lib/type-defs.graphqls';
import { UserRemote } from './type-defs.graphqls';

const dbPromise = ConnectDatabase();

const getCollection = async (): Promise<Collection<UserRemoteDbObject>> => {
  const DB = await dbPromise;
  return DB.collection<UserRemoteDbObject>('UserRemote')
}

const fromUserRemoteObject = (dbObject: UserRemoteDbObject): UserRemote => ({
  id: dbObject._id.toHexString(),
  name: dbObject.name,
  status: dbObject.status
});

const Query = {
  viewer: (_parent: any, _args: any, _context: UserResolvers, _info: GraphQLResolveInfo) => {
    return { id: String(1), name: 'John Smith', status: 'cached' }
  },
  viewerRemote: async (_parent: any, _args: any, userID : UserRemoteDbObject, _context: UserRemote, _info: GraphQLResolveInfo ) => {
    const collection = await getCollection();
    const { _id } = userID;
    if (_id != null) {
      const dbObject = await collection.findOne({
        _id: ObjectID.createFromHexString(_id.toHexString())
      })
      if (dbObject !=null && dbObject._id !=null) return fromUserRemoteObject(dbObject)
    }
    // return _context.db.collection('juji-example').findOne().then((data: UserRemote) => {
    //   return data.id && data.name && data.status
  }
}

export default { Query }
