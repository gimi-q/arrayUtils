export const flatten = (arr: any[]) => {
  let result = [];
  
  if (!Array.isArray(arr)) return result;

  result = arr.reduce((acc, cur) => 
    acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []
  );

  return result;
};

