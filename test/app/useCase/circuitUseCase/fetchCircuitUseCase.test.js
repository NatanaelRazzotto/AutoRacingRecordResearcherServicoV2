const {
	FetchCircuitUseCase,
} = require('../../../../src/app/UseCase/circuitUseCase/fetchCircuitUseCase');
const {
	RequestService,
} = require('../../../../src/app/serviceApplication/requestService');

describe('FetchCircuitUseCase', () => {
	//const requestService = new RequestService();
	let fetchCircuitUseCase;
	beforeAll(() => {
		fetchCircuitUseCase = new FetchCircuitUseCase();
	});
	it('Fetch Driver ', async () => {
		const Circuit = {
			circuitId: "curitiba",//circuitId
			circuitName: "Yas Marina Circuit",//circuitName
			locality: 'Abu Dhabi',//locality
			country: 'UAE',//country
			lat: '24.4672',//lat
			long: '54.6031',//long
			url: 'http://en.wikipedia.org/wiki/Yas_Marina_Circuit'//url
		};
		const fetchCircuit = await fetchCircuitUseCase.persistenceOfObjects(Circuit);
		// eslint-disable-next-line no-console
		console.log(fetchCircuit);
		expect(fetchCircuit).toEqual({
			circuitId: expect.any(Number),
			circuitRef: "curitiba",
			name: "Yas Marina Circuit",
			location: 'Abu Dhabi',
			country: 'UAE',
			lat: '24.4672',
			lng: '54.6031',
			url: 'http://en.wikipedia.org/wiki/Yas_Marina_Circuit',
			updatedAt: expect.any(Date),
			createdAt: expect.any(Date),
		});
	});
});
