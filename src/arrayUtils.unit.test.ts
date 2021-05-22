
describe('Array utility functions', () => {
  describe('Flatten', () => {
    it('should flatten an arbitrarily nested array of values', () => {
      expect(flatten([ 1, [ 2, [ 3 ] ], 4 ])).toEqual([1,2,3,4]);
    });

    xit('should gracefully handle strange or invalid inputs', () => {});
  });
});