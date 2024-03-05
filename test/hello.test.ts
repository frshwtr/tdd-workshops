import {fizzbuzz} from '../src/hello';

describe('Positive integers and outputs their string representation', () => {
	it.each([
		[1, '1'],
		[2, '2'],
		[4, '4'],
	])('should return stringified number %i is %s', (arg: number, expected: string) => {
		const result = fizzbuzz(arg);
		expect(result).toBe(expected);
	});
  describe(' If the number is a multiple of three, return the string "Fizz"', () => {
    it.each([
      [3, 'Fizz'],
      [6, 'Fizz'],
      [9, 'Fizz'],
    ])('should return stringified number %i is %s', (arg: number, expected: string) => {
      const result = fizzbuzz(arg);
      expect(result).toBe(expected);
    })
  })
});
