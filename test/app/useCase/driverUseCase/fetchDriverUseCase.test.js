const {
	FetchDriverUseCase,
} = require('../../../../src/app/UseCase/driverUseCase/fetchDriverUseCase');
const {
	RequestService,
} = require('../../../../src/app/serviceApplication/requestService');

describe('FetchDriverUseCase', () => {
	const requestService = new RequestService();
	let fetchDriverUseCase;
	beforeAll(() => {
		fetchDriverUseCase = new FetchDriverUseCase(requestService);
	});
	it('Fetch Driver ', async () => {
		const configure = {
			filter: 'alonso',
		};
		const fetchDriver = await fetchDriverUseCase.execute(configure);
		// eslint-disable-next-line no-console
		console.log(fetchDriver);
		expect(fetchDriver).toEqual(
			expect.objectContaining({
				driverId: expect.any(String),
			}),
			expect.arrayContaining([
				expect.objectContaining({
					driverId: expect.any(String),
				}),
			])
		);
	});
});
