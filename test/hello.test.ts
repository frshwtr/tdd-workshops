import {hello} from '../src/hello';

describe('hello world', () => {
	it('should work', () => {
		const result = hello();
		expect(result).toBe('hello');
	});
});
