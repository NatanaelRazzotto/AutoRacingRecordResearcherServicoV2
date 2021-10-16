const {
	RequestService,
} = require('../../../src/app/serviceApplication/requestService');

describe('RequestService', () => {
	let requestService;
	beforeEach(() => {
		requestService = new RequestService();
	});

	it('Requisition users', async () => {
		const received = await requestService.request(
			'https://ergast.com/api/f1/drivers/alonso.json'
		);
		// eslint-disable-next-line no-console
		console.log(received);
		expect(received).toEqual(
			expect.objectContaining({
				MRData: expect.any(Object),
			})
		);
	});

	it('Requisition User Promisse', async () => {
		const received = await requestService.requestFetch(
			'https://ergast.com/api/f1/drivers/alonso.json'
		);
		// eslint-disable-next-line no-console
		console.log(received);
		expect(received).toEqual(
			expect.objectContaining({
				MRData: expect.any(Object),
			})
		);
	});

	it('create Circuit', async () => {
		const Circuit = {
			circuitRef: "yas_marina",//circuitId
			name: "Yas Marina Circuit",//circuitName
			location: 'Abu Dhabi',//locality
			country: 'UAE',//country
			lat: '24.4672',//lat
			lng: '54.6031',//long
			url: 'http://en.wikipedia.org/wiki/Yas_Marina_Circuit'//url
		};
		const received = await requestService.requestPost(Circuit, "/circuit");
		console.log(received);
		expect(received).toEqual({
			circuitId: expect.any(Number),
			circuitRef: "yas_marina",
			name: "Yas Marina Circuit",
			location: 'Abu Dhabi',
			country: 'UAE',
			lat: 24.4672,
			lng: 54.6031,
			url: 'http://en.wikipedia.org/wiki/Yas_Marina_Circuit',
			updatedAt: expect.any(Date),
			createdAt: expect.any(Date),
		});
	});
});
