import { calculateCompoundInterest } from './compoundInterest';

describe('calculateCompoundInterest', () => {
  test('should calculate simple annual compounding', () => {
    expect(calculateCompoundInterest(1000, 0.05, 1)).toBe(1050.00);
  });

  test('should calculate quarterly compounding', () => {
    expect(calculateCompoundInterest(1000, 0.05, 1, 4)).toBe(1050.95);
  });

  test('should calculate monthly compounding over multiple years', () => {
    expect(calculateCompoundInterest(1000, 0.05, 5, 12)).toBe(1283.36);
  });

  test('should throw error for negative principal', () => {
    expect(() => calculateCompoundInterest(-1000, 0.05, 1)).toThrow();
  });

  test('should throw error for negative rate', () => {
    expect(() => calculateCompoundInterest(1000, -0.05, 1)).toThrow();
  });

  test('should throw error for negative time', () => {
    expect(() => calculateCompoundInterest(1000, 0.05, -1)).toThrow();
  });

  test('should throw error for zero compounding frequency', () => {
    expect(() => calculateCompoundInterest(1000, 0.05, 1, 0)).toThrow();
  });
}); 