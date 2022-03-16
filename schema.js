const {gql} = require("apollo-server");

const typeDefs = gql`
	type Order {
		id: Int!
	}
	type Query {
		order(id: Int!): Order!
	}
`;
module.exports = typeDefs;
