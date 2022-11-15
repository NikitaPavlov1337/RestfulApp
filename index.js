/* eslint-disable import/extensions */
import express from 'express';
import mongoose from 'mongoose';
import config from './config/config.js';
import logger from './logger/index.js';
import router from './router/index.js';

const app = express();
app.use(express.json());
app.use('/api', router);

async function startApp() {
	try {
		await mongoose.connect(config.get('mongo.url', { useUnifiedTopology: true }));
		app.listen(config.get('server.port'), () => {
			logger.info('Server up');
		});
	} catch (e) {
		logger.error(e);
	}
}

startApp();
