import { ApolloServer } from 'apollo-server-micro'
import { schema } from '@lib/schema'
import "graphql-import-node";

const apolloServer = new ApolloServer({ schema })

export const config = {
  api: {
    bodyParser: false,
  },
}

async function start(req: any, res: any) {
  return await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

export default start;