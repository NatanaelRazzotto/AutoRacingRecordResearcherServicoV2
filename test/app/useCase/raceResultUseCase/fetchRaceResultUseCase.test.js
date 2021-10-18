const {
	RequestService,
} = require('../../../../src/app/serviceApplication/requestService');
const {
	FetchResultRaceUseCase,
} = require('../../../../src/app/UseCase/raceResultUseCase/fetchResultRaceUseCase');

describe('RaceResultUseCase', () => {
	const requestService = new RequestService();
	let fetchResultRaceUseCase;
	beforeAll(() => {
		fetchResultRaceUseCase = new FetchResultRaceUseCase(requestService);
	});

	it('Serach URL ', async () => {
		const configureFilter = {
			year: 2020,
			round: 17,
			grid: 3,
		};
		const resultRace = await fetchResultRaceUseCase.fecthResults(
			configureFilter
		);
		console.log(resultRace);
		expect(resultRace.MRData.RaceTable).toEqual(
			expect.objectContaining({
				season: expect.any(String),
			}),
			expect.arrayContaining([
				expect.objectContaining({
					round: expect.any(String),
				}),
			])
		);
	});

	it('Fetch Data execute ', async () => {
		const configureFilter = {
			year: 2020,
			round: 17,
			grid: 3,
		};
		const resultRace = await fetchResultRaceUseCase.fetchExecute(
			configureFilter
		);
		// eslint-disable-next-line no-console
		console.log(resultRace);
		expect(resultRace.Results).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					number: expect.any(String),
					position: expect.any(String),
					positionText: expect.any(String),
					Driver: expect.any(Object),
					Constructor: expect.any(Object),
				}),
			])
		);
	});

	it('Pesistencia de dados ', async () => {
		const configureFilter = {
			year: 1960,
			round: 5,
		};
		const resultRace = await fetchResultRaceUseCase.executeGerador(configureFilter);
		// eslint-disable-next-line no-console
		console.log(resultRace);
		expect(resultRace).toEqual({
			resultId: expect.any(Number),
			raceId: expect.any(Number),
			driverId: expect.any(String),//Driver: [Object],
			constructorId: expect.any(String),//Constructor: [Object],
			number: expect.any(String),
			grid: expect.any(String),
			position: expect.any(String),
			positionText: expect.any(String),
			// positionOrder: "",
			time: expect.any(String),
			points: expect.any(String),
			laps: expect.any(String),
			statusId: expect.any(String),
			updatedAt: expect.any(Date),
			createdAt: expect.any(Date),
		});
	});
});

