import User from './models/User';

export const resolvers = {
	Query: {
		getUsers: async () => {
			return await User.find();
		},

		getUser: async (_, { id }) => {
			return await User.findById(id);
		},
	},

	Mutation: {
		createUser: async (
			_,
			{ nickname, fullname, city, phone }
		) => {
			const user = new User({
				nickname,
				fullname,
				city,
				phone,
			});

			return await user.save();
		},

		deleteUser: async (_, { id }) => {
			return await User.findByIdAndDelete(id);
		},
	},
};
