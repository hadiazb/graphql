import mongoose from 'mongoose';

mongoose
	.connect('mongodb://localhost/graphqltest', {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log('Database is connect'))
	.catch((err) => console.log(err));
