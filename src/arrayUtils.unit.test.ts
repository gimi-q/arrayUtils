import { flatten } from './arrayUtils.js';
import { expectedCases } from './arrayUtils.unit.fixtures.js';

describe('Array utility functions', () => {
  describe('Flatten', () => {
    it.each(expectedCases)('should flatten an arbitrarily nested array of values', (input, output) => {
      expect(flatten(input)).toEqual(output);
    });

    xit('should gracefully handle strange or invalid inputs', () => {});
  });
});