import { AsyncRouter } from 'express-async-router';
import auth from './auth';

export default (ctx) => {
	const api = AsyncRouter();

	api.all('/', () => ({ok: true, version: '1.0.1'}));

	api.all('/test', () => ({test: 123123}));
	api.all('/error', () => {
		throw new Error('dffdsgdf');
	});

	api.all('/timeout', (req, res) => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve({
					some: 123
				})
			}, 10000)
		});
	});

	return api;
}
