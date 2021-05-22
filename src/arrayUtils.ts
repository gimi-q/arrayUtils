export const flatten = (items: any[]) => {
  let result = [];

  const flattenEach = input =>
    Array.isArray(input) ?
      input.forEach(flattenEach)
      : result.push(input);

  Array.isArray(items) && flattenEach(items);

  return result;
};
