export const expectedCases = [
  [ 
    [ 1, [ 2, [ 3 ] ], 4 ], [1,2,3,4],
  ],
  [
    [ 1, [ 2, [ 3 ] ], [[[[[[[[[[4]]]]]]]]]] ], [1,2,3,4],
  ],
    [[[], [[]], [[], [[[]]]]], []],
  [
    [null, [ 2, [ 3 ] ], 4 ], 
    [null, 2, 3, 4],
  ],
  [
    [null, [ 2, [ {} ] ], 4 ],
    [null, 2, {}, 4],
  ],
  [
    [null, [ 2, [ undefined ] ], 4 ],
    [null, 2, undefined, 4],
  ],
  [
    [ [[[[Math.ceil]]]], [ 2, [[ undefined ]] ], 4 ], 
    [Math.ceil, 2, undefined, 4],
  ],
  [
    [[1,2,3]], 
    [1,2,3]
  ],
  [['foo', ['bar']], ['foo', 'bar']],
];