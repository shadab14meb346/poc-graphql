const db = require("./db");
const resolvers = require("./resolvers");
const {ApolloServer} = require("apollo-server");
const typeDefs = require("./schema");

// TODO set up resolvers and type definitions

const setupServer = async () => {
	await db.initialize();

	const server = new ApolloServer({
		resolvers,
		typeDefs,
		playground: true,
		dataSources: () => ({
			db,
		}),
	});
	server.listen().then(({url}) => {
		console.log(`🚀  Server ready at ${url}`);
	});
};

setupServer();
