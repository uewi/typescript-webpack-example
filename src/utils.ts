export function gcd(a: number, b: number) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}

export const pi: number = 3.14;
