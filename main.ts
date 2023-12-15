import { ApolloServer} from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { Query } from "./resolvers/query.ts";
import { Character } from "./resolvers/character.ts";
import { Episode } from "./resolvers/episode.ts";
import { typeDefs } from "./schema.ts";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Character,
    Episode
  }
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);

