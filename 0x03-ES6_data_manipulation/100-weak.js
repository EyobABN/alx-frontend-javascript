export const weakMap = new WeakMap();
export function queryAPI(endpointArg) {
  let numberOfQueries;
  if (weakMap.has(endpointArg)) {
    numberOfQueries = weakMap.get(endpointArg);
    weakMap.set(endpointArg, numberOfQueries + 1);
  } else {
    weakMap.set(endpointArg, 1);
  }
  if (numberOfQueries >= 5) throw new Error('Endpoint load is high');
}
