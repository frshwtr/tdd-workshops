import {fizzbuzz} from '../src/hello';

describe('hello world', () => {
	it.each([
		[1, '1'],
		[2, '2'],
		[4, '4'],
		[5, '5'],
	])('should return stringified number %i', (arg: number, expected: string) => {
		const result = fizzbuzz(arg);
		expect(result).toBe(expected);
	});
});
