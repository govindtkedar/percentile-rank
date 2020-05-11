declare module 'percentile-range' {
  /**
   * Calculate a percentile rank/range for given array of values.
   */
  export default function percentileRank(values: number | number[], list: number[] | object[], fn?: (obj: object) => number): number[];
}
