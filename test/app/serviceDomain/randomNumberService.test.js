const {
	RandomNumberService,
} = require('../../../src/app/serviceDomain/randomNumberService');

describe('RandomNumberService', () => {
	beforeEach(() => {
		// randomNumberService = new RandomNumberService();
	});
	test('Gera até 10 ', () => {
		// o meu retorno seja um valor menor que 11
		const received = RandomNumberService.generate(15);
		// console.log(received);
		expect(received).toBeLessThan(20);
	});
	test('Verifica Duplicados Gerados ', () => {
		const maxRandom = 10;
		const arrayGenerate = RandomNumberService.generateNotRepition(maxRandom);
		const validate = RandomNumberService.validateDuplicated(arrayGenerate);
		expect(validate).toBe(false);
	});
	it('Valida ano dentro de um intervalo ', () => {
		const min = 1950;
		const max = 2021;
		const generateNewYear = RandomNumberService.generateYear(min, max);
		// console.log(generateNewYear);
		expect(generateNewYear).toBeGreaterThanOrEqual(min);
		expect(generateNewYear).toBeLessThanOrEqual(max);
	});
});
