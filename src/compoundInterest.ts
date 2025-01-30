/**
 * Calculates compound interest
 * @param principal - Initial amount
 * @param rate - Annual interest rate (as decimal, e.g., 0.05 for 5%)
 * @param time - Time period in years
 * @param compoundingFrequency - Number of times interest is compounded per year (default: 1)
 * @returns Final amount after compound interest
 */
export function calculateCompoundInterest(
  principal: number,
  rate: number,
  time: number,
  compoundingFrequency: number = 1
): number {
  if (principal <= 0 || rate < 0 || time < 0 || compoundingFrequency <= 0) {
    throw new Error('All parameters must be positive numbers');
  }

  const amount = principal * Math.pow(
    1 + (rate / compoundingFrequency),
    compoundingFrequency * time
  );
  
  return parseFloat(amount.toFixed(2)); // Round to 2 decimal places
} 