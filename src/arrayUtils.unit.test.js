import { flatten } from './arrayUtils.ts';
import { expectedCases, edgeCases } from './arrayUtils.unit.fixtures.js';

describe('Array utility functions', () => {
  describe('Flatten', () => {
    it.each(expectedCases)('should flatten an arbitrarily nested array of values e.g %s', (input, output) => {
      expect(flatten(input)).toEqual(output);
    });

    it.each(edgeCases)('should gracefully handle strange or invalid inputs e.g %s', (input, output) => {
      expect(flatten(input)).toEqual(output);
    });

    it('should handle long arrays while maintaining correct order e.g 500,000 items', () => {
      const items = Array(5e5).fill(1).map(item => [
        item, 
        [[[[[[[[[[[[[[[[[[[[[[[[[item, 9]]]]]]]]]]]]]]]]]]]]]]]]],
      ]);
      const result = flatten(items);
      const pattern = [1,1,9,1,1,9];
      
      expect(result.slice(0, 6)).toEqual(pattern);
      expect(result.slice(1).slice(-6)).toEqual(pattern);
    });
  });
});
