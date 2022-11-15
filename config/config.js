import convict from 'convict';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

class Config {
	constructor(schema) {
		this.schema = schema;
		this.convict = convict(schema);
		const filePath = `config/${this.convict.get('env')}.json`;
		if (fs.existsSync(filePath)) {
			this.convict.loadFile(filePath);
		}

		this.validate();
	}

	get(path) {
		return this.convict.get(path);
	}

	validate() {
		this.convict.validate({
			allowed: 'strict'
		});
	}
}

const config = new Config({
	env: {
		doc: 'The application environment.',
		format: ['production', 'development', 'test'],
		default: 'production',
		example: 'production',
		env: 'NODE_ENV'
	},
	server: {
		url: 'localhost',
		port: process.env.PORT
	},
	mongo: {
		url: {
			doc: 'Full URL for connection to mongodb',
			format: String,
			default: `mongodb+srv://user:${process.env.DB_PASS}@cluster0.kzuzxei.mongodb.net/?retryWrites=true&w=majority`,
			example: 'mongodb://localhost:27017/feron',
			env: 'MONGODB_URL'
		}
	}
});

export default config;
