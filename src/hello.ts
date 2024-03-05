export const hello: () => 'hello' = () => 'hello';

export function fizzbuzz(n: number): string {
  if (n % 3 === 0) {
    return 'Fizz';
  }
	return n.toString();
}
