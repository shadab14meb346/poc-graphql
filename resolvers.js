const resolvers = {
	Query: {
		order: async (parentArgs, args, context, info) => {
			const {id} = args;
			const db = context.dataSources.db;
			const data = await db.getOrders();
			console.log({data});
			const response = {id};
			return response;
		},
		// orders: async (parentArgs, {status}) => {
		// 	const response = await getOrders();
		// 	return response;
		// },
	},
	// Mutation: {
	// 	updateStatus: async (parentArgs, {id, status}) => {
	// 		return await createQuestion({...input, jwtUser: user});
	// 	},
	// },
};

module.exports = resolvers;
